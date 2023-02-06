import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import Loader from './components/Loader';
import Header from './components/Header';
import Footer from './components/Footer';

//pages
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';


export default function App() {

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {

    return () => {
      setShowLoader(false);
    }
  }, []);

  return (
    <BrowserRouter>
      {showLoader ? <Loader /> : null}
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route exact path='/products' element={<Products />} />
        <Route path='/products/:id' element={<SingleProduct />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}