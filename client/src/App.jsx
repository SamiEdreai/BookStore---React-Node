import React from 'react';
import './style.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      {<Header />}

      <Routes>


        <Route path="" element={< Test />} />


      </Routes>

      {<Footer />}
    </BrowserRouter>
  );
}

export default App;
