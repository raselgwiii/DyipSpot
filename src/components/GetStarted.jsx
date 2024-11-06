import React from 'react'
import Passengericon from "../assets/passenger.png"
import Arrivaltime from "../assets/arrivaltime.png"
import speedIcon from "../assets/speed.png"
import Jeep from "../assets/dyipcropted.png"
import "../assets/fonts/PlusJakartaSans-Bold.ttf";
import DownloadCard from "./DownloadCard.jsx";
import {addDoc, collection,doc, setDoc} from "firebase/firestore";
import {auth, googleprovider, facebookprovider,} from "../api/firebase-config"
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
function GetStarted() {

    const ContinueWithGoogle = async () => {

        try {
            const account = await signInWithPopup(auth, googleprovider)

            console.log(account)
            // cookies.set("authentication-token", account.user.refreshToken)
            // cookies.set("uid", account.user.uid)
            // localStorage.setItem("profilepicture", auth?.currentUser?.photoURL)
            // localStorage.setItem("name", auth?.currentUser?.displayName)
            // setAuth(true)
            // await setDoc(doc(database, "users", account.user.uid), {
            //     name: auth?.currentUser?.displayName,
            //     uid: account.user.uid,
            //     profilepicture: auth?.currentUser?.photoURL,
            //     status: true
            // });

        } catch (err) {
            console.log(err)

        }
    }
    return (
        <div className="w-full flex-row  overflow-hidden flex h-screen ">
            <div className=" w-full flex   justify-end pb-12 flex-col h-full  ">
                <div className="pl-10 justify-start ">


                    <h2 className="PlusJakartaSans-Bold text-[3.5rem] text-[rgb(60,60,60)]">Welcome to <span
                        className="text-[#3083FF]">DyipSpot</span></h2>
                    <p className="PlusJakartaSans-Medium text-[rgba(60,60,60,0.78)] "> Track Your Jeepneys in Real-Time,
                        See Passenger Counts, and Get Instant Vehicle Updates.
                    </p>
                    <button onClick={ContinueWithGoogle}
                        className="px-10 mt-3 py-3  text-white bg-[#3083FF] shadow-md rounded-full PlusJakartaSans-Medium ">

                        Get Started
                    </button>
                    <DownloadCard/>
                </div>

            </div>


            <div className=" w-full h-full   relative flex  flex-col ">

                <div className="w-full  h-full relative ">

                    <img src={speedIcon} className="absolute object-cover bottom-10 right-10  w-[13rem]  " alt=""/>
                    <img src={Arrivaltime} className="absolute  object-cover left-20 bottom-0   w-[13rem]  " alt=""/>
                    <img src={Passengericon} className="absolute  object-cover left-[30%] w-[17rem] top-20     "
                         alt=""/>

                </div>

                <div className="w-full  h-full">

                    <img src={Jeep} className="absolute right-[-9rem] object-cover bottom-0   " alt=""/>

                </div>
            </div>


        </div>

    )
}

export default GetStarted