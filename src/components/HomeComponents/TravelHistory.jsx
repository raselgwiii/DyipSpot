import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
  } from "@material-tailwind/react";
  import { HomeIcon, BellIcon, CurrencyDollarIcon ,MapPinIcon} from "@heroicons/react/24/solid";
  import Dates from '/src/components/HomeComponents/Dates.jsx'
  export function TravelHistory() {
    return (

      <div className="h-full w-full   pr-2 ">

     <div className="w-full flex h-full   ">
        
        <Timeline className="shadow-none">
        {Array.from({ length: 4 }).map((_, index) => (
  <TimelineItem key={index} className="gap-0">
    {index < 3 && <TimelineConnector/>}
    <TimelineHeader>
      
      <TimelineIcon className="p-2 bg-[#3083FF]">
        <MapPinIcon className="h-4 w-4" /> 
      </TimelineIcon>
              <Typography color="gray" className="font-normal PlusJakartaSans-Bold text-gray-600">
                9:00 pm
              </Typography> 
    </TimelineHeader>
    <TimelineBody className={"shadow-none pb-5"}>
 
              <Typography color="gray" className="font-normal PlusJakartaSans-Medium text-gray-600">
        Cabulanglangan, Tagudin, Ilocos Sur
      </Typography>
    </TimelineBody>
  </TimelineItem>
))}          
        </Timeline>
      </div>
     </div>
    );
  }