import { FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Contact() {
	return (
		<section id="contact-section">
			<h2>
				Contact Us
			</h2>

			<div className="flex gap-[0.3rem] justify-center items-center">
				Email us at:
				<a href="mailto:moorparkcountrydays@gmail.com">
					moorparkcountrydays@gmail.com
				</a>
			</div>

			<div className='flex gap-[1rem] justify-center items-center'>
				<a href="https://www.facebook.com/MoorparkCountryDays">
					<FaFacebook className='h-[2rem] w-[2rem] fill-[var(--green)]' />
				</a>
				<a href="https://www.instagram.com/moorparkcountrydays">
					<FaInstagram className='h-[2rem] w-[2rem] fill-[var(--green)]' />
				</a>
			</div>

			{/* Location and Direction */}
			<p>Find us at: High Street, Moorpark, CA, United States</p>

			<div className='bg-[#F7B500] p-[1rem]! border-2 border-dashed border-black rounded-[1rem]'>
				<p className='text-[1.5rem]! mb-[1rem]! mx-auto!'>Important: Road Closures</p>
				<ul className="list-disc list-outside pl-[1.5rem]! text-left text-black">
					<li><strong>Wicks Road:</strong> Residents will not be permitted to enter or exit Wicks Road between <strong>7:00 am</strong> and <strong>12:00 pm</strong></li>
					<li><strong>Casey Road:</strong> Residents will not be permitted to enter or exit Casey Road between <strong>7:00 am</strong> and <strong>12:00 pm</strong></li>
					<li><strong>Charles Street to Moorpark Ave:</strong> Closed from <strong>7:00 am</strong> to <strong>12:00 pm</strong></li>
					<li><strong>Everett Street to Moorpark Ave:</strong> Closed from <strong>7:00 am</strong> to <strong>12:00 pm</strong></li>
					<li><strong>Casey Road to Moorpark Road to Poindexter Avenue:</strong> Closed from <strong>7:00 am</strong> to <strong>12:00 pm</strong></li>
					<li><strong>Historic High Street:</strong> Closed from <strong>6:00 am</strong> to <strong>5:00 pm</strong></li>
				</ul>
			</div>

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