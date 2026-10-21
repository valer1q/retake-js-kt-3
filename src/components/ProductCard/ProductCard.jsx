import { Link } from 'react-router-dom'
import styles from './ProductCard.module.css'
import Rating from '../Rating/Rating.jsx'

// Карточка в списке: название ведет на страницу товара
function ProductCard(props) {
  return (
    <div className={styles.card}>
      <Link className={styles.title} to={'/product/' + props.id}>
        {props.title}
      </Link>
      <Rating rate={props.rate} />
    </div>
  )
}

export default ProductCard
