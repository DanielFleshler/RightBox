import Section from "./Section";

export default function ProductsSection() {
  return (
    <Section id="products" title="מוצרים" className="bg-white text-darkslate">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl border border-black/10 bg-warm p-6 transition hover:-translate-y-1 hover:shadow-xl">כרטיס מוצר (דוגמא)</div>
        <div className="rounded-xl border border-black/10 bg-warm p-6 transition hover:-translate-y-1 hover:shadow-xl">כרטיס מוצר (דוגמא)</div>
        <div className="rounded-xl border border-black/10 bg-warm p-6 transition hover:-translate-y-1 hover:shadow-xl">כרטיס מוצר (דוגמא)</div>
      </div>
    </Section>
  );
}
