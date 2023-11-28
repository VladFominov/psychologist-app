import React, { useState } from "react";
import Image from "next/image";

// import styles from "./_carousel.module.scss"
type CarouselProps = {
  diplomasImg: { url: string; alt: string }[];
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
            className={` ${i === currentIndex ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              className="object-contain"
              src={item.url}
              fill={true}
              width={0}
              height={0}
              sizes="100vw"
              alt={item.alt}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Carousel;
