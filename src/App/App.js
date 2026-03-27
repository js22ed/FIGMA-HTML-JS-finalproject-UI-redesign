import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';

import About from './components/About/About';
import Mercury from './components/Mercury/Mercury';
import Saturn from './components/Planets/Saturn';
import Uranus from './components/Planets/Uranus';
import Earth from './components/Planets/Earth';
import Mars from './components/Planets/Mars';
import Jupiter from './components/Planets/Jupiter';
import Neptune from './components/Planets/Neptune';
import Venus from './components/Planets/Venus';

function App() {
  return (
    <div className="App">
  
      <Router>
        <Menu></Menu>
        <Routes>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="About" element={<About/>}/>
          <Route path="/Mercury" element={<Mercury/>}/>
          <Route path="/Jupiter" element={<Jupiter/>}/>
          <Route path="/Venus" element={<Venus/>}/>
          <Route path="/Earth" element={<Earth/>}/>
          <Route path="/Mars" element={<Mars/>}/>
          <Route path="/Saturn" element={<Saturn/>}/>
          <Route path="/Uranus" element={<Uranus/>}/>
          <Route path="/Neptune" element={<Neptune/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;

