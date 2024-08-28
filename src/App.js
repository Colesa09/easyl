import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './views/HomePage/HomePage.js';
import InspirationPage from './views/Inspiration/Inspiration.js';
import TipsPage from './views/TipsPage/TipsPage.js';

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
        <Route path="/" >
          <Route index element={<HomePage />} />
          <Route path='inspiration' element={<InspirationPage />} />
          <Route path='tips' element={<TipsPage />} />
        </Route>
      </Routes>
      
    </Router>
  );
}

export default App;
