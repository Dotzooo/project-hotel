// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import './index.scss'

// import FrontHeader from "./components/front/header";
import FrontIndex from './pages/front/index';

function App() {
  
  return (
    <div className='container-fluid vh-100 vw-100 p-0'>
      {/* <FrontHeader /> */}
      <Routes>
        <Route path='/' element={<FrontIndex />}></Route>
     </Routes>
    </div>
  )
}

export default App
