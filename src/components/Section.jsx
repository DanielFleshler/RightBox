export default function Section({ id, title, className = "", children }) {
	return (
		<section id={id} className={`py-20 ${className}`.trim()}>
			<div className="container mx-auto px-4">
				{title ? (
					<div className="mb-8 text-center">
						<h2 className="mx-auto text-3xl sm:text-4xl font-extrabold leading-[var(--leading-tight)] tracking-tight heading-xl">
							{title}
						</h2>
						<div className="mx-auto mt-2 h-1 w-20 rounded-full bg-[var(--color-accent)]" />
					</div>
				) : null}
				{children}
			</div>
		</section>
	);
}
