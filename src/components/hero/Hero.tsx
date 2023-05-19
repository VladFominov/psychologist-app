import React, { FC } from "react";

import styles from "./hero.module.scss";

const Hero: FC = () => {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.imgOverlay}>
          <div className={styles.container}>
            <div className={styles.positionContainer}>

           
            <div className={styles.heroDataWrap}>
            <h1 className={styles.heroTitle}>
           Олексій Більский 
          </h1>
          <p className={styles.heroText}>Практикуючий психолог – аддиктолог </p>
          <p className={styles.heroText}>
          Досвід роботи 8 років
          </p>
          <p className={styles.heroText}>         
            Магістр психології.
          </p>
            </div>    
            </div>    
          </div>       
        </div>
      </section>
    </>
  );
};

export default Hero;
