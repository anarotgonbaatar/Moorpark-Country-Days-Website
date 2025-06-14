import { useState } from "react"

export default function Sponsorship() {

	const [formData, setFormData] = useState({
		companyName: '',
        contactFirstName: '',
        contactLastName: '',
        phone: '',
        email: '',
        streetAddress: '',
        city: '',
        state: '',
        zip: '',
        socialMedia: '',
        website: '',
        sponsorshipLevel: '',
        invoiceTo: '',
        paymentMethod: ''
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

	const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
			const formBody = new URLSearchParams(formData).toString()

            const response = await fetch('https://script.google.com/macros/s/AKfycbxD02jRFf-Qg3-oZ8IOoKqD3bRrJIRTD6hcDfuiAn6QE66z2Q5GQelvcXaJZVELxI5JWg/exec', {
                method: 'POST',
                body: formBody,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            })

            const result = await response.json()
            if (result.result === 'success') {
                alert('Application submitted successfully!')
                setFormData({
                    companyName: '',
                    contactFirstName: '',
                    contactLastName: '',
                    phone: '',
                    email: '',
                    streetAddress: '',
                    city: '',
                    state: '',
                    zip: '',
                    socialMedia: '',
                    website: '',
                    sponsorshipLevel: '',
                    invoiceTo: '',
                    paymentMethod: ''
                })
            } else {
                alert('Error submitting application.')
            }
        } catch (error) {
            console.error('Error:', error)
            alert('Error submitting application.')
        }
    }

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

				<form className="app-form" onSubmit={handleSubmit}>
					{/* Company Name */}
					<label>Company Name (as you want listed on materials) *</label>
					<input type="text" required title="Company Name" name="companyName" value={formData.companyName} onChange={handleChange}/>

					{/* Contact First Name */}
					<label>Contact Person's First Name *</label>
					<input type="text" required title="First Name" name="contactFirstName" value={formData.contactFirstName} onChange={handleChange}/>

					{/* Contact Last Name */}
					<label>Contact Person's Last Name *</label>
					<input type="text" required title="Last Name" name="contactLastName" value={formData.contactLastName} onChange={handleChange}/>

					{/* Phone */}
					<label>Phone Number</label>
					<input type="tel" title="Phone Number" name="phone" value={formData.phone} onChange={handleChange}/>

					{/* Email */}
					<label>Email Address *</label>
					<input type="email" required title="Email" name="email" value={formData.email} onChange={handleChange}/>

					{/* Street Address */}
					<label>Street Address *</label>
					<input type="text" required title="Street Address" name="streetAddress" value={formData.streetAddress} onChange={handleChange}/>

					{/* City */}
					<label>City *</label>
					<input type="text" required title="City" name="city" value={formData.city} onChange={handleChange}/>

					{/* State */}
					<label>State *</label>
					<input type="text" required title="State" name="state" value={formData.state} onChange={handleChange}/>

					{/* Zip */}
					<label>Zip Code</label>
					<input type="text" title="Zip" name="zip" value={formData.zip} onChange={handleChange}/>

					{/* Social Media */}
					<label>Social Media Handles *</label>
					<input type="text" placeholder="Instagram, Facebook, TikTok, etc. N/A if not applicable" required name="socialMedia" value={formData.socialMedia} onChange={handleChange}/>

					{/* Website */}
					<label>Website URL *</label>
					<input type="url" placeholder="N/A if not applicable" required name="website" value={formData.website} onChange={handleChange}/>

					{/* Sponsorship Level */}
					<label>Sponsorship Level Selection *</label>
					<select required className="text-[white] bg-[var(--green)]" title="Sponsorship Level" name="sponsorshipLevel" value={formData.sponsorshipLevel} onChange={handleChange}>
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
					<label>I would like my invoice to be sent to... *</label>
					<div className="flex flex-col items-start gap-[0.5rem]">
						<label className="flex items-center">
							<input
								type="radio"
								name="invoiceTo"
								value="phone"
								checked={formData.invoiceTo === 'phone'}
								onChange={handleChange}
								required
								className="radio"
							/>
							My phone number provided above
						</label>
						<label className="flex items-center">
							<input
								type="radio"
								name="invoiceTo"
								value="email"
								checked={formData.invoiceTo === 'email'}
								onChange={handleChange}
								required
								className="radio"
							/>
							My email provided above
						</label>
					</div>

					{/* Payment Method */}
					<label>I plan to make my sponsorship payment by... *</label>
					<div className="flex flex-col items-start gap-[0.5rem]">
						<label className="flex items-center">
							<input
								type="radio"
								name="paymentMethod"
								value="credit"
								checked={formData.paymentMethod === 'credit'}
								onChange={handleChange}
								required
								className="radio"
							/>
							Credit/Debit
						</label>
						<label className="flex items-center">
							<input
								type="radio"
								name="paymentMethod"
								value="check"
								checked={formData.paymentMethod === 'check'}
								onChange={handleChange}
								required
								className="radio"
							/>
							Check
						</label>
						<label className="flex items-center">
							<input
								type="radio"
								name="paymentMethod"
								value="venmo"
								checked={formData.paymentMethod === 'venmo'}
								onChange={handleChange}
								required
								className="radio"
							/>
							Venmo
						</label>
						<label className="flex items-center">
							<input
								type="radio"
								name="paymentMethod"
								value="paypal"
								checked={formData.paymentMethod === 'paypal'}
								onChange={handleChange}
								required
								className="radio"
							/>
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
