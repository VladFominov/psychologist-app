import React, { FC } from "react";
import { SiWhatsapp, SiTelegram, SiViber } from "react-icons/si";

import FooterImages from "./FooterImages";

const sliders = [
  { url: "/images/NPAU.jpg" },
  { url: "/images/ZSU.jpg" },
  { url: "/images/who.jpg" },
];
//  { url: "/psychologist-app/images/NPAU.jpg" },
const Footer: FC = () => {
  return (
    //
    <footer className="min-h-[17rem] bg-slate-200  rounded-t-lg">
      <div className="container flex justify-between  ">
        <div className="">
          <p className="mt-4 lg:text-xl lg:mt-4">Записатися на консультацію:</p>

          <address className="">
            <div className="mt-4">
              <SiViber className="fill-blue-500" />
              <a className="mt-6 lg:text-xl" href="tel:380990569788">
                +38 (099) 056-97-88
              </a>
            </div>
            <div className="mt-3">
              <SiTelegram className="text-blue-400 fill-current " />
              <a className="lg:text-xl" href="tel:+380969461226">
                +38 (099) 056-97-88
              </a>
            </div>
            <div className="mt-3">
              <SiWhatsapp className="text-green-400 fill-current" />
              <a className="lg:text-xl" href="tel:+380969461226">
                +38 (099) 056-97-88
              </a>
            </div>
          </address>
        </div>
        <div className=" lg:my-auto	">
          <FooterImages footerSliders={sliders} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
