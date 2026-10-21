import styles from './Rating.module.css'

function Rating(props) {
  // Рейтинг дробный, округляем по правилам математики
  const rounded = Math.round(props.rate)
  const stars = []

  // Закрашиваем столько звезд, сколько получилось после округления
  for (let i = 1; i <= 5; i++) {
    if (i <= rounded) {
      stars.push(<span key={i} className={styles.active}>★</span>)
    } else {
      stars.push(<span key={i} className={styles.star}>★</span>)
    }
  }

  return (
    <div className={styles.rating} title={'Рейтинг: ' + props.rate}>
      {stars}
    </div>
  )
}

export default Rating
