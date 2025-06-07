import Sponsor1 from "../assets/logos/Rudy Perez Memorial Foundation.jpg"
import Sponsor2 from "../assets/logos/Moorpark CA Inc.png"
import Sponsor3 from "../assets/logos/Moorpark.png"

export default function About() {
	return (
		<section
			id="about-section"
			className="bg-[var(--gold)]"
		>
			<h2>
				About Moorpark Country Days
			</h2>

			<p>
				The Moorpark Country Days Parade & Street Fair is a beloved community tradition,
				bringing together thousands of local families and visitors for a day of
				fun, festivities, and community spirit.
				This is a unique opportunity for your business to gain exposure while
				supporting a meaningful celebration.
			</p>

			<h3>Organizers</h3>

			<div className="flex flex-wrap gap-[1rem] items-center justify-center">
				<img src={Sponsor1} className="sponsor-logo" alt="Rudy Perez Memorial Foundation" />
				<div className="sponsor-logo">
					<img src={Sponsor2} className="max-h-[8rem] p-[2px] bg-[white]" alt="Moorpark CA Inc" />
					<img src={Sponsor3} className="max-h-[8rem] " alt="Moorpark Life can be this good" />
				</div>
			</div>
		</section>
	)
}