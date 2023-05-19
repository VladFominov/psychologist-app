import React, { FC } from 'react'
import FetchCard from '../butstrapCard/Card'

import styles from "./facility.module.scss";

const Facility: FC = () => {
  return (
    <section>
      <div className={styles.container}>
      <h2 className={styles.facilityTitle}>Працюю з такими видами психологічних проблем:</h2>
      <div className={styles.FetchCardWrap}>
      <FetchCard />
      </div>
        
      </div>        
    </section>
  )
}

export default Facility