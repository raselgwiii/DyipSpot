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
      <Card  className="w-96 bg-gradient-to-t from-blue-700 to-blue-400">
        <CardBody>
          <Typography
            variant="large"
            color="black"
            className="PlusJakartaSans-Medium opacity-90 text-white"
          >
            Start your journey now by becoming a driver who can monitor your jeep’s real-time location at all times
          </Typography>
        </CardBody>
        <CardFooter variant="large" className="pt-0">
        <span className="text-center" ><ApplyModal/></span>
        </CardFooter>
      </Card>
    );
  }