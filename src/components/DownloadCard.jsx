import React from 'react';
import PlaystoreIcon from "../assets/playstoreIcon.png"

const DownloadCard = () => {
    return (
        <div
            className=" max-w-sm  bg-gradient-to-tb  from-blue-900 to-gray-800 flex flex-col rounded-2xl ">
                
            <div className="flex gap-2.5 ">
                <a href="#"
                   className="flex items-center justify-between rounded-md py-1.5 px-2.5  shadow-md bg-[#3083FF]">
          <span className="h-10 w-10">
            <img alt={""} src={PlaystoreIcon}/>
          </span>
                    <div className="ml-2 flex flex-col">
                        <span className="text-[12px] font-semibold  leading-3 text-white">Get app on</span>
                        <span className="text-white PlusJakartaSans-Bold leading-4">Google Play</span>
                    </div>
                </a>

            </div>
        </div>
    );
};

export default DownloadCard;
