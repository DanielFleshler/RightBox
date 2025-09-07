import Section from "./Section";

export default function GallerySection() {
  return (
    <Section id="gallery" title="גלריה" className="bg-[#F9FAFB] text-darkslate">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div className="aspect-square rounded-xl bg-warm border border-white/10" />
        <div className="aspect-square rounded-xl bg-warm border border-white/10" />
        <div className="aspect-square rounded-xl bg-warm border border-white/10" />
        <div className="aspect-square rounded-xl bg-warm border border-white/10" />
        <div className="aspect-square rounded-xl bg-warm border border-white/10" />
        <div className="aspect-square rounded-xl bg-warm border border-white/10" />
        <div className="aspect-square rounded-xl bg-warm border border-white/10" />
        <div className="aspect-square rounded-xl bg-warm border border-white/10" />
      </div>
    </Section>
  );
}
