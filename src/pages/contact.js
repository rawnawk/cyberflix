import React from 'react'

import Layout from "../c/Layout"





export default function Contact() {
	return (
		<Layout>
			<article className="space-y-6 max-w-2xl container mx-auto my-36">
				<h1 className="mb-12">Contact Us</h1>

				<p>Please fill this form for contacting us, expect a reply in 4-5 business days.</p>

				<form className="flex flex-col gap-4">
					<div className="flex items-start gap-2">
						<label htmlFor="email">Email</label>
						<input className="focus:outline-none border-gray-300 border rounded w-full" id="email" type="email" />
					</div>
					<div className="flex items-start gap-2">
						<label htmlFor="subject">Subject</label>
						<input className="focus:outline-none border-gray-300 border rounded w-full" id="subject" type="text" />
					</div>
					<div className="flex items-start gap-2">
						<label htmlFor="body">Body</label>
						<textarea className="focus:outline-none border-gray-300 border rounded w-full" id="body"></textarea>
					</div>
					
					<div className="flex justify-end">
						<button className="px-4 py-1.5 bg-green-500 font-semibold text-white w-64 rounded-xl">Submit</button>
					</div>
				</form>


            






			</article>
		</Layout>
	)
}
