import About from '../app/components/About';
import Bmi from './components/Bmi';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonies from './components/Testimonies';
export default function Home() {
  return (
    <main>
      < Header /> 
      < Hero />
      < About />
      < Services />
      < Testimonies/> 
      < Bmi />
      < Contact />
      < Footer />
    </main>
  );
}
