export default function Section({ id, title, className = "", children }) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      <div className="container">
        {title ? <h2 className="section-title">{title}</h2> : null}
        {children}
      </div>
    </section>
  );
}

