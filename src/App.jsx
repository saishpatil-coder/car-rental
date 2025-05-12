import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Vehicles from './components/Vehicles';
import Car from './components/Car';
import Bike from './components/Bike';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import { LoadScript } from '@react-google-maps/api';

function App()
{
  return (
    <Router>
      <LoadScript googleMapsApiKey="AIzaSyBZ0vBdG5-FDsW0rjrrwmNNYu7GBLXbalg">

      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="hero-container">
                  <Hero />
                </div>
                <Vehicles />
                <About />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/cars" element={<><Car /><Contact />
            <Footer /></>} />
          <Route path="/bikes" element={<><Bike /><Contact />
            <Footer /></>} />
          
        </Routes>
      </div>

      </LoadScript>
    </Router>
  );
}

export default App;