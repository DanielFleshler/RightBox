import Section from "./Section";

const products = [
  {
    name: "מערכת מגירות",
    image: "/images/products/product-1.svg",
    alt: "מערכת מגירות לרכב שטח",
  },
  {
    name: "פתרון אחסון",
    image: "/images/products/product-2.svg",
    alt: "פתרון אחסון מודולרי",
  },
  {
    name: "שולחן מתקפל",
    image: "/images/products/product-3.svg",
    alt: "שולחן מתקפל לשטח",
  },
];

export default function ProductsSection() {
  return (
    <Section id="products" title="מוצרים" className="text-textlight lg:scroll-mt-0 xl:scroll-mt-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.name} className="plate rounded-xl overflow-hidden transition hover:-translate-y-1 hover:shadow-xl bg-white">
            <div className="aspect-square w-full overflow-hidden bg-workshop">
              <img src={p.image} alt={p.alt} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 text-right">
              <h3 className="font-bold text-lg">{p.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
