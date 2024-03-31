import React from "react";
import Image from "next/image";


interface Scardprops {
  deta:{
    img:string;
    name:string;
    address:string;
    btn:string;
  }
}
const SpotlightCard :React.FC<Scardprops>= ({deta}) => {
  return (
    <div className=" mt-6 md:mt-0 md:w-64 h-auto bg-[#FFFFFF] drop-shadow-3xl pb-4 dark:bg-[#3B3E47]">
      <div className="w-full flex items-center justify-center">
        <Image src={`/${deta?.img}`} width="236" height="401" alt="Img" />
      </div>
      <div className="w-full flex items-center justify-center relative">
        <Image src="/Line 105.png" alt="Img" width={211} height={3} />
        <div className="w-5 h-5 bg-gradient-to-r from-[#F9F8FF] to-[#F3F9FF] rounded-[100%] absolute right-[-10px] dark:bg-gradient-to-b dark:from-[#18282A] dark:to-[#221A2C]"></div>
        <div className="w-5 h-5 bg-gradient-to-r from-[#F9F8FF] to-[#F3F9FF] rounded-[100%] absolute left-[-10px] dark:bg-gradient-to-b dark:from-[#18282A] dark:to-[#221A2C]"></div>
      </div>
      <div className="w-full text-center flex flex-col items-center justify-center gap-4 mt-4">
        <div className="font-poppins font-medium text-black text-[17px] dark:text-white">{deta?.name}</div>
        <div className="font-poppins font-normal text-black text-[14px] dark:text-white">OCT 15 | SUN | 4:30PM</div>
        <div className="font-poppins font-normal text-[#525965] text-[14px] dark:text-[#DFDFDF]">{deta?.address}</div>
        <div className="font-poppins font-medium text-white text-[12px] bg-[#1D1D1F] w-[213px] h-9 flex items-center justify-center hover:bg-white hover:text-black cursor-pointer">{deta?.btn}</div>
      </div>
    </div>
  );
};

export default SpotlightCard;
