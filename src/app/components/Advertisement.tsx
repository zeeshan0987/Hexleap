import React from "react";
import Image from "next/image";

interface AdvertisementProps {
  AdvertisementTitle: string;
  Des: string;
  im: string;
}

const Advertisement = ({AdvertisementTitle,Des,im}) => {

  return (
    <div className="w-[237px] h-[511px] p-3 shadow-md bg-white flex flex-col gap-4 dark:bg-[#3B3E47]">
      <div className="relative">

        <Image src={im} width='217' height='218' alt="Img"/>
        <div className="w-[47px] h-[25px] bg-black text-white flex items-center justify-center absolute right-0 top-0">Ad</div>
      </div>
      <div className="w-full text-center text-xl font-semibold text-black dark:text-white">
        {AdvertisementTitle}
      </div>
      <div className="text-[#525965] text-xs font-normal px-3 dark:text-[#DFDFDF]">
        {Des}
      </div>
    </div>
  );
};

export default Advertisement;
