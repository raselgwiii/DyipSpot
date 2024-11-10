import React from 'react';
import SettingsCard from '../components/SettingsCard'
import NotAvailableCard from '../components/NotAvailableCard.jsx';
import ApplyCard from '../components/ApplyCard'
import GeneralCard from '../components/GeneralCard.jsx'
import AllowBackGroundTasking from "../components/SettingsComponent/AllowBackGroundTasking.jsx";

function Settings(props) {
    return (
        <div className="px-10 py-10 h-full flex  flex-col  w-full">

            <div className="w-full flex flex-row  gap-2">

                <div className="pb-5  ">
                    <div className="PlusJakartaSans-Bold   pb-5 text-[1.5rem] text-[rgb(60,60,60)] text-left">
                        Settings
                    </div>
                    <SettingsCard/>
                </div>
                <div className="flex flex-col    ">

                    <AllowBackGroundTasking/>


                    <ApplyCard/>
                    <GeneralCard/>
                </div>
            </div>
        </div>
    );
}

export default Settings;