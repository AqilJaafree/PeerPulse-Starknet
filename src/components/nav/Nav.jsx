import './nav.css'
import { Link } from 'react-router-dom'

//fake api data
import CurrentUser from '../../FakeData/CurrentUserData'

//component
import DarkMode from '../darkmode/DarkMode'

//FontAwesome Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faSearch, faEnvelope, faBell, faBars  } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
  return (
    <nav>
      <div className="nav-container">

        {/*.....NavArea Left.....*/}
        <div className="nav-left">
          <Link to = '/'>
            <h3 className='logo'>PeerPulse</h3>
          </Link>
          <Link to = '/'>
            <FontAwesomeIcon icon = {faHome} />
          </Link>
          <Link to = '/profile/id'>
            <FontAwesomeIcon icon = {faUser} />
          </Link>
          <div className = "Nav-Searchbar">
            <FontAwesomeIcon icon = {faSearch} />
            <input type="search" />
          </div>
        </div>

        {/*.....NavArea Right.....*/}
        <div className="nav-right">
        <Link to = '/chatbox/id'>
          <FontAwesomeIcon icon = {faEnvelope} />
        </Link>
        <Link to = '/'>
          <FontAwesomeIcon icon = {faBell} />
        </Link>

        <DarkMode />

        <Link to = '/'>
          <FontAwesomeIcon icon = {faBars} />
        </Link>
        <div className="user">
          <img src={CurrentUser.map(user=>(user.ProfieImage))} alt="" />
          <h4>Beg Joker</h4>
        </div>
        </div>
      </div>
    </nav>
  )
}
