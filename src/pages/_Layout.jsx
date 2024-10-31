import React from 'react'
import SidebarWithContentSeparator from "../components/Sidebar.jsx";
import {ComplexNavbar} from "../components/Navbar.jsx";
import Map, {Marker} from "react-map-gl";
import pin from "../assets/pin3.png";
import Track from "./Track.jsx";
import Home from "./Home.jsx";
import {Outlet} from "react-router-dom";

function _Layout() {
  return (
      <div className="h-screen flex flex-row">
        <SidebarWithContentSeparator/>
        <div className="w-full  flex flex-col relative h-full">

          <div className="absolute   overflow-hidden h-full  w-full">
            <ComplexNavbar/>

            <div>

<Outlet/>

            </div>


          </div>

        </div>

      </div>
  )
}

export default _Layout