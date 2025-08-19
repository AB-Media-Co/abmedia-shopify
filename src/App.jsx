import './App.css'
import Page1 from './Pages/Page1'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page2 from './Pages/Page2';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Page1 />} />

        {/* Future me aur pages add karna ho to yaha add kar sakte ho */}
        <Route path="/in" element={<Page2 />} />
      </Routes>
    </Router>
  )
}

export default App
