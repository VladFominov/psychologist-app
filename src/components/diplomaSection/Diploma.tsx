import React, {FC} from 'react'

import styles from './diploma.module.scss'
import Carousel from '../butstrapCarousel/Carousel'
const slides = [
  {url: '/images/diploma1.jpg'},
  {url: '/images/diploma2.jpg'},
  {url: '/images/diploma3.jpg'},
]

const Diploma: FC= () => {
  return (
    <>
        <section className="rounded-t-lg">
          <div className="mb-3 px-3">
<h2 className={styles.diplomaTitle}>
Постійно підвищую свій професійний рівень через навчання, тренінги, конференції, особисту терапію, супервізію та співпрацю з колегами.
</h2>
<div className='container mx-auto w-70 h-96 relative'>
<Carousel diplomasImg={slides} />
</div>

          </div>       
        </section>
        </>
  )
}

export default Diploma