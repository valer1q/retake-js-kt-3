import { useNavigate } from 'react-router-dom'
import styles from './NotFoundPage.module.css'

// Показывается при переходе по неизвестному адресу
function NotFoundPage() {
  const navigate = useNavigate()

  function goToProducts() {
    navigate('/products')
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.text}>Ошибка: такой страницы не существует</p>
      <button className={styles.button} onClick={goToProducts}>
        К списку товаров
      </button>
    </div>
  )
}

export default NotFoundPage
