import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'

type Sponsor = {
	id: string
	sponsor_name: string
	logo_url: string | null
	level: 'Bronze' | 'Silver' | 'Gold' | 'Platinum'
	website: string | null
}

export default function Sponsors() {
	const [gold, setGold] = useState<Sponsor[]>([])
	const [platinum, setPlatinum] = useState<Sponsor[]>([])
	const [others, setOthers] = useState<Sponsor[]>([])

	useEffect(() => {
		async function loadSponsors() {
			const { data, error } = await supabase
				.from('sponsors')
				.select('*')
				.order('level', { ascending: false })

			if (error) {
				console.error(error)
				return
			}

			setPlatinum(data.filter((s) => s.level === 'Platinum'))
			setGold(data.filter((s) => s.level === 'Gold'))
			setOthers(data.filter((s) => s.level === 'Silver' || s.level === 'Bronze'))
		}
		loadSponsors()
	}, [])

	return (
		<div className="text-[white]">
			{/* Platinum Sponsors */}
			{platinum.length > 0 && (
				<section>
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
				</section>
			)}

			{/* Gold Sponsors */}
			{gold.length > 0 && (
				<section>
					<h2 className="">Gold Sponsors</h2>
					<div className="flex gap-[1rem] overflow-x-auto">
						{gold.map((s) => (
							<img
								src={s.logo_url || '/placeholder.png'}
								alt={s.sponsor_name}
								className="h-[6rem] border-2 border-[var(--gold)] object-contain"
							/>
						))}
					</div>
				</section>
			)}

			{/* Silver & Bronze just listed */}
			{others.length > 0 && (
				<div className='flex flex-col items-center mb-[5rem]'>
					<h2>Other Sponsors</h2>
					<ul className="list-disc list-inside">
						{others.map((s) => (
							<li key={s.id} className='text-[var(--white)] text-[1.25rem]'>
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
		</div>
	)
}