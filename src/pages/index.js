import React from 'react'
import Layout from '../c/Layout'
import Seo from '../c/seo'

export default function Index() {
	return (
		<Layout>
			<Seo title="" />
			<article className="bg-green-400 py-12">
				<div className="container mx-auto">
					<h2>Cyberflix TV</h2>
                    <button className="btn-alpha">Download Now</button>
				</div>
			</article>
			<article className="py-12 container mx-auto">
				<h2>Cyberflix Features</h2>
				<p>Android App store. Below shown some of the features bundled with this app. You will experience more features when you use this app. Every day new games and apps get added to store and you will have access to those latest apps and games for free. Download this app store and stop relying on web for downloading mods and other apps. Because downloading all your Android apps using a app store is much more safer than downloading them using web. Because there is a high chance of downloading scam software. Best acmarket play store alternative.</p>
			</article>
		</Layout>
	)
}
