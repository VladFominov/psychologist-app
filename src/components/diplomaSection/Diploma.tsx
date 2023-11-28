import React, { FC } from "react";

import styles from "./diploma.module.scss";
import Carousel from "../butstrapCarousel/Carousel";
const slides = [
  {
    url: "/images/diploma1.jpg",
    alt: "international training & science conference ",
  },
  {
    url: "/images/diploma2.jpg",
    alt: "диплом магістра зі спеціальністю психологія",
  },
  {
    url: "/images/diploma3.jpg",
    alt: "сертифікат про закінчення курсу психологічна робота з узалежненнями - консультант адиктолог",
  },
  {
    url: "/images/diploma4.jpg",
    alt: "сертифікат про закінчення курсу психіатрія для психологів",
  },
  {
    url: "/images/diploma5.jpg",
    alt: "посвідчення про членство у ГС Національна психологічна асоціація",
  },
  {
    url: "/images/diploma6.jpg",
    alt: "сертифікат про закінчення курсу військова психологія для психолога",
  },
  {
    url: "/images/diploma7.jpg",
    alt: "сертифікат про закінчення курсу Терапія трава війни.Терапія ПТСР",
  },
  {
    url: "/images/diploma8.jpg",
    alt: "Українська спільнота транзакційного аналізу сертифікат про закінчення курсу ТА в Психотерапії",
  },
  {
    url: "/images/diploma9.jpg",
    alt: "ukrainian society of transactional analysis",
  },
];
// { url: "/psychologist-app/images/diploma1.jpg" },
const Diploma: FC = () => {
  return (
    <>
      <section className="h-140 rounded-t-lg">
        <div className="container mb-3 ">
          <h2 className={styles.diplomaTitle}>
            <span className="lg:text-3xl ">
              Постійно підвищую свій професійний рівень через навчання,
              тренінги, конференції, особисту терапію, супервізію та співпрацю з
              колегами:
            </span>
          </h2>
          <div className="mx-auto w-70 h-96 relative mt-4">
            <Carousel diplomasImg={slides} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Diploma;
