import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import Random from './pages/Random';
import Lan from './pages/lan';
import Jiang from './pages/jiang';
import Jin from './pages/jin';
import Nie from './pages/nie';
import Wen from './pages/wen';
import Location from './pages/location'

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
       <Route path='/nie' element={<Nie/>} />
       <Route path='/wen' element={<Wen/>} />
       <Route path='/location' element={<Location/>} />

    </Routes>
    </Router>
);
}
  
export default App;