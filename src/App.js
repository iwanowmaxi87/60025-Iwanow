import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import { CartProvider } from './context/CartContext'; 
import Cart from './pages/Cart'; 
import Header from './components/Header';
import Confirmation from './pages/Confirmation';
import AboutUs from './pages/AboutUs';
import CarouselComponent from './components/CarouselComponent';
import ImageGridComponent from './components/ImageGridComponent';
import OfferCarousel from './components/OfferCarousel';
import Footer from './components/Footer';
import SpecialOffers from './components/SpecialOffers';


import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Estilos de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Scripts de Bootstrap y Popper.js




function Layout() {
  const location = useLocation();

  return (
    <>
      <NavBar />
      <Header />
      {location.pathname === '/' && (<>          
          <CarouselComponent /> 
          <ImageGridComponent />
          <OfferCarousel /> 
          <div className="text">
            <h1>Instrumentos Musicales y Audio Profesional</h1>
            <h3>La casa de música más completa de Argentina</h3>
            <p>
              House of Rock es una casa de música líder en instrumentos musicales y equipamiento de audio profesional...
              
            </p>
          </div>
          <div className="mainImg">
            <img src="https://bairesrocks.vteximg.com.br/arquivos/ids/237535/1920x680_02.jpg?v=637913244060900000" alt="Imagen de Inicio" className="main-image" />
          </div>
        </>
      )}
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Layout /> 
          <Routes>           
            <Route path="/category/:categoryId" element={<Catalog />} />
            <Route path="/item/:itemId" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/special-offers" element={<SpecialOffers />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
