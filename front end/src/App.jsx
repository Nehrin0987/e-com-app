
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import Login from './Pages/Login';
import Shop1 from './Pages/Shop1';
import Navbar1 from './Components/Navbar/Navbar1';

const App = () => {
  const location = useLocation();
  const noNavbarRoutes = ['/','/login','/signup','/mens1','/womens1','/kids1','/cart1'];

  return (
    <div>
      {!noNavbarRoutes.includes(location.pathname) && <Navbar1 />}
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path='/mens1' element={<ShopCategory banner={men_banner} category="men" />} />

        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path='/womens1' element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
        <Route path='/kids1' element={<ShopCategory banner={kid_banner} category="kid" />} />
        <Route path="/product" element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/cart1' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<LoginSignup />} />
        <Route path='/shop' element={<Shop1/>} />


      </Routes>
      <Footer />
    </div>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
