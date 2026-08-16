"use client";

export default function PhoneLink({ href, children, className = "", target, rel }) {
  return (
    <a
      href={href}
      className={`phone-ltr ${className}`.trim()}
      dir="ltr"
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
}
