import React from 'react';
import PlaystoreIcon from "../assets/playstoreIcon.png"

const DownloadCard = () => {
    return (
        <div
            className="mt-3 shadow-md max-w-sm  bg-gradient-to-tb  from-blue-900 to-gray-800 flex flex-col p-5 rounded-2xl ">

            <span className=" text-[rgb(60,60,60)] font-semibold text-2xl mt-2 mb-2 PlusJakartaSans-Bold">Download our mobile application.</span>
            <span className=" text-[rgba(60,60,60,0.78)]   text-xs mb-2 PlusJakartaSans-Medium">
      Get the DyipSpot mobile app for Android to track jeeps in real time and manage your commute efficiently
      </span>
            <div className="flex gap-2.5 mt-2.5">
                <a href="#"
                   className="flex items-center justify-between rounded-md py-1.5 px-2.5  shadow-md bg-[#3083FF]">
          <span className="h-10 w-10">
            <img alt={""} src={PlaystoreIcon}/>
          </span>
                    <div className="ml-2 flex flex-col">
                        <span className="text-[12px] font-semibold  leading-3 text-white">Get it on</span>
                        <span className="text-white font-extrabold leading-4">Google Play</span>
                    </div>
                </a>

            </div>
        </div>
    );
};

export default DownloadCard;
