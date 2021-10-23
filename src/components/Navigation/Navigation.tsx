import { Link } from "react-router-dom"
import TriangleShaped from "../TriangleShaped"

function Navigation() {
  return (
    <nav className='w-full bg-indigo-500 text-white'>
      <ul className="w-full max-w-4xl mx-auto p-4 flex justify-between items-center">
        <li>
          <Link to="/favorites">My Favorites</Link>
        </li>
        <div className='flex-col items-center hidden md:flex justify-center'>
          <figure className=' h-14 w-14'>
            <TriangleShaped />
          </figure>
          <h1 className="font-title text-2xl">The Fizzy Sipper</h1>
          <p>Your personal bartender</p>
        </div>
        <li>
          <Link to="/">Cocktails</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation