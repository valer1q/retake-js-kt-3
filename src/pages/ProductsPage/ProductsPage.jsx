import { useState, useEffect } from 'react'
import styles from './ProductsPage.module.css'
import ProductCard from '../../components/ProductCard/ProductCard.jsx'

const url = 'https://fakestoreapi.com/products'

function ProductsPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  // Загружаем товары один раз при открытии страницы
  useEffect(function () {
    fetch(url)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        setProducts(data)
        setLoading(false)
      })
      .catch(function () {
        setError(true)
        setLoading(false)
      })
  }, [])

  // Пока данные не пришли, показываем сообщение
  if (loading) {
    return <p className={styles.message}>Загрузка...</p>
  }

  if (error) {
    return <p className={styles.message}>Не удалось загрузить товары</p>
  }

  return (
    <div className={styles.list}>
      {products.map(function (product) {
        return (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            rate={product.rating.rate}
          />
        )
      })}
    </div>
  )
}

export default ProductsPage
