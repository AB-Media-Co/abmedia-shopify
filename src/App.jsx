import './App.css'
import Page1 from './Pages/Page1'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page2 from './Pages/Page2';
import Calendly from './Components/Calendly';
import ThankYou from './Components/ThankYou';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Page1 />} />

        {/* Future me aur pages add karna ho to yaha add kar sakte ho */}
        <Route path="/in" element={<Page2 />} />
        <Route path="/calendly" element={<Calendly />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </Router>
  )
}

export default App
