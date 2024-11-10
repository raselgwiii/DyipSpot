import React from 'react';
import {CardBody, Switch, Tooltip, Typography} from "@material-tailwind/react";

import NotAvailableCard from "../NotAvailableCard.jsx";

function AllowBackGroundTasking(props) {
    return (
        <div>
            <div className="  w   p-0 ">
            <Typography variant="h5" color="blue-gray" className="PlusJakartaSans-Bold"> Personalization </Typography>
            <div className="flex flex-row pt-2" >
                <NotAvailableCard>
                    <Typography className=" text-balance PlusJakartaSans-Medium">
                        Enable background location tracking for real-time updates, even when the app is in background.For
                        drivers,this is required to ensure accurate tracking at all times.
                    </Typography>

                    <Tooltip content="Unavailable"  className={"bg-orange-100 text-orange-700 "}>
                        <Switch color={"blue"}   checked={false}  circleProps={{
                            className: "bg-[#3083FF]",
                        }}  />
                    </Tooltip>
                </NotAvailableCard>


            </div>
        </div></div>
    );
}

export default AllowBackGroundTasking;