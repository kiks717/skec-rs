import './callToAction.css'

const CallToAction = () => {
  return (
    <div className='call-to-action'>
        <h1 className="call-to-action-h1">
             Pridružite se
        </h1>
        {/* <div className="decoration-cta"></div> */}
        <div className='call-to-action-wrapper'>
            <p className='call-to-action-p1'>Nemojte propustiti priliku da unapredite svoje znanje o kriptovalutama. <br/>Pridružite se Srpskom Kripto Edukativnom Centru! <br/>Upišite svoju email adresu kao prvi korak do znanja.</p>
            <input type='text' placeholder='tvoja email adresa'/>
            <button type='button'>Pridruzi se</button>
        </div>
        <div className="decoration-cta-line"></div>
        <div className="decoration-cta-line-frame1"></div>
          <div className="decoration-cta-line-frame2"></div>
          <div className="decoration-cta-line-frame3"></div>
          <div className="decoration-cta-line-frame4"></div>
          <div className="decoration-cta-line-frame5"></div>
          <div className="decoration-cta-line-frame6"></div>
    </div>
  )
}

export default CallToAction