export default function Parade() {
	return (
		<div className="app-content">
			<div className="app-desc">
				<h2 className="app-title">
					Country Days 2025 Committee Interest Form
				</h2>
				
				<h3 className="app-header">
					Help Us Bring Moorpark Country Days Street Fair Back to Historic High Street!
				</h3>

				<p className="mb-[1rem]">
					The Rudy Perez Jr. Memorial Foundation is excited to bring Moorpark Country Days Street Fair back to Historic High Street in 2025!
				</p>

				<p className="mb-[1rem]">
					But we can’t do it without you. Community events like this thrive on the support and dedication of people like you. Whether you’d like to volunteer on the day of the event or serve on the Country Days Street Fair Committee leading up to the event, your involvement will be key to bringing back this beloved tradition.
				</p>

				<p className="mb-[1rem]">
					Together, we can revive this unforgettable small-town celebration. With your passion and support, we’ll create an event that future generations will cherish.
				</p>

				<p>
					Please fill out this form to show your interest and help us make Moorpark Country Days 2025 a success!
				</p>
			</div>

			<div className="app-form-content">
				<h2 className="app-form-title">Volunteer Form</h2>

				<form className="app-form">
					{/* First Name */}
					<label className="">First Name *</label>
					<input type="text" required className="" title="First Name"/>

					{/* Last Name */}
					<label className="">Last Name *</label>
					<input type="text" required className="" title="Last Name"/>

					{/* Phone */}
					<label className="">Phone Number *</label>
					<input type="tel" className="" title="Phone Number"/>

					{/* Email */}
					<label className="">Email Address *</label>
					<input type="email" required className="" title="Email"/>

					{/* Involvement*/}
					<label className="">Involvement (select all that apply) *</label>
					<div className="flex flex-col items-start gap-[0.5rem]">
						<label className="flex items-center">
							<input type="checkbox" name="invoiceTo" value="phone" required className="checkbox" />
							My phone number provided above
						</label>
						<label className="flex items-center">
							<input type="checkbox" name="invoiceTo" value="email" required className="checkbox" />
							My email provided above
						</label>
					</div>

					{/* Facebook Page Join Request */}
					<label className="">Request to Join Facebook Page *</label>
					<div className="flex flex-col items-start gap-[0.5rem]">
						<a href="https://www.facebook.com/groups/1555172731738671/">
							Facebook Page
						</a>
						<label className="flex items-center">
							<input type="checkbox" name="paymentMethod" value="paypal" required className="checkbox" />
							Completed
						</label>
					</div>

					{/* Submit */}
					<button type="submit" className="btn cta-btn mx-auto mt-[1rem]">
						Submit Sponsorship Application
					</button>
				</form>
			</div>
		</div>
	)
}