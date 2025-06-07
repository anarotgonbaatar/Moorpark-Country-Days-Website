import { FaLink } from "react-icons/fa"

export default function About() {

	return (
		<section id="applications-section" className="bg-[white]">
			<h2>
				Applications
			</h2>

			<p>
				Apply to participate in this year's Parade & Street Fair:
			</p>

			{/* Tabs/Types */}
			<div className="flex gap-[1rem] flex-wrap justify-center">
				<a href="" className="btn gap-[0.5rem]">
					Sponsorship <FaLink/>
				</a>
				<a href="" className="btn gap-[0.5rem]">
					Volunteer <FaLink/>
				</a>
				<a href="" className="btn gap-[0.5rem]">
					Parade <FaLink/>
				</a>
				<a href="" className="btn gap-[0.5rem]">
					Vendor <FaLink/>
				</a>
			</div>
		</section>
	)
}