import './App.css';
// import NavBar from './Header';
import { HashRouter ,Route , Routes } from 'react-router-dom';
import Home from './Home';
import Journey from './Journey';
import Team from "./Team";
import Store from './Store';
import Contact from './Contact';
import Header from "./Header";
// import { Link } from 'react-router-dom';
import Footer from './Footer';

function App() {

  const home_url="http://localhost:3000/";
  return (
    <HashRouter>
    <Header/>
    <Routes>
      <Route exact path={home_url} element={<Home />} />
      <Route exact path="/store" element={<Store />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/journey" element={<Journey />} />
      <Route exact path="/team" element={<Team />} />
    </Routes>
    <Footer />
    </HashRouter>
    
  );
}

export default App;
