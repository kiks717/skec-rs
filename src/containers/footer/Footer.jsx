import './footer.css'
import {AiOutlineLinkedin,AiOutlineInstagram,AiOutlineFacebook,AiOutlineTwitter} from 'react-icons/ai'
const Footer = () => {
        const d = new Date()
        let year = d.getFullYear()

    
  return (
    <div className='footer'>
        <div className='footer-copyright'>
        <h4 className='footer-skec'>Srpski Kripto Edukativni Centar © {year}</h4>

        </div>
        <div className='footer-icons'>
            <a href='https://www.linkedin.com/company/srpskikriptoedukativnicentar/about/'><AiOutlineLinkedin/></a>
            <a href=''><AiOutlineInstagram/></a>
            <a href=''><AiOutlineFacebook/></a>
            <a href=''><AiOutlineTwitter/></a>
        </div>
    </div>
  )
}

export default Footer