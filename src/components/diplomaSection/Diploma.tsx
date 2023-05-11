import React, {FC} from 'react'

import styles from './diploma.module.scss'
import Carousel from '../butstrapCarousel/Carousel'

const Diploma: FC= () => {
  return (
    <>
        <section>
          <div className={styles.container}>
<h2 className={styles.diplomaTitle}>
Постійно підвищую свій професійний рівень через навчання, тренінги, конференції, особисту терапію, супервізію та співпрацю з колегами.
</h2>
<Carousel />
          </div>       
        </section>
        </>
  )
}

export default Diploma