import React, { FC } from "react";

import styles from "./diploma.module.scss";
import Carousel from "../butstrapCarousel/Carousel";
const slides = [
  { url: "/psychologist-app/images/diploma1.jpg" },
  { url: "/psychologist-app/images/diploma2.jpg" },
  { url: "/psychologist-app/images/diploma3.jpg" },
  { url: "/psychologist-app/images/diploma4.jpg" },
  { url: "/psychologist-app/images/diploma5.jpg" },
  { url: "/psychologist-app/images/diploma6.jpg" },
  { url: "/psychologist-app/images/diploma7.jpg" },
  { url: "/psychologist-app/images/diploma8.jpg" },
  { url: "/psychologist-app/images/diploma9.jpg" },
];
// { url: "/psychologist-app/images/diploma1.jpg" },
const Diploma: FC = () => {
  return (
    <>
      <section className="h-140 rounded-t-lg">
        <div className="mb-3 px-3">
          <h2 className={styles.diplomaTitle}>
            Постійно підвищую свій професійний рівень через навчання, тренінги,
            конференції, особисту терапію, супервізію та співпрацю з колегами.
          </h2>
          <div className="container mx-auto w-70 h-96 relative mt-4">
            <Carousel diplomasImg={slides} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Diploma;
