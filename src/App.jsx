import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ConfiguratorPage from './pages/ConfiguratorPage'
import OurStoryPage from './pages/OurStoryPage'
import BuildProcessPage from './pages/BuildProcessPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="/design" element={<ConfiguratorPage />} />
        <Route path="/design/:productId" element={<ConfiguratorPage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/build-process" element={<BuildProcessPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
