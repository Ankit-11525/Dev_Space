import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Register from './pages/Register/Register';
import Navigation from './components/shared/Navigation/Navigation'
import Login from './pages/Login/Login';
import Authenticate from './pages/authenticate/Authenticate';


function App() {
  return <>
  <Router>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/authenticate" element={<Authenticate />} />
      
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
  </>
}

export default App;
