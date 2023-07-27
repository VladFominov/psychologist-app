import React, { FC } from "react";
import { SiWhatsapp, SiTelegram, SiViber } from "react-icons/si";
import styles from "./footer.module.scss";

const Footer: FC = () => {
  return (
    <div >
      <footer className="px-3 bg-slate-200  rounded-t-lg">
        <div className="">
        <p className="">Записатися на консультацію</p>
      
          
          <address className="m-0">

            <div className={styles.iconsDiv}>
              <SiViber className="fill-blue-500" />
              <a className={styles.contactsLink} href="tel:380990569788">
                +38 (099) 056-97-88
              </a>
            </div>
            <div className={styles.iconsDiv}>
              <SiTelegram className="text-blue-400 fill-current " />
              <a className={styles.contactsLink} href="tel:+380969461226">
                +38 (099) 056-97-88
              </a>
            </div>
            <div className={styles.iconsDiv}>
              <SiWhatsapp className="text-green-400 fill-current" />
              <a className={styles.contactsLink} href="tel:+380969461226">
                +38 (099) 056-97-88
              </a>
            </div>
          </address>
          </div>

      </footer>
    </div>
  );
};

export default Footer;
