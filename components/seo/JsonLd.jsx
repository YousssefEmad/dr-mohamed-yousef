export default function JsonLd({ data }) {
  if (!data) return null;
  const payload = Array.isArray(data) ? data.filter(Boolean) : [data];
  return (
    <>
      {payload.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
