import { FaFacebook } from 'react-icons/fa'

export default function About() {
	return (
		<section id="contact-section" className="bg-[white]">
			<h2>
				Contact Us
			</h2>

			<div className="flex gap-[0.3rem] justify-center items-center">
				Email us at:
				<a href="mailto:moorparkcountrydays@gmail.com">
					moorparkcountrydays@gmail.com
				</a>
			</div>

			<p>
				Or send us a message below:
			</p>

			<form>
				<input
					type="text"
					placeholder="Your Name"
					required
					className=""
				/>
				<input
					type="email"
					placeholder="Your Email"
					required
					className=""
				/>
				<textarea
					placeholder="Your Message"
					required
					className=""
				>
				</textarea>
				<button
					type="submit"
					className="btn"
				>
					Send Message
				</button>
			</form>

			<div className=''>
				<a href="https://www.facebook.com/MoorparkCountryDays">
					<FaFacebook className='h-[2rem] w-[2rem] fill-[var(--green)]'/>
				</a>
			</div>

			{/* Location and Direction */}
			<p>Find us at: High Street, Moorpark, CA, United States</p>

			<div className="flex w-[100%] justify-center items-center">
				<iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.661853142744!2d-118.88272488478234!3d34.28501338053488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e83bcf4d37d475%3A0x6e3d48e55a2c9cfb!2sHigh%20St%2C%20Moorpark%2C%20CA%2093031%2C%20USA!5e0!3m2!1sen!2sus!4v1717368398043!5m2!1sen!2sus"
                    loading="lazy"
					title="Google Maps"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
					className="w-[100%] max-w-[35rem] max-h-[18rem] h-[100%]"
                ></iframe>
			</div>

		</section>
	)
}