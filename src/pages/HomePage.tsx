// Sections
import About from '../sections/About'
import Applications from '../sections/Applications'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import Gallery from '../sections/Gallery'
import Hero from '../sections/Hero'
import Sponsors from '../sections/Sponsors'
import Navbar from '../sections/Navbar'

export default function App() {

	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Applications />
			<Sponsors />
			<Gallery />
			<Contact />
			<Footer />
		</>
	)
}