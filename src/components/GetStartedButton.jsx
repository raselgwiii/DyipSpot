import React from 'react'

export default function GetStartedButton() {
  return (
    <div
    className=" max-w-sm  bg-gradient-to-tb  from-blue-900 to-gray-800 flex flex-col rounded-2xl ">
        
    <div className="flex gap-2.5 ">
        <a href="#" style={{
            background: 'linear-gradient(0deg, #48B2FC, #3297FF, #1C7FFF)',
        }}
           className="flex items-center justify-between rounded-md py-1.5 px-[1.5rem]  shadow-md bg-[#3083FF]">
  <span className="h-10 ">
   
  </span>
            <div className=" ml-2 flex flex-col">
             
                <span className="text-white PlusJakartaSans-Bold leading-4"> Get Started</span>
            </div>
        </a>

    </div>
</div>
  )
}
