import { FaUser } from "react-icons/fa"

export default function Navbar() {
	return (
		<nav
			id="navbar"
			className="flex px-[0.5rem] py-[0.5rem] bg-[var(--green-dark)] gap-[0.5rem] max-w-[100%]
				items-center justify-center
			"
		>
			<a
				href=""
				className="
					no-underline text-[white] p-[0.5rem] rounded-[0.5rem]
					hover:bg-[var(--green)] hover:text-[white]
				"
			>
				Home
			</a>

			<a
				href=""
				className="
					no-underline text-[white] p-[0.5rem] rounded-[0.5rem]
					hover:bg-[var(--green)] hover:text-[white]
				"
			>
				Entertainment
			</a>

			<a
				href=""
				className="
					no-underline text-[white] p-[0.5rem] rounded-[0.5rem]
					hover:bg-[var(--green)] hover:text-[white]
				"
			>
				Foods
			</a>

			<a
				href=""
				className="
					no-underline text-[white] p-[0.5rem] rounded-[0.5rem]
					hover:bg-[var(--green)] hover:text-[white]
				"
			>
				Fun
			</a>

			<a
				href=""
				className="
					no-underline text-[white] p-[0.5rem] rounded-[0.5rem]
					hover:bg-[var(--green)] hover:text-[white]
				"
			>
				Vendors
			</a>
			
			<a
				href=""
				className="
					no-underline text-[white] p-[0.5rem] rounded-[0.5rem]
					hover:bg-[var(--green)] hover:text-[white]
				"
			>
				<FaUser/>
			</a>
		</nav>
	)
}