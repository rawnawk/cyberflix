import React, {useState} from 'react'

import { Link } from "gatsby"

export default function Header() {
    const [mobile, setMobile] = useState(false)
    
    return (
        <header>
            <nav className="md:hidden">
                <div className="flex items-center justify-between px-4 py-5 border-b">
                    <div>
                        <a href="/"><h2>Cyberflix TV</h2></a>
                    </div>
                    <button onClick={()=>setMobile(!mobile)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <div className={`text-center mobile-nav ${mobile?'block':'hidden'}`}>
                    <ul>
                        <li>
                            <Link to="/cyberflix-for-pc/">Windows PC</Link>
                        </li>
                        <li>
                            <Link to="/cyberflix-firestick/">Firestick</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav className="hidden md:block">
                <div className="flex items-center justify-between px-4 py-5 border-b">
                    <div>
                        <a href="/"><h2>Cyberflix TV</h2></a>
                    </div>
                    <div className={`text-center space-x-6`}>
                        <Link to="/cyberflix-for-pc/">Windows PC</Link>
                        <Link to="/cyberflix-firestick/">Firestick</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}
