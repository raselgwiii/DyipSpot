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
import GetStartedButton from './GetStartedButton.jsx'
function GetStarted() {

    const ContinueWithGoogle = async () => {

        try {
            const account = await signInWithPopup(auth, googleprovider)
            console.log(account.user.providerData[0].uid)



            
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
            <div className=" w-full flex   justify-center pb-12 flex-col h-full  ">
                <div className="pl-10 justify-start ">


                    <h2 className="PlusJakartaSans-Bold text-[3.5rem] text-[rgb(60,60,60)] text-center">Welcome to <span
                        className="text-[#3083FF]">DyipSpot</span></h2>
                    <p className="PlusJakartaSans-Medium text-[rgba(60,60,60,0.78)] text-sm text-center "> Track Your Jeepneys in Real-Time,
                        See Passenger Counts, and Get Instant Vehicle Updates.
                    </p>
                  <div className="flex flex-row justify-center gap-3 place-items-center mt-3 h-auto ">    
                    <GetStartedButton/>
                    <DownloadCard/>
                  </div>
                </div>

            </div>


            <div className=" w-full h-full grid    relative grid-row-2  flex-col ">

                <div className="w-full   flex    h-full relative ">

                    <img src={speedIcon} className="absolute z-10 object-cover  top-10 right-10  w-[13rem]  " alt=""/>
                    <img src={Arrivaltime} className="absolute  object-cover left-24 top-10   w-[13rem]  " alt=""/>
                    <img src={Passengericon} className="absolute   object-cover left-[40%] w-[17rem] top-28     "
                         alt=""/>

                <img src={Jeep} className="absolute   object-cover bottom-0  h-[60%]  -right-[3rem]   "
                         alt=""/>

                </div>

              
            </div> 


        </div>

    )
}

export default GetStarted