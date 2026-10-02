export default function Sponsors() {
	const diamondSponsors = [
		{
			sponsor_name: '100 GROUP',
			logo_url: '/diamond-sponsors/100-group.jpg',
		},
		{
			sponsor_name: 'HIGH STREET DEPOT',
			logo_url: '/diamond-sponsors/high-street-depot.jpg',
		},
	]

	const goldSponsors = [
		{
			sponsor_name: 'Adventist Health',
			logo_url: '/gold-sponsors/adventist-health.jpg',
		},
		// {
		// 	sponsor_name: 'Clean Concepts',
		// 	logo_url: '/gold-sponsors/clean-concepts.jpg',
		// },
		{
			sponsor_name: 'MoorPark Karate Krav Maga',
			logo_url: '/gold-sponsors/karate-krav-maga.jpg',
		},
		{
			sponsor_name: 'IvyTech Charter School',
			logo_url: '/gold-sponsors/ivytech.jpg',
		},
		{
			sponsor_name: 'Blue Sky Balloonz',
			logo_url: '/gold-sponsors/blue-sky-balloonz.png',
		},
		{
			sponsor_name: 'Enegren Brewing Co.',
			logo_url: '/gold-sponsors/enegren.png',
		},
		{
			sponsor_name: 'Perez Family Funeral Home',
			logo_url: '/gold-sponsors/perez-family-funeral-home.png',
		},
	]
	// const silverSponsors = [
	// 	{
	// 		sponsor_name: 'Diane Galvin',
	// 		website: ''
	// 	},
	// 	{
	// 		sponsor_name: 'Ruben Castro Charities',
	// 		website: ''
	// 	},
	// ]

	return (
		<section id="sponsors-section" className="flex flex-col gap-[2rem]">
			{/* Diamond Sponsors */}
			{diamondSponsors.length > 0 && (
				<div className="sponsor-tier-card" id="diamond-tier-card">
					<h2>Diamond Sponsors</h2>
					<div className="flex gap-[1rem] overflow-x-auto">
						{diamondSponsors.map((s, idx) => (
							<img
								key={idx}
								src={s.logo_url || '/placeholder.png'}
								alt={s.sponsor_name}
								className="sponsor-card"
							/>
						))}
					</div>
				</div>
			)}

			{/* Gold Sponsors */}
			{goldSponsors.length > 0 && (
				<div className="sponsor-tier-card" id="gold-tier-card">
					<h2>Gold Sponsors</h2>
					<div className="flex gap-[1rem] overflow-x-auto">
						{goldSponsors.map((s, idx) => (
							<img
								key={idx}
								src={s.logo_url || '/placeholder.png'}
								alt={s.sponsor_name}
								className="sponsor-card"
							/>
						))}
					</div>
				</div>
			)}

			{/* Silver & Bronze just listed */}
			{/* {silverSponsors.length > 0 && (
				<div className='sponsor-tier-card'>
					<h2>Silver Sponsors</h2>
					<ul className="list-disc list-inside">
						{silverSponsors.map((s) => (
							<li className='text-[1.25rem]'>
								{s.website ? (
									<a href={s.website} target="_blank" rel="noreferrer" className="text-blue-600 underline">
										{s.sponsor_name}
									</a>
								) : (
									s.sponsor_name
								)}
							</li>
						))}
					</ul>
				</div>
			)} */}
		</section>
	)
}