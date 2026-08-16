import Link from "next/link";

export default function NotFound() {
  return (
    <section className="ptb-100 text-center">
      <div className="container">
        <h1>404</h1>
        <p>الصفحة غير موجودة</p>
        <Link href="/" className="default-btn">
          الرئيسية
        </Link>
      </div>
    </section>
  );
}
