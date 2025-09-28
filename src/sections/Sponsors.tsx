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

	const goldSponsors = [
		{
			sponsor_name: 'Adventist Health',
			logo_url: 'public/gold-sponsors/adventist-health.jpg',
		},
		{
			sponsor_name: 'Clean Concepts',
			logo_url: 'public/gold-sponsors/clean-concepts.jpg',
		},
		{
			sponsor_name: 'MoorPark Karate Krav Maga',
			logo_url: 'public/gold-sponsors/karate-krav-maga.jpg',
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
			{/* Platinum Sponsors
			{platinum.length > 0 && (
				<div>
					<h2 className="">Platinum Sponsors</h2>
					<div className="flex gap-[1rem]">
						{platinum.map((s) => (
							<a key={s.id} href={s.website || '#'} target="_blank" rel="noreferrer">
								<img
									src={s.logo_url || '/placeholder.png'}
									alt={s.sponsor_name}
									className="h-24 object-contain"
								/>
							</a>
						))}
					</div>
				</div>
			)} */}

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