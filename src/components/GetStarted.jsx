import React from 'react'
import Passengericon from "../assets/passenger.png"
import Arrivaltime from "../assets/arrivaltime.png"
import speedIcon from "../assets/speed.png"
import Jeep from "../assets/dyipcropted.png"
import "../assets/fonts/PlusJakartaSans-Bold.ttf";
import DownloadCard from "./DownloadCard.jsx";
import {addDoc, collection,doc,query,where,getDocs, setDoc} from "firebase/firestore";
import {auth, googleprovider, facebookprovider, db,} from "../api/firebase-config"
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import {useCookies} from "react-cookie";
import GetStartedButton from "./GetStartedButton.jsx";

function GetStarted() {
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
    const ContinueWithGoogle = async () => {
        try {
            const user = await signInWithPopup(auth, googleprovider)

            console.log(user)
            if(user.user.providerData[0].uid){
                const userRef = collection(db, "users");
                const driverRef = collection(db, "drivers");
                const driverQuery = query(driverRef, where("id", "==", user.user.providerData[0].uid));
                const passengerQuery = query(userRef, where("id", "==", user.user.providerData[0].uid));

                const passengerSnapshot = await getDocs(passengerQuery);
                const driverSnapshot = await getDocs(driverQuery);

                if (!driverSnapshot.empty) {
                    const docId = driverSnapshot.docs[0].id;
                    try {
                        console.log("Driver  already register: ", docId);
                        setCookie("authentication-token",user?.user.refreshToken)
                    } catch (e) {
                        console.error("Error updating driver document: ", e);
                    }
                }else {

                    if (!passengerSnapshot.empty) {
                        const docId = passengerSnapshot.docs[0].id;
                        console.log("Passenger already register ", docId);

                    } else {

                        await addDoc(userRef, {

                            id: user?.user?.providerData[0]?.uid,
                            first: user?._tokenResponse?.firstName,
                            ImageUrl: user?.user?.providerData[0]?.photoURL,
                            last:user?._tokenResponse?.lastname,
                            role: "passenger",
                            latitude: null,
                            longitude: null,
                            status: "online",
                        });

                        console.log("Passenger registered ");
                    }
                    setCookie("authentication-token",user?._tokenResponse.idToken)

                }




            }

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