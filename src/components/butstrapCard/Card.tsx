import React, { FC, useState } from "react";
import Image from "next/image";

import cardData from "../cardData/CardData.json";
import Modal from "../butstrapModal/Modal";
import styles from "./card.module.scss";

const FetchCard: FC = () => {
  const [selectedModalInfo, setSelectedModalInfo] = useState<
    string | undefined
  >(undefined);
  const openModal = (modalInfo: string | undefined): void => {
    setSelectedModalInfo(modalInfo);
  };

  return (
    <>
      {cardData.map(({ photo, title, description, index, modalInfo, alt }) => (
        <div
          className={`card shadow-lg p-4 mb-1 mt-3 bg-white rounded lg:m-0 ${styles.cardContainer}`}
          key={index}
        >
          <div className={styles.cardImgWrap}>
            <Image
              src={photo}
              className="card-img-top "
              style={{ objectFit: "cover" }}
              fill={true}
              alt={alt}
            />
          </div>

          <div className="card-body p-0 mt-3 lg:flex lg:flex-col">
            <h5 className="card-title">
              <span className={styles.cardTitleStyles}>{title}</span>
            </h5>

            <ul className="mb-2">
              {description?.map((text, textIndex) => (
                <li className="card-text " key={textIndex}>
                  <span className={styles.cardTextStyles}>{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <button
                type="button"
                className="btn bg-success text-white opacity-75  "
                data-toggle="modal"
                data-target="#exampleModal"
                onClick={() => openModal(modalInfo)}
              >
                Дізнатися більше
              </button>
            </div>

            {selectedModalInfo && (
              <Modal
                modalInfo={selectedModalInfo}
                onClose={() => setSelectedModalInfo(undefined)}
              />
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default FetchCard;
