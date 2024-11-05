import React from 'react';
import {Avatar, Button, Card, CardBody, CardHeader, Drawer, IconButton, Typography} from "@material-tailwind/react";
import Jeep from "../../assets/jeep.png"
import useScroll from "../../CustomHooks/useScroll.jsx";
import cross from "../../assets/cross.png"
import useFetchJeeps from "../../CustomHooks/useFetchJeeps.js";

function RenderJeeps(props) {
    const {isDragging, handleMouseDown, handleMouseUp, handleMouseMove} = useScroll();

    const {LocationData, loading, error, setrefresh, refresh} = useFetchJeeps()
    const [openBottom, setOpenBottom] = React.useState(false);

    const openDrawerBottom = () => setOpenBottom(true);
    const closeDrawerBottom = () => setOpenBottom(false);
    console.log(LocationData)
    return (
        <div className="flex   overflow-x-hidden gap-5 px-10 place-items-center no-scrollbar  "
             style={{cursor: isDragging ? 'grabbing' : 'grab'}}
             onMouseDown={handleMouseDown}
             onMouseUp={handleMouseUp}
             onMouseMove={handleMouseMove}
             onMouseLeave={handleMouseUp}
        >

            {LocationData.map((jeep, index, array) => {
                const statusColor = jeep?.status === "online" ? "bg-[#f0f9f0] text-[#34C759]" : jeep?.status === "waiting" ? "bg-[#fff3c6] text-[#FFCC00]" : "bg-[#ffbaba] text-[#FF3B30]"
                return (

                    <Card color="white" key={jeep?.id} shadow={false} className="  h-auto flex flex-row ">

                        <div className=" h-[140px]  w-[200px] p-4   flex">
                            <img alt={"jeep"} draggable={false} style={{userSelect: 'none'}} src={jeep?.imageUrl}
                                 className="object-cover rounded-lg"
                            />
                        </div>

                        <div className="w-full flex-col  justify-center flex p-4">

                            <Typography className="font-bold leading-4  capitalize" style={{userSelect: 'none'}}>
                                {jeep?.name}

                            </Typography>
                            <Typography   className=" whitespace-nowrap   leading-4 text-[14px] font-thin pb-2" style={{userSelect: 'none'}}>
                                {jeep?.address?.length > 25 ? jeep.address.slice(0, 25) + "..." : jeep?.address}
                            </Typography>
                            <div>

                                <div className="place-items-start ">
                                    <Typography style={{userSelect: 'none'}}
                                                className={` py-1 px-3 rounded-lg ${statusColor}`}>
                                        {jeep?.status}
                                    </Typography>
                                </div>

                                <div>


                                </div>
                            </div>
                            <div className="absolute bottom-4 right-4 " onClick={openDrawerBottom}>
                                <img src={cross} className="w-7 h-7"/>
                            </div>
                        </div>


                    </Card>

                )
            })

            }
            <Drawer
                placement="bottom"
                open={openBottom}
                overlay={false}
                className="p-4 bg-[#fff]"
            >
                <div className="mb-6 flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                        Material Tailwind
                    </Typography>
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        onClick={closeDrawerBottom}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>
                <Typography color="gray" className="mb-8 pr-4 font-normal">
                    Material Tailwind features multiple React and HTML components, all
                    written with Tailwind CSS classes and Material Design guidelines.
                </Typography>
                <div className="flex gap-2">
                    <Button size="sm" variant="outlined">
                        Documentation
                    </Button>
                    <Button size="sm">Get Started</Button>
                </div>
            </Drawer>
        </div>
    );
}

export default RenderJeeps;
