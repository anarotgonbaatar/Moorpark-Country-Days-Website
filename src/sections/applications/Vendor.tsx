export default function Vendor() {
	return (
		<div className="app-content">
			<div className="app-desc">
				<h2 className="app-title">
					Country Days 2025 Vendor
				</h2>

				<p>
					Moorpark Country Days will return to Historic High Street under the direction of the Rudy Perez Jr. Memorial Foundation co-sponsored by the City of Moorpark on October 4th, 2025 with the theme of Celebrating Moorpark's Hometown Pioneers!
				</p>

				<p>Interested in participating in the parade? Complete the application below!</p>
			
				<h3 className="app-header">
					IMPORTANT: THE LAST DAY TO REGISTER FOR THE PARADE IS 9/21/2025.
				</h3>

				<h3 className="app-header">
					Parade Contingent Information
				</h3>
				<h4 className="app-sponsor-header">
					Please take the time to read ALL of the requirements listed below:
				</h4>

				<ul>
					<li>
						<strong className="text-[white]">Check-In</strong>: All units must check in at the parade staging area on the day of the parade. Check-in is required so that the parade committee may verify that all required information has been submitted and/or collected, provide you with any necessary last minute instructions or changes, line-up instructions, and give you your parade order assignment. Check in begins at 8 am, an you must be checked in by 9 am.
					</li>
					<li>
						<strong className="text-[white]">Change to Route</strong>: Route will begin at Walnut Canyon Elementary School, follow down Casey Road, and continue through High Street!
					</li>
					<li>
						<strong className="text-[white]">Staging Area</strong>: Parade staging will be at Walnut Canyon
					</li>
					<li>
						<strong className="text-[white]">Line Up</strong>: One of the things that Moorpark in particular enjoys is a very large and loyal crowd of watchers. You must remain in the same order as in the script or you will be announced under the wrong name and eliminated from judging.
					</li>
					<li>
						<strong className="text-[white]">All Participants must be in the staging area at their assigned location no later than 9:00 am.</strong>
					</li>
					<li>
						<strong className="text-[white]">Line up information including placement and staging will be provided no later than Sept 27th.</strong>
					</li>
				</ul>

				<h4 className="app-sponsor-header">
					Thing to keep in mind:
				</h4>
				<ul>
					<li>
						<strong className="text-[white]">Closing up a Gap</strong>: You only need to slightly increase your step, still at a safe pace, in order to minimize a gap forming in front of you, or slow slightly to prevent a gap from forming behind you. No one – not a gap monitor; police officer, nor safety, medical, or parade personnel should ever encourage you to run and catch up.
					</li>
					<li>
						<strong className="text-[white]">Stopping and Performing</strong>: In order for you to be able to stop along the parade route to perform, you need two things:
					</li>
					<li className="ml-[1.75rem]">
						Approval in writing from the Parade Manager and;
					</li>
					<li className="ml-[1.75rem]">
						Development of a routine with a 30 second Maximum. This is also the routine you can use when you are allowed to stop and perform at the Grandstands, for the judges. Longer stops and routines are discouraged, since they create lengthy gaps and add to the duration of the parade.
					</li>
					<li className="ml-[1.75rem]">
						<strong className="text-[white]">Never stop to perform for TV or other cameras!</strong>
					</li>

					<li>
						<strong className="text-[white]">Throwing or Handing Out Items to Spectators is Not Allowed</strong>: It is unsafe, unsanitary and a violation of Moorpark Country Days rules to distribute any items (food or non-food) during the parade. Violations of this rule may result in the immediate withdrawal of a unit from the parade and a one-year suspension from the parade.
					</li>
					<li>
						The Moorpark Country Days Committee reserves the right to revoke participation of any group or individual that offends community standards for conduct at a family-oriented event, or that could endanger participants or spectators.
					</li>
					<li>
						<strong className="text-[white]">REQUIRED INSURANCE VERIFICATION</strong>: Insurance verification is required for all vehicles/drivers entered and for anyone with animals. If you are just walking in the parade you are not required to verify your insurance, although it is highly recommended as the event does not have any coverage for you. 
					</li>
				</ul>
				<p>
					An email reminder will be sent out to all participants prior to the event.
				</p>
			</div>

			<div className='app-form-content'>
				
				<h2 className="app-form-title">Parade Form</h2>

				<form className="app-form">
					{/* Company Name */}
					<label>Organization/Business Name *</label>
					<input type="text" required title="Organization Name"/>

					{/* Contact First Name */}
					<label>Contact Person's First Name *</label>
					<input type="text" required title="First Name"/>

					{/* Contact Last Name */}
					<label>Contact Person's Last Name *</label>
					<input type="text" required title="Last Name"/>

					{/* Contact Position/Title */}
					<label>Contact Person's Title/Position</label>
					<input type="text" title="Position"/>

					{/* Phone */}
					<label>Contact Person's Phone Number</label>
					<input type="tel" title="Phone Number"/>

					{/* Email */}
					<label>Contact Person's Email *</label>
					<input type="email" required title="Email"/>

					{/* Street Address */}
					<label>Street Address *</label>
					<input type="text" required title="Street Address"/>

					{/* City */}
					<label>City *</label>
					<input type="text" required title="City"/>

					{/* State */}
					<label>State *</label>
					<input type="text" required title="State"/>

					{/* Zip */}
					<label>Zip Code</label>
					<input type="text" title="Zip"/>

					{/* Category */}
					<label>Sponsorship Level Selection *</label>
					<select required className="text-[white] bg-[var(--green)]" title="Sponsorship Level">
						<option value="">-- Select One --</option>
						<option>Commercial</option>
						<option>Equestrian</option>
						<option>Youth Group</option>
						<option>Non-Profit</option>
						<option>March, Dance, Drill, etc.</option>
						<option>Automobile</option>
					</select>

					{/* Announce */}
					<label>What do you want the announcer to say about your organization? Please include pronunciations of names. For example: David Baranowski (David Ba-ra-nof-ski). Note: These may be edited down due to time constraints. *</label>
					<textarea placeholder="Your answer" required />

					{/* Amplified Music */}
					<label>Will you have Amplified Music? *</label>
					<div className="flex flex-col items-start gap-[0.5rem]">
						<label className="flex justify-start">
							<input type="radio" name="paymentMethod" value="credit" required className="radio" />
							Yes
						</label>
						<label className="flex items-center">
							<input type="radio" name="paymentMethod" value="check" required className="radio" />
							No
						</label>
					</div>

					{/* Trailer/Float */}
					<label>If you have a trailer or float, please include the dimensions. If not, please enter "n/a" *</label>
					<input type="text" placeholder="n/a" required />

					{/* Participants */}
					<label>Hope many participants are included in your entry? *</label>
					<input type="text" placeholder="" required title="Number of Participants"/>

					{/* Details */}
					<label>Entry Details (select all that apply) *</label>
					<div className="flex flex-col items-start gap-[0.5rem]">
						<label className="flex items-center">
							<input type="checkbox" name="invoiceTo" value="phone" required className="checkbox" />
							Will you be utilizing motorized transportation?
						</label>
						<label className="flex items-center">
							<input type="checkbox" name="invoiceTo" value="email" required className="checkbox" />
							Will you have any animals with you in the parade?
						</label>
					</div>

					{/* Entry Fee */}
					<label>Entry Fee *</label>
					<div className="flex flex-col items-start gap-[0.5rem]">
						<label className="flex justify-start">
							<input type="radio" name="paymentMethod" value="credit" required className="radio" />
							Regular Entry: $65
						</label>
						<label className="flex items-center">
							<input type="radio" name="paymentMethod" value="check" required className="radio" />
							501(c)3 Non-Profit or public school: $45
						</label>
						<label className="flex items-center">
							<input type="radio" name="paymentMethod" value="venmo" required className="radio" />
							I am a Sliver, Gold, Platinum, or Diamond Sponsor (fee included in package)
						</label>
					</div>

					{/* Invoice Sent To */}
					<label className="">If application is approved, I would like my invoice sent to my *</label>
					<div className="flex flex-col items-start gap-[0.5rem]">
						<label className="flex items-center">
							<input type="radio" name="invoiceTo" value="phone" required className="radio" />
							My phone number provided above
						</label>
						<label className="flex items-center">
							<input type="radio" name="invoiceTo" value="email" required className="radio" />
							My email provided above
						</label>
					</div>

					{/* Due Date */}
					<label>If approved, I will pay my invoice by its due date *</label>
					<div className="flex flex-col items-start gap-[0.5rem]">
						<label className="flex items-center">
							<input type="checkbox" name="due-date" value="yes" required className="checkbox" />
							Yes
						</label>
					</div>

					{/* Due Date */}
					<label>If my entry requires insurance verification, (vehicles/drivers and anyone with animals, etc), I will email a copy to moorparkcountrydays@gmail.com by Sept 21st *</label>
					<div className="flex flex-col items-start gap-[0.5rem]">
						<label className="flex items-center">
							<input type="checkbox" name="due-date" value="yes" required className="checkbox" />
							Yes
						</label>
					</div>

					{/* Hold Harmless */}
					<h3 className="app-header">Hold Harmless</h3>
					<p>
						I, the undersigned, and on behalf of all members, employees, volunteers, and all other persons associated with the above referenced business or organization, am voluntarily participating in Moorpark Country Days 2025. I understand that such participation does not establish or imply an employer-employee or an agency relationship with the Rudy Perez Jr Memorial Foundation, A nonprofit organization Event organizers and volunteers and the City of Moorpark. As a participant in this activity I hereby AGREE TO DEFEND, INDEMNIFY, HOLD HARMLESS, RELEASE AND FOREVER DISCHARGE Rudy Perez Jr Memorial Foundation and the City of Moorpark, its officials, employees, and agents, from any and all acts of negligence and all claims and demands whatsoever, which the undersigned, any third person, or any persons acting under their behalf, have or may have against Rudy Perez Jr Memorial Foundation or the City of Moorpark, by reason of any accident, illness, injury to or death of any person or persons, or damage to or loss or destruction of any property arising or resulting directly or indirectly from participation in Moorpark Country Days and occurring during said participation, or any time subsequent thereto. The terms of this release will serve as a release and assumption of risk for my heirs, executors and administrators and for all of my family members. I, the undersigned, realize that all fees are non-refundable. I understand that this is an outdoor activity and that the Rudy Perez Jr Memorial Foundation and the City of Moorpark will not accept any responsibility for goods damaged due to inclement weather. The Rudy Perez Jr Memorial Foundation and the City of Moorpark do not provide insurance coverage of any kind for any event participant. The Rudy Perez Jr Memorial Foundation and the City of Moorpark strongly recommend that appropriate insurance be obtained by each participant. I, the undersigned, in consideration of the request and permission to participate in Moorpark Country Days, hereby assume full responsibility for all risk of injury or loss that may result from my participation. I, the undersigned, grant to the Rudy Perez Jr Memorial Foundation and City of Moorpark at their discretion and free of charge, permission to use still photography of myself or my organization members and/or employees participating in Country Days for the purpose of publicizing said event. I understand that the Rudy Perez Jr Memorial Foundation and the City of Moorpark reserve the right to approve or reject any application. I further agree to abide by all terms and conditions as outlined above and in the vendor information packet.
					</p>
					<label className="flex items-center">
						<input type="checkbox" name="due-date" value="yes" required className="checkbox" />
						I agree
					</label>
					<label className="flex items-center">
						<input type="checkbox" name="due-date" value="yes" required className="checkbox" />
						I disagree
					</label>

					{/* Submit */}
					<button type="submit" className="btn cta-btn mx-auto mt-[1rem]">
						Submit Sponsorship Application
					</button>

				</form>
				
			</div>
		</div>
	)
}