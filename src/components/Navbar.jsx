import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
  <header className="container absolute top-0 -translate-x-1/2 left-1/2 flex flex-wrap items-center justify-between  p-2">
        <span className="text-xl font-semibold">Aman</span>
        <nav className="hidden sm:block">
          <ul className="flex items-center gap-2 sm:gap-8">
            <Link >
            <li>Home</li>
            </Link>
            <Link>
            <li>Projects</li>
            </Link>
            <Link>
            <li>About</li>
            </Link>
            <Link>
            <li>Contact</li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar
