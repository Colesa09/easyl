import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './views/HomePage/HomePage.js';

// function App() {
//   return (
//     <>
//       <HomePage />
//     </>
    
//   );
// }

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
