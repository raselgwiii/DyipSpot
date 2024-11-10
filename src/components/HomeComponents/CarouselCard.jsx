import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
  
  export default function CarouselCard() {
    return (
      <Card color="transparent" shadow={false} className="w-full max-w-[26rem] bg-gradient-to-t from-blue-800 to-blue-500">
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-0 flex items-center gap-4 pt-0 pb-8"
        >
    
          <Avatar
          size="lg"
          variant="rounded"
            src="/src/assets/defaultuser.png"
            alt="avatar"
            withBorder={true}
            color="white"
            className="ml-5"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between PlusJakartaSans-Bold">
              <Typography variant="h5" color="white">
                Guillermo Sabado
              </Typography>
            </div>
            <Typography color="white" className="PlusJakartaSans-Medium">Jeepney Driver</Typography>
            
            <Typography color="white" className="PlusJakartaSans-Medium">For Hire</Typography>
          </div>
        </CardHeader>
        <CardBody className="mb-6 p-0 text-balance ml-5 text-white">
          <div className="flex flex-row gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>
            <Typography>Amilongan, Alilem, Ilocos Sur</Typography></div>
            <div className="flex flex-row gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            <Typography>09******</Typography></div>
            <div className="flex flex-row gap-3">
          
            <Typography>SABADO</Typography></div>
         
        </CardBody>
      </Card>
    );
  }