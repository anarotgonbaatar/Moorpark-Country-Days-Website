import Logo from '../assets/logos/Moorpark Country Days.jpg'

export default function Hero() {
	return (
		<section id="hero-section" className="">
			<div className="flex flex-col items-center text-[white]">
				
				<img src={Logo} alt="Moorpark Country Days Logo" className='w-[35rem] mb-[0.5rem] border-2 border-[var(--green-dark)]'/>
				<h1>
					Moorpark Country Days 2025
				</h1>
				<span>
					Join us on Saturday, October 4th, 2025 for the Parade & Street Fair!
				</span>

				<div className="flex gap-[1rem] mt-[2rem]">
					<a
						href="/#applications-section"
						className="btn cta-btn"
					>
						Apply Now
					</a>
					<a
						href="/#contact-section"
						className="btn"
					>
						Contact Us
					</a>
				</div>

			</div>
		</section>
	)
}