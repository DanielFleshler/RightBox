import Section from "./Section";

export default function ProductsSection() {
  return (
    <Section id="products" title="מוצרים" className="text-textlight">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="plate rounded-xl p-6 transition hover:-translate-y-1 hover:shadow-xl bg-white">כרטיס מוצר (דוגמא)</div>
        <div className="plate rounded-xl p-6 transition hover:-translate-y-1 hover:shadow-xl bg-white">כרטיס מוצר (דוגמא)</div>
        <div className="plate rounded-xl p-6 transition hover:-translate-y-1 hover:shadow-xl bg-white">כרטיס מוצר (דוגמא)</div>
      </div>
    </Section>
  );
}
