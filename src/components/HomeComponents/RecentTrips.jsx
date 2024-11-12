import { List, ListItem, Card, Typography } from "@material-tailwind/react";
 
export default function RecentTrips() {
  return (
<div className=" w-full  flex flex-col  ">
{
      Array.from({length:5}).map(() =>{

    return (
      <div className=" justify-evenly h-full    w-full flex-1 flex flex-row gap-10 border-b-4 pb-3">
        <div className=" ">
          <Typography color="gray" className="PlusJakartaSans-Medium">Nov. 11, 2024</Typography>
          <Typography className="PlusJakartaSans-Medium text-sm">10:20 AM</Typography>
        </div>
        <div className=" ">
          <Typography color="blue" className="PlusJakartaSans-Medium">Alilem, Ilocos, Sur</Typography>
          <Typography className="PlusJakartaSans-Medium">Start Point</Typography>

          <Typography color="blue" className="PlusJakartaSans-Medium">Tagudin, Ilocos, Sur</Typography>
          <Typography className="PlusJakartaSans-Medium">End Point</Typography>
        </div>
      </div>
      )
  })
}
</div>
  
  )}