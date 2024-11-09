import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
 } from '@material-tailwind/react';
export default function GeneralCard() {
  return (
    <Card color="transparent" shadow={false} className="w-full max-w-[26rem] mt-5">
    <CardBody className="mb-6 p-0 ">
        <Typography variant="h5" color="blue-gray" className="PlusJakartaSans-Bold"> General </Typography>
            <div className="flex flex-row mt-3 ml-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" /></svg>
                <Typography className='text-red-700 place-items-start PlusJakartaSans-Medium'>Log Out</Typography>
            </div>
    </CardBody>
    </Card>
  )
}
