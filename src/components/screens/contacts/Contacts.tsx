import React, { FC } from "react";

import styles from "./contacts.module.scss";

const Contacts: FC = () => {
  return (
    <>
      <div className="mb-52 px-3 lg:mb-64">
        <h1 className={styles.contactsTitle}>
          Олексій Більський психолог аддиктолог, військовий психолог
        </h1>
        <p className={styles.contactsSubTitle}>
          Практикуючий психолог – аддиктолог.Досвід роботи 8.5 років.Магістр
          психології.
        </p>
        <h2 className={styles.contactsTitle}>
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
            Посттравматичний стресовий розлад (ПТСР)
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contacts;
