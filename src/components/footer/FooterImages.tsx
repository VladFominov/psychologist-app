
import Image from "next/image";

type FooterImagesProps ={
    footerSliders: { url: string }[];
};

const FooterImages = ({ footerSliders }: FooterImagesProps ) => {
  return (
    <ul className="relative w-36 h-20 lg:flex lg:w-110 xl:w-120 lg:h-40 lg:flex-nowrap lg:gap-3">
      {footerSliders.map((item, i) => {
        return (
          <li
            key={i}
            className="w-full h-full bg-no-repeat bg-cover bg-center mt-1 rounded-sm "
            style={{ backgroundImage: `url(${item.url})`}}
          />
        );
      })}
      
    </ul>
  );
};

export default FooterImages;
