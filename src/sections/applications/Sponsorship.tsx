import { useState } from "react"

export default function Sponsorship() {
    return (
        <div className='app-content'>
			
			<div className='app-desc'>

				<h2 className='app-title'>2025 Moorpark Country Days - Sponsorship Packages</h2>
				
				<h3 className='app-header'>
					Join Us as a Sponsor for Moorpark Country Days Parade & Street Fair 2025!
				</h3>
				<p>
					The Moorpark Country Days Parade & Street Fair is a beloved community tradition,
					bringing together thousands of local families and visitors for a day of
					fun, festivities, and community spirit.
					This annual event is a unique opportunity for your business to gain exposure
					while supporting a meaningful community celebration.
				</p>

				<h3 className='app-header'>
					Why Sponsor Moorpark Country Days Parade & Street Fair 2025?
				</h3>
				<p>
					Sponsorship benefits extend beyond just branding.
					It's about connecting with your local community, increasing visibility for your business,
					and contributing to the success of an event that's been cherished for years.
					With your support, we can continue making this celebration special for everyone!
				</p>

				{/* Sponsorship Levels */}
				<h3 className='app-header'>Sponsorship Levels:</h3>

				<h4 className="app-sponsor-header">
					Moorpark Sponsor ($10-$200)
				</h4>
				<ul>
					<li>Thank you for contributing to keeping this beloved tradition alive!</li>
				</ul>

				<h4 className="app-sponsor-header">
					Bronze Sponsorship Level ($250)
				</h4>
				<ul>
					<li>Your Company Name (no logo) listed on the Country Days website as a Bronze Sponsor</li>
					<li>Name (no logo) on Community Poster at Event</li>
					<li>Social Media Shoutout</li>
					<li>Name listed in event program as a Bronze sponsor</li>
				</ul>

				<h4 className="app-sponsor-header">
					Silver Sponsorship Level ($500)
				</h4>
				<ul>
					<li>Name (no logo) on Community Poster at Event</li>
					<li>Social Media Shoutout</li>
					<li>Name listed in event program as a Silver Sponsor</li>
					<li>Your company name listed as a Silver sponsor and logo on Country Days website</li>
					<li>Mentions at the stage podium</li>
					<li>One entry in the Country Days parade</li>
				</ul>

				<h4 className="app-sponsor-header">
					Gold Sponsorship Level ($1,000)
				</h4>
				<ul>
					<li>Your Company name and logo on a 36” x 24” Community Banner displayed at event </li>
					<li>VIP seating for 4 guests at the parade to include padded chairs, chilled water, and unobstructed viewing near the Chamber office</li>
					<li>One booth at Country Days Street Fair</li>
					<li>Company name & logo on pre-event marketing emails and flyers</li>
					<li>Name (no logo) on Community Poster at Event</li>
					<li>Social Media Shoutout</li>
					<li>Name listed in event program as a Gold Sponsor</li>
					<li>Your company name listed as a Gold sponsor and logo on Country Days website</li>
					<li>Mentions at the stage podium</li>
					<li>One entry in the Country Days parade</li>
					<li>Logo on event T-shirt</li>
				</ul>

				<h4 className="app-sponsor-header">
					Platinum Sponsorship Level ($2,500)
				</h4>
				<ul>
					<li>A website link to your site with your Company name and logo on Country Days website</li>
					<li>A personal introduction at the Opening Ceremonies of Country Days Event</li>
					<li>One entry in the Country Days parade</li>
					<li>Name and Logo on individual sponsor banner</li>
					<li>Your Company name and logo on a 36” x 24” Community Banner displayed at event </li>
					<li>VIP seating for 4 guests at the parade to include padded chairs, chilled water, and unobstructed viewing near the Chamber office</li>
					<li>One booth at Country Days Street Fair</li>
					<li>Company name & logo on pre-event marketing emails and flyers</li>
					<li>Name (no logo) on Community Poster at Event</li>
					<li>Social Media Shoutout</li>
					<li>Name listed in event program as a Platinum Sponsor</li>
					<li>Your company name listed as a Platinum Sponsor and logo on Country Days website</li>
					<li>Mentions at the stage podium</li>
					<li>Logo on event T-shirt</li>
				</ul>

				<h4 className="app-sponsor-header">
					Diamond Sponsorship Level ($5,000)
				</h4>
				<ul>
					<li>Company sponsor of a specific zone: Kids Zone, Entertainment Zone, Car Show Zone, etc Available: Brand recognition around specified zone</li>
					<li>VIP seating for 6 guests at the parade to include padded chairs, chilled water, and unobstructed viewing near the Chamber office</li>
					<li>A website link to your site with your Company name and logo on Country Days website</li>
					<li>A personal introduction at the Opening Ceremonies of Country Days Event</li>
					<li>One entry in the Country Days parade</li>
					<li>Name and Logo on individual sponsor banner</li>
					<li>Your Company name and logo on a 36” x 24” Community Banner displayed at event </li>
					<li>One booth at Country Days Street Fair</li>
					<li>Company name & logo on pre-event marketing emails and flyers</li>
					<li>Name (no logo) on Community Poster at Event</li>
					<li>Social Media Shoutout</li>
					<li>Name listed in event program as a Diamond Sponsor</li>
					<li>Your company name listed as a Diamond Sponsor on Country Days website</li>
					<li>Mentions at the stage podium</li>
					<li>Logo on event T-shirt</li>
				</ul>
			</div>

			<div className='app-form-content'>
				
				<h2 className="app-form-title">Sponsorship Form</h2>

				<form className="app-form">
					{/* Company Name */}
					<label className="">Company Name (as you want listed on materials) *</label>
					<input type="text" required className="" title="Company Name"/>

					{/* Contact First Name */}
					<label className="">Contact Person's First Name *</label>
					<input type="text" required className="" title="First Name"/>

					{/* Contact Last Name */}
					<label className="">Contact Person's Last Name *</label>
					<input type="text" required className="" title="Last Name"/>

					{/* Phone */}
					<label className="">Phone Number</label>
					<input type="tel" className="" title="Phone Number"/>

					{/* Email */}
					<label className="">Email Address *</label>
					<input type="email" required className="" title="Email"/>

					{/* Street Address */}
					<label className="">Street Address *</label>
					<input type="text" required className="" title="Street Address"/>

					{/* City */}
					<label className="">City *</label>
					<input type="text" required className="" title="City"/>

					{/* State */}
					<label className="">State *</label>
					<input type="text" required className="" title="State"/>

					{/* Zip */}
					<label className="">Zip Code</label>
					<input type="text" className="" title="Zip"/>

					{/* Social Media */}
					<label className="">Social Media Handles *</label>
					<input type="text" placeholder="Instagram, Facebook, TikTok, etc. N/A if not applicable" required className="" />

					{/* Website */}

					<label className="">Website URL *</label>
					<input type="url" placeholder="N/A if not applicable" required className="" />

					{/* Sponsorship Level */}
					<label className="">Sponsorship Level Selection *</label>
					<select required className="text-[white] bg-[var(--green)]" title="Sponsorship Level">
						<option value="">-- Select One --</option>
						<option>Moorpark Sponsor ($10-$249)</option>
						<option>Bronze Sponsor ($250)</option>
						<option>Silver Sponsor ($500)</option>
						<option>Gold Sponsor ($1,000)</option>
						<option>Platinum Sponsor ($2,500)</option>
						<option>Diamond Sponsor ($5,000)</option>
						<option>Other</option>
					</select>

					{/* Invoice Sent To */}
					<label className="">I would like my invoice to be sent to... *</label>
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

					{/* Payment Method */}
					<label className="">I plan to make my sponsorship payment by... *</label>
					<div className="flex flex-col items-start gap-[0.5rem]">
						<label className="flex justify-start">
							<input type="radio" name="paymentMethod" value="credit" required className="radio" />
							Credit/Debit
						</label>
						<label className="flex items-center">
							<input type="radio" name="paymentMethod" value="check" required className="radio" />
							Check
						</label>
						<label className="flex items-center">
							<input type="radio" name="paymentMethod" value="venmo" required className="radio" />
							Venmo
						</label>
						<label className="flex items-center">
							<input type="radio" name="paymentMethod" value="paypal" required className="radio" />
							Paypal
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
