import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import "../styles/navbar.css"

const navLinks = [
	{ label: 'About', href: '#about-section' },
	{ label: 'Applications', href: '#applications-section' },
	{ label: 'Sponsors', href: '#sponsors-section' },
	{ label: 'Gallery', href: '#gallery-section' },
	{ label: 'Contact', href: '#contact-section' },
]

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<nav id="navbar" className="navbar">
			<div className="navbar-inner">
				<a
					href="#hero-section"
					className="navbar-brand"
					onClick={() => setMenuOpen(false)}
				>
					Moorpark Country Days
				</a>

				<div className="navbar-links">
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="navbar-link"
						>
							{link.label}
						</a>
					))}
				</div>

				<button
					type="button"
					className="navbar-menu-button"
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
					aria-expanded={menuOpen}
				>
					{menuOpen ? <FaTimes /> : <FaBars />}
				</button>
			</div>

			{menuOpen && (
				<div className="navbar-mobile-menu">
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="navbar-mobile-link"
							onClick={() => setMenuOpen(false)}
						>
							{link.label}
						</a>
					))}
				</div>
			)}
		</nav>
	)
}