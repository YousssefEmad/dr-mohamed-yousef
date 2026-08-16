"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useSiteConfig } from "@/context/SiteContext";
import { uiLabels } from "@/data/navigation";
import { contactPage as localContact } from "@/data/contact";

async function sendViaFormSubmit(payload, lang, siteConfig) {
  const email = siteConfig.contactEmail || siteConfig.email;
  const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      service: payload.service,
      message: payload.message,
      _subject:
        lang === "en"
          ? `New appointment request - ${payload.name}`
          : `طلب حجز جديد - ${payload.name}`,
      _template: "table",
      _captcha: "false",
    }),
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok || result.success === "false" || result.success === false) {
    throw new Error("formsubmit_failed");
  }
}

async function sendViaPhp(payload, lang, siteConfig) {
  const body = new FormData();
  Object.entries(payload).forEach(([key, value]) => body.append(key, value));
  body.append(
    "_subject",
    lang === "en"
      ? `New appointment request - ${payload.name}`
      : `طلب حجز جديد - ${payload.name}`
  );
  const response = await fetch(siteConfig.formEndpoint || "/sendmail.php", {
    method: "POST",
    headers: { Accept: "application/json" },
    body,
  });
  const result = await response.json().catch(() => ({ success: response.ok }));
  if (!response.ok || result?.success === false) {
    throw new Error("php_failed");
  }
}

export default function ContactForm({ services = [] }) {
  const { pick, t, lang } = useLanguage();
  const siteConfig = useSiteConfig();
  const contactPage = siteConfig.contactPage || localContact;
  const [status, setStatus] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      service: String(data.get("service") || "").trim(),
      message: String(data.get("message") || "").trim(),
      lang,
    };
    if (!payload.name || !payload.email || !payload.phone || !payload.message) {
      setStatus("invalid");
      return;
    }
    setStatus("loading");
    try {
      await sendViaFormSubmit(payload, lang, siteConfig);
      setStatus("ok");
      form.reset();
    } catch (_) {
      try {
        await sendViaPhp(payload, lang, siteConfig);
        setStatus("ok");
        form.reset();
      } catch (__) {
        setStatus("error");
      }
    }
  };

  return (
    <div className="contact-form">
      <form onSubmit={onSubmit}>
        {status === "ok" ? <p className="text-success">{pick(contactPage, "success")}</p> : null}
        {status === "error" ? <p className="text-danger">{t(uiLabels, "formError")}</p> : null}
        {status === "invalid" ? <p className="text-danger">{t(uiLabels, "formError")}</p> : null}
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input name="name" required className="form-control" placeholder={t(uiLabels, "fullName")} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input name="email" type="email" required className="form-control" placeholder={t(uiLabels, "email")} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input name="phone" required className="form-control" placeholder={t(uiLabels, "phone")} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <select name="service" required className="form-control" defaultValue="">
                <option value="" disabled>
                  {t(uiLabels, "chooseService")}
                </option>
                {services.map((service) => (
                  <option key={service.slug} value={pick(service, "title")}>
                    {pick(service, "title")}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <textarea name="message" rows={5} required className="form-control" placeholder={t(uiLabels, "message")} />
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="default-btn" disabled={status === "loading"}>
              {status === "loading" ? t(uiLabels, "sending") : t(uiLabels, "send")}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
