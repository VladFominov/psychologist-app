import React, { FC } from 'react'

import styles from './contacts.module.scss'

const Contacts: FC = () => {
    return (
        <>
        <div className="mb-52 px-3 lg:mb-64">
        <h1 className={styles.contactsTitle}>Олексій Більський психолог аддиктолог, військовий психолог</h1>
      <p className={styles.contactsSubTitle}>Практикуючий психолог – аддиктолог.Досвід роботи 8.5 років.Магістр психології.</p>
        </div>
       
        </>
    )
};

export default Contacts;