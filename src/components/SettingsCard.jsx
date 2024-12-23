import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";

   
  function StarIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5 text-yellow-700"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
   
  export default function SettingsCard() {
    return (
      <div   className=" flex ">
        <div
          color="transparent"
          className="flex flex-row items-center gap-8"
        >
        <div    >

            <img

                className={"w-[24rem] rounded-full"}
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                alt="tania andrew"
            />
        </div>

          <div className="flex w-full flex-col ">
            <div className="flex w-full">
              <Typography variant="h5" color="black" className="PlusJakartaSans-Bold">
                Russel Gue Caponga
              </Typography>
            </div>
            <Typography variant="large" color="blue-gray" className="PlusJakartaSans-Medium">russeldeguzmangc@gmail.com</Typography>
            
            <Typography variant="large" color="blue-gray" className="PlusJakartaSans-Medium">Passenger</Typography>
          </div>
        </div>
      </div>
    );
  }