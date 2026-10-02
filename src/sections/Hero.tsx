// import Logo from '../assets/logos/Moorpark Country Days.jpg'
import { FaFacebook, FaInstagram, FaLink } from 'react-icons/fa'

export default function Hero() {
	return (
		<section id="hero-section" className="">
			<div className="flex flex-col items-center gap-[1rem]">

				{/* <img src={Logo} alt="Moorpark Country Days Logo" className='w-[35rem] mb-[0.5rem] border-2 border-[var(--green-dark)]' /> */}
				<div className='flex flex-col items-center'>
					<h1 className='font-bold leading-none mb-[1rem]!'>
						Moorpark Country Days 2026
					</h1>
					<h3 className='mt-[-0.75rem]!'>
						"OUR COMMUNITY, OUR LEGACY"
					</h3>
					<span>
						A RUDY PEREZ JR. MEMORIAL FOUNDATION EVENT
					</span>
					<span>
						CO-SPONSORED BY THE CITY OF MOORPARK
					</span>
				</div>

				<div className="flex gap-[1rem] mt-[2rem]">
					<a
						href="/#applications-section"
						className="btn cta-btn"
					>
						Click Here to Volunteer
					</a>
					<a
						href="/#contact-section"
						className="btn"
					>
						Contact Us
					</a>
				</div>

				<a
					href="https://square.link/u/kiFnD00b?src=sheet"
					className="btn gap-[0.5rem]"
					target="_blank"
					rel="noopener"
				>
					Donate to Moorpark Country Days <FaLink />
				</a>

				<div className='flex gap-[1rem] justify-center items-center mt-[1rem]'>
					<a href="https://www.facebook.com/MoorparkCountryDays">
						<FaFacebook className='h-[2rem] w-[2rem] fill-[var(--green)]' />
					</a>
					<a href="https://www.instagram.com/moorparkcountrydays">
						<FaInstagram className='h-[2rem] w-[2rem] fill-[var(--green)]' />
					</a>
				</div>

			</div>
		</section>
	)
}