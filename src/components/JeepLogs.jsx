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

export default function JeepLogs() {
  const [open, setOpen] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 1.5; // Adjust scroll speed here
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  return (
    <Card className="overflow-hidden rounded-none h-full gap-1 flex w-full max-w-[20rem] pl-4 shadow-xl shadow-blue-gray-900/5">
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
