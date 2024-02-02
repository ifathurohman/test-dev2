import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './component/page/Home'
import Header from './component/Header';
import NotFound from './component/page/NotFound';
import KatalogProduk from './component/page/KatalogProduk';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {

  return (
    <>
      <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/product/:q" element={<ProductDetail />} /> */}
        <Route path="/product" element={<KatalogProduk />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
