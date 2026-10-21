import { useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import styles from './ProductPage.module.css'
import Rating from '../../components/Rating/Rating.jsx'

const url = 'https://fakestoreapi.com/products'

function ProductPage() {
  // id товара берем из адреса /product/:id
  const params = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(function () {
    fetch(url + '/' + params.id)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        setProduct(data)
        setLoading(false)
      })
      .catch(function () {
        // Для несуществующего id сервер отдает пустой ответ
        setProduct(null)
        setLoading(false)
      })
  }, [params.id])

  function goBack() {
    // Если страницу открыли по прямой ссылке, назад идти некуда - открываем список
    if (location.key === 'default') {
      navigate('/products')
    } else {
      navigate(-1)
    }
  }

  let content

  if (loading) {
    content = <p className={styles.message}>Загрузка...</p>
  } else if (product === null) {
    content = <p className={styles.message}>Товар не найден</p>
  } else {
    content = (
      <div className={styles.card}>
        <h1 className={styles.title}>{product.title}</h1>
        <img className={styles.image} src={product.image} alt={product.title} />
        <div>
          <p className={styles.text}>Price: {product.price} $</p>
          <p className={styles.text}>Description: {product.description}</p>
        </div>
        <Rating rate={product.rating.rate} />
      </div>
    )
  }

  return (
    <div className={styles.page}>
      {content}
      <button className={styles.button} onClick={goBack}>
        Назад
      </button>
    </div>
  )
}

export default ProductPage
