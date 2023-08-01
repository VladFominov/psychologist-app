import React, { useState } from "react";
import Image from "next/image";

// import styles from "./_carousel.module.scss"
type CarouselProps = {
  diplomasImg: { url: string }[];
};

const Carousel = ({ diplomasImg }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  

  const goToPrevious = (): void => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? diplomasImg.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
  };

  const goToNext = (): void => {
    const isLastSlide = currentIndex === diplomasImg.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };

  return (
    <>
      <span
        onClick={goToPrevious}
        className="absolute text-7xl text-red-600 left-8 top-1/2 h-55 w-55 -translate-y-1/2 z-10 cursor-pointer "
      >
        &#8678;
      </span>
      <span
        onClick={goToNext}
        className="absolute text-7xl text-red-600 right-8 top-1/2 h-55 w-55 -translate-y-1/2 z-10 cursor-pointer "
      >
        &#8680;
      </span>
      <ul className="list-none p-0 m-0 ">
        {diplomasImg.map((item, i) => (
          <li
            key={i}
            className={` ${i === currentIndex ? "opacity-100"  : "opacity-0"}`}
          >
            <Image
              className="object-contain"
              src={item.url}
              fill={true}
              width={0}
              height={0}
              sizes="100vw"
              alt="диплом"
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Carousel;

// -------------------------------------------------------------------------------------------------------------------------------
// import React, {FC} from 'react'
// import Image from "next/image";

// // import styles from "./_carousel.module.scss"

// import diploma1 from '../../../public/images/diploma1.jpg'
// import diploma2 from '../../../public/images/diploma2.jpg'
// import diploma3 from '../../../public/images/diploma3.jpg'

// const Carousel: FC= () => {
//   return (
//     <>
// <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
//   <ol className="carousel-indicators">
//     <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//   </ol>
//   <div className="carousel-inner md:h-96">
//     <div className="carousel-item active">
//       <div className="d-block w-100 image-container lg:w-10 lg:h-20" >
//       <Image src={diploma1} className="object-cover h-50 w-30 "  alt="Your Image" />
//       </div>
//     </div>
//     <div className="carousel-item">
//       <div className="d-block w-100 " >
//       <Image src={diploma2} className="object-cover h-50 w-30 lg:w-10 lg:h-20"  alt="Your Image" />
//       </div>
//     </div>
//     <div className="carousel-item">
//       <div className="d-block w-100 " >
//       <Image src={diploma3}  className="object-cover h-50 w-30 lg:w-10 lg:h-20 "     alt="Your Image" />
//       </div>
//     </div>
//   </div>
//   <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="sr-only">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="sr-only">Next</span>
//   </button>
// </div>
//         </>
//   )
// }

// export default Carousel
