import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../c/Layout'
import Seo from '../c/seo'

export default function Index() {
	return (
		<Layout>
			<Seo title="Cyberflix TV Official for Android (v3.3.3)" />
			<article className="bg-green-600 py-12 text-white font-semibold">
				<div className="container mx-auto px-6">
					<div className="flex flex-col md:flex-row gap-6 items-center">
						<div className="flex flex-col">
							<h1 className="mb-8">Cyberflix TV Official for Android (v3.3.3)</h1>
							<p className="mb-8">Cyberflix TV is an Android app that streams online Tv shows and movies free of cost. This app has a massive collection of television shows and HD movies to select from for the convenience of users. With Cyberflix installed you can stream movies, anime, TV shows, and many more any time anywhere on the tip of your fingers and free of cost. The servers used by Cyberflix TV are high speed providing better quality streams. The developers boast about the app being secure and safe to use without any malware.</p>
							<button className="btn-alpha place-self-center">Download Now</button>
						</div>
						<StaticImage src="../assets/images/cyberflix-home.jpg" alt="Cyberflix TV" />
					</div>
				</div>
			</article>
			<article className="py-12 container mx-auto px-6">
				<h2 className="text-center mb-8">Cyberflix TV Features</h2>
				<p className="mb-4">TV Shows and Movies have always been an important entertainment source to every individual. Apart from cinema halls, now it is also easily possible to watch your favorite shows and movies on desktops and Android smartphones.</p>
				<p className="mb-12">Cyberflix TV has some unique and great features to provide an excellent user experience. Some of the major features of the application are mentioned below:</p>
				<div className="grid md:grid-cols-3 gap-8">
					<div className="flex flex-col items-center">
						<h3>Trending Video Content</h3>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
						</svg>
						<p className="text-base">The application is updated regularly to add more and more trending videos, shows, and movies to the application.</p>
					</div>
					<div className="flex flex-col items-center">
						<h3>Offline videos</h3>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
</svg>
						<p className="text-base">This is the best and unique feature of the application as it allows the users to access the videos even when there is no internet.</p>
					</div>
					<div className="flex flex-col items-center">
						<h3>User-Friendly Interface</h3>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
</svg>
						<p className="text-base">The application has a user-friendly UX and UI that makes the user experience highly convenient.</p>
					</div>
					<div className="flex flex-col items-center">
						<h3>Supports multiple Languages</h3>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
</svg>
						<p className="text-base">This special feature of cyberflix Tv is very useful and beneficial for many users.</p>
					</div>
					<div className="flex flex-col items-center">
						<h3>Categories &amp; Genre</h3>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
						<p className="text-base">The user can search the content to watch on the application as per their taste, preference, and mood to watch.</p>
					</div>
					<div className="flex flex-col items-center">
						<h3>Request</h3>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
						<p className="text-base">The developers update the app library with the same if found appropriate and this way the users do not miss anything.</p>
					</div>
				</div>
			</article>
			<article className="bg-green-600 py-12 text-white font-semibold">
				<div className="py-12 container mx-auto px-6">
					<h2 className="text-center mb-8">How to install Cyberflix TV?</h2>
					<p className="mb-4">Cyberflix Tv supports the 4.4 KitKat version of Android and all the versions above it. The downloading and installation of the app are very simple, easy, and convenient. People who do not possess technical knowledge can also download and install the cyberflix Tv conveniently. The step by step guide to download and install the Cyberflix Tv is mentioned below:</p>
					<ul className="mb-4 list-decimal space-y-2 md:px-24 text-lg">
						<li>Cyberflix is not available on Google Playstore and the APK file has to be downloaded from the trusted website.</li>
						<li>Since this is a third-party download, it is vital to enable the unknown sources options in the settings menu.</li>
						<li>To enable the unknown sources options, go to the settings menu of the device.</li>
						<li>Browse through privacy and security under this menu.</li>
						<li>Then select Unknown sources and click on it to turn it on.</li>
						<li>Go back and download the latest version of the APK file of Cyberflix Tv from a trusted source or website.</li>
						<li>Click on the folder where the APK file is automatically saved.</li>
						<li>Double click on the APK file.</li>
						<li>A pop-up message gets displayed on the screen from the operating system to allow the installation of the app.</li>
						<li>Click on yes to allow the installation process.</li>
						<li>The installation may take a few minutes. Once the installation of the app is completed, the operating system notifies through a message.</li>
						<li>Click on the Done button to end the installation process.</li>
						<li>The app is installed successfully and the shortcut gets created on the home screen.</li>
						<li>Double click on the application and configure the desired settings.</li>
						<li>Now the cyberflix Tv is ready to stream your favorite shows, movies, and many more. Click on the search button, select and play.</li>
					</ul>
					<p className="mb-4">With the successful installation, the user can enjoy unlimited entertainment and fun free of cost. The Cyberflix Tv can also be installed on other than Android devices such as Mac, iOS, Windows Pc with the help of Android Emulators such as Blue stack and others.</p>
				</div>
			</article>
			<article className="py-12 container mx-auto px-6 flex flex-col">
				<h2 className="text-center mb-8">File Specifications</h2>
				<table className="table-auto text-xl place-self-center">
					<tbody className="border">
						<tr className="border-b">
							<td className="font-semibold p-2.5">App Name</td>
							<td>Cyberflix TV</td>
						</tr>
						<tr className="border-b">
							<td className="font-semibold p-2.5">Version</td>
							<td>v3.3.3</td>
						</tr>
						<tr className="border-b">
							<td className="font-semibold p-2.5">Last Updated</td>
							<td>October 2021</td>
						</tr>
						<tr className="border-b">
							<td className="font-semibold p-2.5">File Size</td>
							<td>21 MB</td>
						</tr>
						<tr className="border-b">
							<td className="font-semibold p-2.5">Category</td>
							<td>Entertainment</td>
						</tr>
						<tr className="border-b">
							<td className="font-semibold p-2.5">Requirements</td>
							<td><a href="https://android.com/">Android</a> v4.3 +</td>
						</tr>
						<tr className="border-b">
							<td className="font-semibold p-2.5">License</td>
							<td>Free for all</td>
						</tr>
						<tr>
							<td className="font-semibold p-2.5">Languages</td>
							<td>English, Hindi, etc.</td>
						</tr>
					</tbody>
				</table>

			</article>
			<article className="bg-green-600 py-12 text-white font-semibold">
				<div className="py-12 container mx-auto px-6 text-center">
					<h2 className="text-center mb-8">Screenshots</h2>
					<p className="mb-6">This is how the Cyberflix app latest version 2021 looks on your smartphone.</p>
					<div className="grid md:grid-cols-3 gap-8">
						<StaticImage src="../assets/images/sc1.png" alt="Cyberflix tv menu" />
						<StaticImage src="../assets/images/sc2.png" alt="Cyberflix tv home page" />
						<StaticImage src="../assets/images/sc3.png" alt="Cyberflix tv movies and tv shows" />
					</div>
				</div>
			</article>
			<article className="py-12 container mx-auto px-6 flex flex-col">
				<h2 className="text-center mb-8">Frequently Asked Questions</h2>
			</article>
		</Layout>
	)
}
