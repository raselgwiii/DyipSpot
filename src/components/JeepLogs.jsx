import React from "react";
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
  Button,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { TravelHistory } from "./HomeComponents/TravelHistory";
import useScroll from "../CustomHooks/useScroll.jsx";

export default function JeepLogs({isActive}) {
  const { isDragging, handleMouseDown, handleMouseUp, handleMouseMove } = useScroll();


  return (
    <Card className={`overflow-hidden shadow-none  select-none rounded-none h-full gap-1 flex w-full  pl-4  ${isActive ? "opacity-100" : " opacity-70"}`}>
      <div
        className="p-3 flex w-full gap-2 h-auto overflow-x-hidden no-scrollbar"
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <button className="whitespace-nowrap  shadow-md py-2 px-4 rounded-full text-white bg-[#3083FF]">
          Daily Passengers
        </button>
        <button className="whitespace-nowrap shadow-md py-2 px-4 rounded-full bg-white">
          Travel History
        </button>
        <button className="whitespace-nowrap shadow-md py-2 px-4 rounded-full bg-white">
          Recent Trips
        </button>
      </div>

      <div className="h-full flex">
        <TravelHistory />
      </div>
    </Card>
  );
}
