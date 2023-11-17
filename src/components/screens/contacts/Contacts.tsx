import React, { FC } from "react";

import styles from "./contacts.module.scss";

const Contacts: FC = () => {
  return (
    <>
      <div className=" text-center">
        <div className={styles.contactOverlay}>
          <div className="absolute top-2 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 ">
            <h1 className={styles.contactsTitle}>
              Олексій Більський психолог аддиктолог, військовий психолог.
            </h1>
            <p className={styles.contactsSubTitle}>
              Практикуючий психолог – аддиктолог. Досвід роботи 8.5
              років.Магістр психології.
            </p>
            <p className={styles.contactsSubTitle}>
              Працюю у напрямку Перерешенческого Транзактного Аналізу та
              Клієнт-центрованої та експірієнтальної психотерапії
            </p>
            <h2 className={styles.contactsSubTitle}>
              Працюю з такими видами психологічних проблем:
            </h2>
            <ul>
              <li className={styles.contactsSubTitle}>
                Хімічні та нехімічні залежності (алкоголізм, наркоманія, харчова
                залежність, комп’ютерна залежність, ігроманія)
              </li>
              <li className={styles.contactsSubTitle}>
                Проблеми самооцінки та проблеми характеру (невпевненість,
                агресивність, перфекціонізм, залежність від чужої думки)
              </li>
              <li className={styles.contactsSubTitle}>Сепарація</li>
              <li className={styles.contactsSubTitle}>
                Панічні атаки, тривожні розлади
              </li>
              <li className={styles.contactsSubTitle}>
                Посттравматичний стресовий розлад (ПТСР)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
