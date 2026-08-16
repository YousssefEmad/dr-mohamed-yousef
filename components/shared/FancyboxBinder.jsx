"use client";

import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function FancyboxBinder({ selector = "[data-fancybox]" }) {
  useEffect(() => {
    Fancybox.bind(selector, {
      Thumbs: { type: "classic" },
      Toolbar: { display: { left: ["infobar"], right: ["slideshow", "thumbs", "close"] } },
    });
    return () => {
      Fancybox.destroy();
    };
  }, [selector]);

  return null;
}
