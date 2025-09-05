export default function Navbar() {
	return (
		<header className="navbar">
			<div className="container">
				<nav className="navbar-nav" aria-label="ניווט ראשי">
					<a className="nav-link" href="#home">
						בית
					</a>
					<a className="nav-link" href="#carousel">
						מי אנחנו
					</a>
					<a className="nav-link" href="#gallery">
						גלריה
					</a>
					<a className="nav-link" href="#products">
						מוצרים
					</a>
					<a className="nav-link" href="#contact">
						צור קשר
					</a>
				</nav>
			</div>
		</header>
	);
}
