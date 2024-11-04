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
   
  export function TravelHistory() {
    return (
     <div className="h-full overflow-auto pr-2 ">
     
     <div className="w-full flex h-full   ">
        
        <Timeline className="">
        {Array.from({ length: 4 }).map((_, index) => (
  <TimelineItem key={index} className="gap-0">
    {index < 3 && <TimelineConnector/>}
    <TimelineHeader>
      <TimelineIcon className="p-2 bg-[#3083FF]">
        <MapPinIcon className="h-4 w-4" />
      </TimelineIcon>
      <Typography color="gray" className="font-normal text-gray-600">
        9:00 pm
      </Typography> 
    </TimelineHeader>
    <TimelineBody>
      <Typography color="gray" className="font-normal text-gray-600">
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