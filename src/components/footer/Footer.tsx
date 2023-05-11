import React, { FC } from "react";
import { SiWhatsapp, SiTelegram, SiViber } from "react-icons/si";
import styles from "./footer.module.scss";

const Footer: FC = () => {
  return (
    <div >
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContactsWrap}>
          <p>Записатися на консультацію</p>
          <address className={styles.footerIconsWrap}>
            <div className={styles.iconsDiv}>
              <SiViber className={styles.iconViber} />
              <a className={styles.contactsLink} href="tel:380990569788">
                +38 (099) 056-97-88
              </a>
            </div>
            <div className={styles.iconsDiv}>
              <SiTelegram className={styles.iconTelegram} />
              <a className={styles.contactsLink} href="tel:+380969461226">
                +38 (099) 056-97-88
              </a>
            </div>
            <div className={styles.iconsDiv}>
              <SiWhatsapp className={styles.iconWhatsApp} />
              <a className={styles.contactsLink} href="tel:+380969461226">
                +38 (099) 056-97-88
              </a>
            </div>
          </address>
          </div>
          
        </div>
      </footer>
    </div>
  );
};

export default Footer;
