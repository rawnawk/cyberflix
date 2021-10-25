import React from 'react'
import {Link} from 'gatsby'

export default function Footer() {
    return (
        <footer className="py-12 text-white bg-gray-800 text-lg">
            <div className="container mx-auto ">
                <section className="grid md:grid-cols-2 text-white mb-16">
                    <div>
                        <p>Also checkout:</p>
                        <ul>
                            <li><Link className="link" to="/download/">Download Cyberflix APK 2021</Link></li>
                            <li><Link className="link" to="/cyberflix-firestick/">Cyberflix for Firestick</Link></li>
                            <li><Link className="link" to="/cyberflix-for-pc/">Cyberflix for PC</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p>We are not the original creators of Cyberflix, we just provide the details about the app. Please contact us for any inconvenience.</p>
                    </div>
                </section>
                <section className="flex items-center gap-6 justify-center">
                    <div className="text-center font-bold">&copy; 2021 Cyberflix TV</div>
                    <Link className="hover:text-gray-300" to="/download/">About</Link>
                    <Link className="hover:text-gray-300" to="/contact/">Contact</Link>
                    <Link className="hover:text-gray-300" to="/privacy-policy/">Privacy Policy</Link>
                </section>
            </div>
        </footer>
    )
}
