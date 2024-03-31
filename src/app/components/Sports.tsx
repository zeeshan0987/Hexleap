import React from "react";
import Card from "./Card";
import Advertisement from "./Advertisement";
const arr = [
  {
    id: 1,
    name: "Sacramento River Cats",
    events: "48",
    sport: "Baseball",
    img: "Mask group.png",
  },
  {
    id: 2,
    name: "Las Vegas Aviators",
    events: "28",
    sport: "Baseball",
    img: "Mask group (1).png",
  },
  {
    id: 3,
    name: "Sacramento River Cats",
    events: "15",
    sport: "Ice Hockey",
    img: "Mask group (2).png",
  },
  {
    id: 4,
    name: "Las Vegas Aviators",
    events: "28",
    sport: "Baseball",
    img: "Mask group (1).png",
  },
];

const AdvertisementDeta = {
  img: "/unnamed (1) 1.png",
  AdvertisementTitle: "Advertisement title",
  Des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};
const Sports = () => {
  return (
    <div className="md:w-screen h-auto flex items-center justify-center py-3">
      <div className="w-full md:w-[1249px] h-auto flex flex-col gap-6">
        <div className="w-[80.52px] h-10 border-b-2 border-[#738FFF] font-poppins text-2xl font-bold cursor-pointer mt-6 dark:text-white">
          Sports
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-center md:flex-row gap-3 md:flex-wrap">
          {arr?.map((e) => (
            <Card key={e.id} deta={e} />
          ))}
          <Advertisement img={AdvertisementDeta.img} AdvertisementTitle={AdvertisementDeta.AdvertisementTitle} Des={AdvertisementDeta.Des}/>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-[124px] h-[46px] rounded-[3px] bg-[#2C9CF0] flex items-center justify-center font-semibold text-[14px] text-white hover:bg-slate-800">
            See More
          </div>

        </div>
      </div>
    </div>
  );
};

export default Sports;
