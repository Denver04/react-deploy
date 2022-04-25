import './App.css';
// import NavBar from './Header';
import { BrowserRouter ,Route , Routes } from 'react-router-dom';
import Home from './Home';
import Journey from './Journey';
import Team from "./Team";
import Store from './Store';
import Contact from './Contact';
import Header from "./Header";
// import { Link } from 'react-router-dom';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/store" element={<Store />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/journey" element={<Journey />} />
      <Route exact path="/team" element={<Team />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    
  );
}

export default App;
