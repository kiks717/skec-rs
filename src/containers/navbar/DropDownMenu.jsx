import {CgMenuGridR} from 'react-icons/cg'
import { useState } from 'react'
import './dropdown.css'

const DropDownMenu = () => {
  const [show, setShow] = useState(true);
  const handleShow = () => setShow(!show);

  return (
    <div className='dropdown' onClick={handleShow}>

        <span
            onClick={handleShow} 
            className='dropwdown-icon'>
                <CgMenuGridR/>
        </span>   
        {show && (
        <ul className='dropdown-menu'>
        <a href='#'><li className="dropdown-item">Pocetak</li></a>
        <a href="#">
        <li className="dropdown-item">Tim</li>

        </a>
        <li className="dropdown-item">Pristupnica</li>
        <li className="dropdown-item">Kontakt</li>
        </ul>
         )}

    </div>
  )
}

export default DropDownMenu