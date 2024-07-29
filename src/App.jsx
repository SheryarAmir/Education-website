import { useState } from 'react';
import Navbar from "./Compounents/Navbar/Navbar"
import Hero from "./Compounents/Hero/Hero"
import Programs from './Compounents/Programs/Programs';
import Tittle from './Compounents/Tittle/Tittle';
import About from './Compounents/About/About';
import Campus from './Compounents/Campus/Campus';
import Testimonials from "./Compounents/Testimonials/Testimonials"
import Contact from './Compounents/Contact/Contact';
import Footer from './Compounents/Footer/Footer';
import VideoPlayer from './Compounents/VideoPlayer/VideoPlayer';

function App() {


  const [playState, setPlayState] = useState(false);



  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Tittle subTittle='OUR programs'  Tittle='What We Offer' />
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Tittle subTittle='Gallery'  Tittle='Campus photos' />
      <Campus/>
      <Tittle subTittle='TESTIMONIALS'  Tittle='What Student Says ' />
      <Testimonials/>
      <Tittle subTittle='Contact Us '  Tittle='Get in Touch' />
      <Contact/>
      <Footer/>
      </div>
  <VideoPlayer playState={playState}  setPlayState={setPlayState} />
    </>
  );
}

export default App;