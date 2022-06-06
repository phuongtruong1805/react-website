import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Pages/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/HomePage/Home';
import Services from './components/Pages/Services/Services'
import Products from './components/Pages/Products/Products'
import SignUp from './components/Pages/SignUp/SignUp'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/sign-up" element={<SignUp />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;