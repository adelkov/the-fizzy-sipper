import { Link } from "react-router-dom"

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/favorites">My Favorites</Link>
          <Link to="/">The fizzy sipper</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation