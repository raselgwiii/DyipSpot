import React from 'react';
import {CardBody, Switch, Typography} from "@material-tailwind/react";

import NotAvailableCard from "../NotAvailableCard.jsx";

function AllowBackGroundTasking(props) {
    return (
        <div>
            <div className="mb-6  max-w-[46rem] p-0 ">
            <Typography variant="h5" color="blue-gray" className="PlusJakartaSans-Bold"> Personalization </Typography>
            <div className="flex flex-row g" >
                <NotAvailableCard>
                    <Typography className=" text-balance PlusJakartaSans-Medium">
                        Enable background location tracking for real-time updates, even when the app is in background.For
                        drivers,this is required to ensure accurate tracking at all times.
                    </Typography>
                    <Switch color={"blue"} />
                </NotAvailableCard>


            </div>
        </div></div>
    );
}

export default AllowBackGroundTasking;