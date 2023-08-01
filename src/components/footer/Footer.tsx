import React, { FC } from "react";
import { SiWhatsapp, SiTelegram, SiViber } from "react-icons/si";

import FooterImages from "./FooterImages"

const sliders = [
  {url:'/images/NPAU.jpg'},
  {url:'/images/ZSU.jpg'},
  {url:'/images/who.jpg'}
]

const Footer: FC = () => {
  return (
    <div>
      <footer className=" flex h-64 px-3 bg-slate-200  rounded-t-lg">
        <div className="">
          <p className="">Записатися на консультацію</p>

          <address className="">
            <div className="mt-4">
              <SiViber className="fill-blue-500" />
              <a className="mt-6" href="tel:380990569788">
                +38 (099) 056-97-88
              </a>
            </div>
            <div className="mt-3">
              <SiTelegram className="text-blue-400 fill-current " />
              <a className="" href="tel:+380969461226">
                +38 (099) 056-97-88
              </a>
            </div>
            <div className="mt-3">
              <SiWhatsapp className="text-green-400 fill-current" />
              <a className="" href="tel:+380969461226">
                +38 (099) 056-97-88
              </a>
            </div>
          </address>
        </div>
        <div className="relative mx-auto ">
          <FooterImages footerSliders={sliders} />
          
        </div>
      </footer>
    </div>
  );
};

export default Footer;
