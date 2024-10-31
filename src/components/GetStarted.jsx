import React from 'react'

function GetStarted() {
  return (
    <div className="w-full flex h-screen relative"> 
    <div className=" w-full h-full bg-white">
      <h2>Welcome to <span>DyipSpot</span></h2>
    </div>
    <div className=" w-full h-full bg-blue-gray-50 relative   ">
      <img src="/src/assets/passenger.png" className="absolute h-40 right-0"/>
      <img src="/src/assets/arrivaltime.png" className="absolute h-40 "/>
      <img src="/src/assets/speed.png" className="absolute h-40 right-0 "/>
      <img src="/src/assets/dyip.png" className="absolute h-100 bottom-5"/> 
    </div>
    </div>

  )
}

export default GetStarted