import { useState } from 'react';
import Navbar from "./Compounents/Navbar/Navbar"
import Hero from "./Compounents/Hero/Hero"
import Programs from './Compounents/Programs/Programs';
import Tittle from './Compounents/Tittle/Tittle';
import About from './Compounents/About/About';
import Campus from './Compounents/Campus/Campus';
import Testimonials from "./Compounents/Testimonials/Testimonials"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Tittle subTittle='OUR programs'  Tittle='What We Offer' />
      <Programs/>
      <About/>
      <Tittle subTittle='Gallery'  Tittle='Campus photos' />
      <Campus/>
      <Tittle subTittle='TESTIMONIALS'  Tittle='What Student Says ' />
      <Testimonials/>
      </div>
  
    </>
  );
}

export default App;