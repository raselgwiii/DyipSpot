import React from "react";
import { Avatar } from "@material-tailwind/react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
 
export default function ApplyModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
 
  return (
    <>
      <Button onClick={handleOpen}
        ripple={false}

        className="PlusJakartaSans-Bold whitespace-nowrap px-20 overflow-hidden rounded-full relative shadow-2xl  bg-white text-blue-500 shadow-md hover:scale-105 hover:shadow-md focus:scale-50 focus:shadow-none active:scale-50 flex items-center justify-center"
        >Apply Now!
        <img src="/src/assets/dyipcropted.png" alt="Jeep icon"  className="h-full -right-3 mr-2 absolute"/>
        </Button>


      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <div className="place-items-center">
            <Avatar
            size="lg"
            alt="avatar"
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            className="border border-blue-500 shadow-xl shadow-green-900/20 ring-4 ring-blue-500/30 "
            />
            </div>
            <Typography className="-mb-2" variant="h6">
              First name
            </Typography>
            <Input label="First name" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Last name
            </Typography>
            <Input label="Last name" size="lg" />
            <div className="-ml-2.5 -mt-3">
            </div>
            <Typography className="-mb-2" variant="h6">
              Address
            </Typography>
            <Input label="Address" size="lg" />
            <div className="-ml-2.5 -mt-3">
            </div>
            <Typography className="-mb-2" variant="h6">
              Phone number
            </Typography>
            <Input label="Phone number" size="lg" />
            <div className="-ml-2.5 -mt-3">
            </div>
            <Typography className="-mb-2" variant="h6">
              Jeep name
            </Typography>
            <Input label="Jeep name" size="lg" />
            <div className="-ml-2.5 -mt-3">
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              Send Request
            </Button>
            <Typography variant="small" className="mt-4 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                onClick={handleOpen}
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}