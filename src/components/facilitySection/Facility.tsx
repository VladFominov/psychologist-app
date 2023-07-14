import React, { FC } from 'react'
import FetchCard from '../butstrapCard/Card'

import styles from "./facility.module.scss";

const Facility: FC = () => {
  return (
    <section>
      <div className="md:flex md:flex-col">
      <h2 className={styles.facilityTitle}>Працюю з такими видами психологічних проблем:</h2>
      <div className="px-3 md:grid grid-cols-2 gap-4 xl:grid-cols-3 xl:gap-10">
      <FetchCard />
      </div>
        
      </div>        
    </section>
  )
}

export default Facility