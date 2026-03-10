import React from 'react';
import {Routes, Route} from 'react-router';
import HomePage from './pages/HomePage';
import CreateCarPage from './pages/CreateCarPage';
import CarDetailPage from './pages/CarDetailPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create" element={<CreateCarPage/>}/>
        <Route path="/car/:id" element={<CarDetailPage/>}/>
      </Routes>
    </div>
  )
}

export default App;