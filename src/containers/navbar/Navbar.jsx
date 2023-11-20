import './navbar.css'
import {BiHomeHeart} from 'react-icons/bi'
import {AiOutlineTeam,AiOutlineForm,AiOutlineContacts} from 'react-icons/ai'
import logo from '../../assets/logo-icon.ico'
import DropDownMenu from './DropDownMenu'
import { Link } from 'react-router-dom'

const Navbar = (handleShow) => {

  return (
    <nav className='navbar'>
      {/* <a href='#'> */}
      <img src={logo} alt='logo' className='navbar-logo'/>
      {/* </a> */}
        <ul className='navbar-nav'>
          <Link to="/hero"><li className="icon-button"><BiHomeHeart/></li></Link>
          <Link to="/team-section"><li className="icon-button"><AiOutlineTeam/></li></Link>
          <Link to="/pristupnica"><li className="icon-button"><AiOutlineForm/></li></Link>
          <Link to="/contact"><li className="icon-button"><AiOutlineContacts/></li></Link>
        </ul>
        {handleShow && (
          <DropDownMenu />
        )}
    </nav>
  )
}

export default Navbar