import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route,Switch} from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import MiniNavbar from './Components/MiniNavbar';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Menu from './Components/Menu';
import Reserver from './Components/Reserver';

function App() {
  return (
  <>
  <div className=' homme'>
        <MiniNavbar/>
        <Navbar/>
     
       
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/Contact"  element={<Contact />} />
          <Route path="/Menu"  element={<Menu />} />
          <Route path="/Reserver"  element={<Reserver />} />
          
        </Routes>

        <Footer/>

  </div>
        </>
  );
}

export default App;
