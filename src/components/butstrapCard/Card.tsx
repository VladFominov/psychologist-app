import React, { FC } from "react";
import Image from 'next/image';

import cardData from "../cardData/CardData";
import Modal from "../butstrapModal/Modal";
import styles from './card.module.scss'

// interface ICard{
//   data: cardData[];
// }

const FetchCard: FC = () => {
  return (
    <>
      {cardData.map(({ photo, title, description, index }) => (
        <div className="card shadow-sm p-4 mb-4 mt-3 bg-white" key={index}>
          <div className={styles.cardImgWrap}>
          <Image
            src={photo}
            className="card-img-top "
            style={{objectFit: "cover"}}
            fill={true} 
            alt="Слово Залежність"
          />
          </div>
         
          <div className="card-body p-0 mt-3">
            <h5 className="card-title"><span className={styles.cardTitleStyles}>{title}</span></h5>
            <ul className="card-text">
              {description?.map((text, textIndex) => (
                <li key={textIndex}>
                  <span  className={styles.cardTextStyles}>{text}</span>
                  
                  </li>
              ))}
            </ul>
            <Modal />
          </div>
        </div>
      ))}
    </>
  );
};

export default FetchCard;
