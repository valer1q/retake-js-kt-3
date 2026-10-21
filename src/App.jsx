import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import ProductsPage from './pages/ProductsPage/ProductsPage.jsx'
import ProductPage from './pages/ProductPage/ProductPage.jsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'

// Маршруты: список товаров, страница товара и 404 для остальных адресов
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
