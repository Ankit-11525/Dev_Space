import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Register from './pages/Register/Register';
import Navigation from './components/shared/Navigation/Navigation'
function App() {
  return <>
  <Router>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Register />} />
    </Routes>
  </Router>
  </>
}

export default App;
