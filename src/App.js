import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './views/HomePage/HomePage.js';
import InspirationPage from './views/Inspiration/Inspiration.js';
import TipsPage from './views/TipsPage/TipsPage.js';
import ExplorePage from './views/ExplorePage/ExplorePage.js';
import ArtformPage from './views/ArtformPage/ArtformPage.js';
import { ArtformPageInd } from './views/ArtformPage/ArtformPage.js';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" >
          <Route index element={<HomePage />} />
          <Route path='explore' element={<ExplorePage />} />
          <Route path='artforms' element={<ArtformPage />} />
          <Route path='artforms/:id' element={<ArtformPageInd />} />
          <Route path='inspiration' element={<InspirationPage />} />
          <Route path='tips' element={<TipsPage />} />
          
        </Route>
      </Routes>
      
    </Router>
  );
}

export default App;
