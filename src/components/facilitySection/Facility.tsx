import React, { FC } from "react";
import FetchCard from "../butstrapCard/Card";

import styles from "./facility.module.scss";

const Facility: FC = () => {
  return (
    <section className="">
      <div className="container md:flex md:flex-col">
        <h2 className={`mt-2 ${styles.facilityTitle}`}>
          <span className="text-white lg:text-3xl">
            Працюю з такими видами нервових проблем:
          </span>
        </h2>
        <div className="md:grid grid-cols-2 gap-x-5 lg:grid-cols-3 xl:gap-x-3">
          <FetchCard />
        </div>
      </div>
    </section>
  );
};

export default Facility;
