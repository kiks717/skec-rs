import './team.css'
import {AiOutlineLinkedin,AiOutlineInstagram,AiOutlineFacebook,AiOutlineTwitter} from 'react-icons/ai'

const Team = () => {

    return (
        <>
        <div className='title-container'>
        <h1 className='title-team'>A ovo, smo mi</h1>
        </div>
        <div className="container">
        <div className="card card0">
            <div className="border">
            <h2>Kristina Lazarevic</h2>
            <div className="icons">
                <a href="#" className="link link--icon"><AiOutlineTwitter/></a>
                <a href="#" className="link link--icon"><AiOutlineFacebook/></a>
                <a href="#" className="link link--icon"><AiOutlineInstagram/></a>
                <a href="#" className="link link--icon"><AiOutlineLinkedin/></a>
            </div>
            </div>
        </div>

        <div className="card card1">
            <div className="border">
            <h2>Dejan Stepanovic</h2>
            <div className="icons">
                <a href="#" className="link link--icon"><AiOutlineTwitter/></a>
                <a href="#" className="link link--icon"><AiOutlineFacebook/></a>
                <a href="#" className="link link--icon"><AiOutlineInstagram/></a>
                <a href="#" className="link link--icon"><AiOutlineLinkedin/></a>
            </div>
            </div>
        </div>
        </div>
        <div>
            <p>nasa prica</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati esse ducimus nisi. Dolores, adipisci corporis?</p>
        </div>

        </>
  )
}

export default Team