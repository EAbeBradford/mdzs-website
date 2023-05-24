import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import WeiYing from './pages/WeiYing';
// import WaterTribe from './pages/waterTribe';
// import FireNation from './pages/fireNation';
// import AirNomads from './pages/airNomads';
// import EarthKingdom from './pages/earthKingdom';

// for multi page stuff : https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/' element={<WeiYing />} />
        {/* <Route path='/waterTribe' element={<WaterTribe/>} />
        <Route path='/fireNation' element={<FireNation/>} />
        <Route path='/earthKingdom' element={<EarthKingdom/>} />
        <Route path='/airNomads' element={<AirNomads/>} /> */}
    </Routes>
    </Router>
);
}
  
export default App;