import React from "react";
import SpotlightCard from "./SpotlightCard";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";

const arr = [
  {
    id: 1,
    name: "Las Vegas Aviators",
    img: "Ticket_Mockup 3.png",
    address: "Las Vegas Ballpark, Las Vegas, Nevada",
    btn: "Take Flight Collection",
  },
  {
    id: 2,
    name: "Sacramento River Cats",
    img: "unnamed 1.png",
    address: "Sutter Health Park, Sacramento, California",
    btn: "Orange Collection",
  },
  {
    id: 3,
    name: "Las Vegas Aviators",
    img: "Ticket_Mockup 3.png",
    address: "Las Vegas Ballpark, Las Vegas, Nevada",
    btn: "Take Flight Collection",
  },
];
export const Collection = () => {
  return (
    <div className="w-screen md:flex items-center justify-center">
      <div className="w-screen mb-8 rounded-md h-auto md:w-[1240px] md:h-[918px] bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF] p-9 flex flex-col items-center justify-center dark:bg-gradient-to-b dark:from-[#18282A] dark:to-[#221A2C]">
        <div className="w-full flex items-center flex-col justify-center gap-8">
          <div className="font-poooins font-bold text-[#000000] text-[50px] dark:text-white">
            Collection Spotlight
          </div>
          <div className="w-full md:w-[917px] font-normal text-[14px] text[#000000] text-center dark:text-white">
            Discover extraordinary moments with our Spotlight Collection
            metatickets—exclusive access to premium events for an unforgettable
            experience. Grab yours today!
          </div>
          <div className="w-full flex items-center justify-center gap-8 relative">
            <div className="left-8 absolute">
                <div className= " hidden w-9 h-[49px] border-solid border-[#2C9CF0] border-[1px] md:flex items-center justify-center ">
                <IoIosArrowBack className="text-[#2C9CF0] text-base" />
                </div>
            </div>
            <div className="md:flex gap-7">
              {arr?.map((e) => (
                <SpotlightCard  key={e.id} deta={e} />
              ))}
            </div>
            <div className="absolute right-8">
                <div className="w-9 h-[49px] border-solid border-[#2C9CF0] border-[1px] hidden md:flex items-center justify-center">
                <IoIosArrowForward className="text-[#2C9CF0] text-base" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
