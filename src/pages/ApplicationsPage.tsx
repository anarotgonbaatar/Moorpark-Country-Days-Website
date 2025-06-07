import React, {useState} from "react"
import ParadeContent from '../sections/applications/Parade'
import SponsorshipContent from '../sections/applications/Sponsorship'
import VendorContent from '../sections/applications/Vendor'
import VolunteerContent from '../sections/applications/Volunteer'
import { FaAngleLeft } from "react-icons/fa"
import '../styles/applications.css'

const appTypes = ['Sponsorship', 'Volunteer', 'Parade', 'Vendor']

export default function ApplicationsPage() {
	const [activeTab, setActiveTab] = useState<string>('Sponsorship')
	const [descExpanded, setDescExpanded] = useState<boolean>(true)

	const displayActiveContent = () => {
		switch (activeTab) {
			case 'Sponsorship':
				return <SponsorshipContent/>
			case 'Volunteer':
				return <VolunteerContent/>
			case 'Parade':
				return <ParadeContent/>
			case 'Vendor':
				return <VendorContent/>
		}
	}
	
	return (
		<main
			className="
				flex flex-col min-h-[100vh] items-center
				p-[1rem]
				bg-[var(--green-dark)] text-[white]
			"
		>
			
			{/* Back to Home */}
			<a href="/" className="btn border-1 border-[white]! mr-auto py-[0.5rem]! px-[1rem]! gap-[0.5rem]">
				<FaAngleLeft/>Back to Home
			</a>

			{/* Tabs */}
			<div className="flex gap-[0.5rem] mt-[1rem]">
				{appTypes.map(type => (
					<button
						key={type}
						onClick={() => setActiveTab(type)}
						className={`px-[0.75rem] py-[0.5rem] pb-[1rem] mb-[-0.5rem] rounded-t-[0.5rem] border-2 border-b-0 border-[white] ${
							activeTab === type
								? 'bg-[var(--gold)] text-[var(--green-dark)]'
								: 'bg-[var(--green)] text-[white]'
						}`}
					>
						{type}
					</button>
				))}
			</div>
			
			{/* Application Content */}
			{ displayActiveContent() }

		</main>
	)
}