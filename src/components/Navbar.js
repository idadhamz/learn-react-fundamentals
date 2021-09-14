import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="flex items-center justify-center w-full h-16">
            <ul className="flex flex-row items-center justify-center gap-3">
                <li className="px-5 py-2 text-white bg-blue-700 rounded-lg hover:opacity-80 hover:cursor-pointer">
                    <Link to="/">App</Link>
                </li>
                <li className="px-5 py-2 text-white bg-blue-700 rounded-lg hover:opacity-80 hover:cursor-pointer">
                    <Link to="/classcomp">Class Components</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
