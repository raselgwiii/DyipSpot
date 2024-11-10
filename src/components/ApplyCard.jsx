import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import ApplyModal from "./ApplyModal";

  export default function ApplyCard() {
    return (
      <Card  className="w-full flex flex-col bg-gradient-to-t from-blue-700 to-blue-400 p-5">
        <div className=" px-5">
          <Typography
            variant="large"
            color="black"
            className="PlusJakartaSans-Medium opacity-90 text-white"
          >
            Start your journey now by becoming a driver who can monitor your jeep’s real-time location at all times
          </Typography>
        </div>
        <div  className="h-full w-full   flex place-items-center justify-end  ">
  <ApplyModal/>
        </div>
      </Card>
    );
  }