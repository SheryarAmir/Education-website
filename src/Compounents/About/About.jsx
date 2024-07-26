import React from 'react'
import "./About.css"
import about_img from "../../assets/about.png"
import play_img from "../../assets/play-icon.png"


const About = () => {
  return (
    <div className='about'>

        <div className="About-left">
            <img src={about_img} alt=""  className='about-img'/>
            <img src={play_img} alt=""  className='play_icon'/>
        </div>
        <div className="About-right">
            <h3>About University</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            
            <p>Embark on a trans ormatlve educationa Journey Wit our
              university's comprehensive education programs. Our cutting-edge
              curriculum is designed to empower students with the knowledge,
              skills, and experiences needed to excel in the dynamic field of
              education.</p>

              <p>With a focus on innovation, hands-on learning, and personalized
              mentorship, our programs prepare aspiring educators to make a
              meaningful impact in classrooms, schools, and communities.</p>

             <p>Whether you aspire to become a teacher, administrator,
             counselor, or educational leader, our diverse range of programs
             offers the perfect pathway to achieve your goals and unlock your
             full potential in shaping the future of education.</p>l


        </div>
      
    </div>
  )
}

export default About
