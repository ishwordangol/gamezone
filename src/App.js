import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import { Maincategorylist } from './pages/Maincategorylist';
import { CategoryProductlisting } from './pages/productlisting';
import { Productdetail } from './pages/productdetail';
import { Categorypage } from './pages/users/categorypage';
import { Categoryforms } from './pages/users/categorybasicforms';
import { Congratulations } from './pages/users/congratulations';
import { Contact } from './pages/contact';

function App() {
  return (
    <>
      <div className='App'>
        <Routes>
          <Route path="/gamezone" element={<Home />} />
          <Route path="/gamezone/maincategorylist" element={<Maincategorylist />} />
          <Route path="/gamezone/category-product-listing" element={<CategoryProductlisting />} />
          <Route path="/gamezone/product-detail" element={<Productdetail />} />
          <Route path="/gamezone/user/catgorypage" element={<Categorypage />} />
          <Route path="/gamezone/user/categoryforms" element={<Categoryforms />} />
          <Route path="/gamezone/user/congratulations" element={<Congratulations />} />
          <Route path="/gamezone/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
