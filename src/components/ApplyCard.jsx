import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
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
        <Button
        ripple={false}
        fullWidth={true}
        className="PlusJakartaSans-Bold bg-white text-blue-500 shadow-md hover:scale-105 hover:shadow-md focus:scale-50 focus:shadow-none active:scale-50 flex items-center justify-center"
        >
        <span className="text-center">Apply Now!</span>
        <img src="/src/assets/jeep.png" alt="Jeep icon"  className="w-8 h-50 mr-2"/>
        </Button>

        </CardFooter>
      </Card>
    );
  }