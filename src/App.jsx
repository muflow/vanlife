import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Vans/Home';
import About from './pages/About';
import Vans from './pages/Vans/Vans';
import VanDetails from './pages/VanDetails';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import Layout from './components/Layout';
import HostLayout from './components/HostLayout';

import './server';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetails />} />

          <Route path="/host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
