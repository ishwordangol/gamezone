import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import { CategoryProductlisting } from './pages/productlisting';
import { Productdetail } from './pages/productdetail';
function App() {
  return (
    <>
      <div className='App'>
        <Routes>
          <Route exact path="/gamezone" element={<Home />} />
          <Route path="/gamezone/category-product-listing" element={<CategoryProductlisting />} />
          <Route path="/gamezone/product-detail" element={<Productdetail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
