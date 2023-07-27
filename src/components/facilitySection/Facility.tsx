import React, { FC } from 'react'
import FetchCard from '../butstrapCard/Card'

import styles from "./facility.module.scss";
// flex justify-center
// grid-cols-3 
const Facility: FC = () => {
  return (
    <section className="">
      <div className=" md:flex md:flex-col">
      <h2 className={`text-white mt-4 ${styles.facilityTitle}`}>Працюю з такими видами психологічних проблем:</h2>
      <div className="px-3 mt-4 md:grid grid-cols-2 gap-x-5 lg:grid-cols-3 xl:gap-x-3">
      <FetchCard />
      </div>
        
      </div>        
    </section>
  )
}

export default Facility