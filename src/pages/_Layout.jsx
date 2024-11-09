import React from 'react'
import SidebarWithContentSeparator from "../components/JeepLogs.jsx";
import {ComplexNavbar} from "../components/Navbar.jsx";

import {Outlet} from "react-router-dom";

function _Layout() {
  return (
      <div className=" h-[100dvh]  w-full flex flex-row">
        
        <div className="w-full flex flex-col  ">

          <div className="   flex flex-col h-full  w-full ">
            <ComplexNavbar/>

                   <Outlet/>

          </div>

        </div>

      </div>
  )
}

export default _Layout