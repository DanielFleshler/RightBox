import Section from "./Section";

export default function GallerySection() {
	return (
		<Section id="gallery" title="גלריה" className="text-textlight">
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
				<div className="aspect-square rounded-xl bg-white border border-steel/30" />
				<div className="aspect-square rounded-xl bg-white border border-steel/30" />
				<div className="aspect-square rounded-xl bg-white border border-steel/30" />
				<div className="aspect-square rounded-xl bg-white border border-steel/30" />
				<div className="aspect-square rounded-xl bg-white border border-steel/30" />
				<div className="aspect-square rounded-xl bg-white border border-steel/30" />
				<div className="aspect-square rounded-xl bg-white border border-steel/30" />
				<div className="aspect-square rounded-xl bg-white border border-steel/30" />
			</div>
		</Section>
	);
}
