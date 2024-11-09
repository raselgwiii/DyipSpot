import React from 'react';
import SettingsCard from '../components/SettingsCard'
import NotAvailableCard from '../components/NotAvailableCard.jsx';
import ApplyCard from '../components/ApplyCard'
import GeneralCard from '../components/GeneralCard.jsx'
function Settings(props) {
    return (
        <div className="em">
        <div className="PlusJakartaSans-Bold text-[2.5rem] text-[rgb(60,60,60)] text-left">
            Settings
        </div>
        <div className="place-items-center">
        <SettingsCard/>
        <NotAvailableCard/>
        <ApplyCard/>
        <GeneralCard/>
        </div>
        </div>
    );
}

export default Settings;