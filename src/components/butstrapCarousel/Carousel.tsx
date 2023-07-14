import React, {FC} from 'react'
import Image from "next/image";

import styles from "./_carousel.module.scss"

import diploma1 from '../../../public/images/diploma1.jpg'
import diploma2 from '../../../public/images/diploma2.jpg'
import diploma3 from '../../../public/images/diploma3.jpg'

const Carousel: FC= () => {
  return (
    <>
<div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="d-block w-100 image-container" >
      <Image src={diploma1} className={styles.img}  alt="Your Image" />
      </div> 
    </div>
    <div className="carousel-item">
      <div className="d-block w-100 " >
      <Image src={diploma2} className={styles.img}  width={300} height={200}  alt="Your Image" />
      </div> 
    </div>
    <div className="carousel-item">
      <div className="d-block w-100 " >
      <Image src={diploma3}  className={styles.img}  width={300} height={200}  alt="Your Image" />
      </div> 
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </button>
</div>
        </>
  )
}

export default Carousel