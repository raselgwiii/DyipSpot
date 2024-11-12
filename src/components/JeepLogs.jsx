import React, {useState} from "react";
import Logo from '../assets/SpeedLoc (2).png';
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Button, TabPanel, TabsBody, TabsHeader, Tabs, Tab,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import {ChevronRightIcon, ChevronDownIcon} from "@heroicons/react/24/outline";
import {TravelHistory} from "./HomeComponents/TravelHistory";
import useScroll from "../CustomHooks/useScroll.jsx";
import DailyPassenger from "../components/HomeComponents/DailyPassenger.jsx"
import RecentTrips from "./HomeComponents/RecentTrips.jsx";

export default function JeepLogs({isActive}) {
    const {isDragging, handleMouseDown, handleMouseUp, handleMouseMove} = useScroll();


    const [activeLogsIndex, setActiveLogsIndex] = useState(0)



    function RenderLogs() {
        switch (activeLogsIndex) {
            case  0:
                return <DailyPassenger/>
            case  1:
                return <TravelHistory/>
            case  2:
                return <div><RecentTrips/></div>
        }
    }

    const TabName =
        [{
            id: 0,
            name: "Daily Passengers",


           },
            {
                id: 1,
                name: "Travel History",

            }, {
                id: 2,
                name: "Recent Trips",
            }
]


    const HandleSetActiveLogs = (index) => {
        setActiveLogsIndex(index)

    }

    return (
        <Card
            className={`  shadow-none   select-none rounded-none  gap-1 flex  flex-1 w-full  pl-4  ${isActive ? "opacity-100" : " opacity-70"}`}>
            <div
                className="p-3 flex w-full gap-2 h-auto overflow-x-hidden no-scrollbar "
                style={{cursor: isDragging ? 'grabbing' : 'grab'}}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseUp}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
              {

                TabName.map((item,index)=>{

                  return (

                      <button key={index} onClick={() => {
                        HandleSetActiveLogs(item?.id)
                      }} className={`whitespace-nowrap shadow-md py-2 px-4 rounded-full  ${item?.id === activeLogsIndex && "text-white bg-[#3083FF]"}  "`}>
                        {item?.name}
                      </button>
                  )
                })
              }
            </div>


            <div className="h-full    w-full   flex-1 flex">

                {RenderLogs()}

            </div>
        </Card>
    );
}
