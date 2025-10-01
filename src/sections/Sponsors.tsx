// import { useEffect, useState } from 'react'
// import { supabase } from '../supabaseClient'

// type Sponsor = {
// 	id: string
// 	sponsor_name: string
// 	logo_url: string | null
// 	level: 'Bronze' | 'Silver' | 'Gold' | 'Platinum'
// 	website: string | null
// }

export default function Sponsors() {
	// const [gold, setGold] = useState<Sponsor[]>([])
	// const [platinum, setPlatinum] = useState<Sponsor[]>([])
	// const [others, setOthers] = useState<Sponsor[]>([])

	// useEffect(() => {
	// 	async function loadSponsors() {
	// 		const { data, error } = await supabase
	// 			.from('sponsors')
	// 			.select('*')
	// 			.order('level', { ascending: false })

	// 		if (error) {
	// 			console.error(error)
	// 			return
	// 		}

	// 		setPlatinum(data.filter((s) => s.level === 'Platinum'))
	// 		setGold(data.filter((s) => s.level === 'Gold'))
	// 		setOthers(data.filter((s) => s.level === 'Silver' || s.level === 'Bronze'))
	// 	}
	// 	loadSponsors()
	// }, [])
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
		{
			sponsor_name: 'Clean Concepts',
			logo_url: '/gold-sponsors/clean-concepts.jpg',
		},
		{
			sponsor_name: 'MoorPark Karate Krav Maga',
			logo_url: '/gold-sponsors/karate-krav-maga.jpg',
		},
		{
			sponsor_name: 'IvyTech Charter School',
			logo_url: '/gold-sponsors/ivytech.jpg',
		},
	]
	const silverSponsors = [
		{
			sponsor_name: 'Diane Galvin',
			website: ''
		},
		{
			sponsor_name: 'Ruben Castro Charities',
			website: ''
		},
	]

	return (
		<section className="text-[white] flex flex-col gap-[2rem]">
			{/* Diamond Sponsors */}
			{diamondSponsors.length > 0 && (
				<div>
					<h2 className="text-[var(--gold)]">Diamond Sponsors</h2>
					<div className="flex gap-[1rem] overflow-x-auto">
						{diamondSponsors.map((s, idx) => (
							<img
								key={idx}
								src={s.logo_url || '/placeholder.png'}
								alt={s.sponsor_name}
								className="h-[6.5rem] border-2 border-[var(--gold)] object-contain"
							/>
						))}
					</div>
				</div>
			)}

			{/* Gold Sponsors */}
			{goldSponsors.length > 0 && (
				<div>
					<h2 className="text-[var(--gold)]">Gold Sponsors</h2>
					<div className="flex gap-[1rem] overflow-x-auto">
						{goldSponsors.map((s, idx) => (
							<img
								key={idx}
								src={s.logo_url || '/placeholder.png'}
								alt={s.sponsor_name}
								className="h-[6.5rem] border-2 border-[var(--gold)] object-contain"
							/>
						))}
					</div>
				</div>
			)}

			{/* Silver & Bronze just listed */}
			{silverSponsors.length > 0 && (
				<div className='flex flex-col items-center'>
					<h2>Silver Sponsors</h2>
					<ul className="list-disc list-inside">
						{silverSponsors.map((s) => (
							<li className='text-[var(--white)] text-[1.25rem]'>
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
			)}
		</section>
	)
}