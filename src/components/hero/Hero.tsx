import React, { FC } from "react";

import styles from "./hero.module.scss";

const Hero: FC = () => {
  return (
    <>
      <section className="relative">
        <div className={styles.imgOverlay}>
          
           
           <div className="absolute bottom-10 left-10 lg:left-20 lg:bottom-20 ">
            <h1 className="text-3xl text-white md:mb-10">
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
                
        
      </section>
    </>
  );
};

export default Hero;
