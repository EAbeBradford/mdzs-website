import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import Random from './pages/Random';
import Lan from './pages/lan';
import Jiang from './pages/jiang';
import Jin from './pages/jin';
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
        <Route path='/' element={<Random />} />
       <Route path='/lan' element={<Lan/>} />
       <Route path='/jiang' element={<Jiang/>} />
       <Route path='/jin' element={<Jin/>} />

         {/* <Route path='/fireNation' element={<FireNation/>} />
        <Route path='/earthKingdom' element={<EarthKingdom/>} />
        <Route path='/airNomads' element={<AirNomads/>} /> */}
    </Routes>
    </Router>
);
}
  
export default App;