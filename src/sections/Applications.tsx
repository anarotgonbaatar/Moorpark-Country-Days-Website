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
				<a 
					href="https://docs.google.com/forms/d/e/1FAIpQLSfQNuG_B-bx6QdesfGksCxDVPYzGN6Nz3VWZa8dS7RiANCJ6A/viewform"
					className="btn gap-[0.5rem]"
					target="_blank"
					rel="noopener"
				>
					Sponsorship <FaLink/>
				</a>
				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLSdiIl-y4uMAwgQhOKN1zLts4CDCCkEz8UOMc2NdmuxWTrYztw/viewform"
					className="btn gap-[0.5rem]"
					target="_blank"
					rel="noopener"
				>
					Volunteer <FaLink/>
				</a>
				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLSeEigWW-hkfwlaX3aeue2xvXJsjGggr53byIfDlbS7mUxufnw/viewform"
					className="btn gap-[0.5rem]"
					target="_blank"
					rel="noopener"
				>
					Parade <FaLink/>
				</a>
				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLSceQYHpIqLfqOP7ffTxqM8Y-HB6H_qmun2QiMlDWKmik7pWHA/viewform"
					className="btn gap-[0.5rem]"
					target="_blank"
					rel="noopener"
				>
					Vendor <FaLink/>
				</a>
			</div>
		</section>
	)
}