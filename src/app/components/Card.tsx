import React from 'react'
import Image from 'next/image'



interface CardProps {
  deta: {
    // id: number;
    name: string;
    events:string;
    sport:string;
    img:string;
  };

}

const Card : React.FC<CardProps> =  ({deta}) => {
  return (
    <div className='w-auto h-auto md:w-[237px] md:h-[511px] p-3 shadow-md bg-white flex flex-col gap-4 dark:bg-[#3B3E47]'>
      
      <Image src={`/${deta.img}`} width='218' height='385' alt='Img'/>
      <div className='w-full font-medium text-[17px] dark:text-[#FFFFFF]'>
      {deta.name}
      
      </div>
      <div  className='w-full rounded-sm  h-14 bg-[#F7F7F8] flex justify-start gap-8 px-2 items-center dark:bg-[#292B32]'>
        <div>
            <p className='text-xs font-normal text-[#525965] dark:text-[#DFDFDF]'>Total Events</p>
            <p className='text-[14px] font-medium text-black dark:text-[#FFFFFF]'>{deta.events} Events</p>
        </div>
        <div>
            <p className='text-xs font-normal text-[#525965] dark:text-[#DFDFDF]'>Sport</p>
            <p className='text-[14px] font-medium text-black dark:text-[#FFFFFF]'>{deta.sport}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
