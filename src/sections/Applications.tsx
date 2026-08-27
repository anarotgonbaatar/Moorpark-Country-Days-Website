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
					href="https://docs.google.com/forms/d/e/1FAIpQLSdIOIOxlMwPLCmzLuBeHxg6wDZwsWW0M1X8t_oeyq6siEElNg/viewform?usp=header"
					className="btn gap-[0.5rem]"
					target="_blank"
					rel="noopener"
				>
					Sponsorship <FaLink />
				</a>
				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLSdiIl-y4uMAwgQhOKN1zLts4CDCCkEz8UOMc2NdmuxWTrYztw/viewform?usp=sf_link"
					className="btn gap-[0.5rem]"
					target="_blank"
					rel="noopener"
				>
					Volunteer <FaLink />
				</a>
				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLScrEHR6KJs6FMqqOLrGD2G4BAem_9WDiLs_sq3yI4FtALv3Hw/viewform?usp=header"
					className="btn gap-[0.5rem]"
					target="_blank"
					rel="noopener"
				>
					Parade <FaLink />
				</a>
				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLScecfDELMWOPilib3SIC1pbX7moUeO8Yg8jOD_nAf05qkNCig/viewform?usp=header"
					className="btn gap-[0.5rem]"
					target="_blank"
					rel="noopener"
				>
					Vendor <FaLink />
				</a>
				<a
					href="https://square.link/u/kiFnD00b?src=sheet"
					className="btn gap-[0.5rem]"
					target="_blank"
					rel="noopener"
				>
					Donate to Moorpark Country Days <FaLink />
				</a>
			</div>
		</section>
	)
}