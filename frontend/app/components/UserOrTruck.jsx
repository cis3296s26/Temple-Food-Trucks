"use client"

import { useRouter } from "next/navigation"

export default function UserOrTruck(){

    const router = useRouter();

    function CustomerRouter(e){
        e.preventDefault();
        router.push("/trucks");
    }

    function TruckRouter(e){
        e.preventDefault();
        router.push("/signup/signup_info");
    }

    return(
        <>
        <div className="flex gap-7">

            <form onSubmit={CustomerRouter}>
                <input type="submit" value="Are you a customer?" className="flex items-center text-7xl bg-red-500 w-full h-200 p-10 rounded-2xl hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-2xl cursor-pointer"/>
                    {/* <p className="text-8xl">Are you a customer?</p> */}
            </form>


            <div className="flex justify-center items-center">
                <p style={{WebkitTextStroke: "1px black"}} className="text-6xl font-semibold">OR</p>
            </div>


            <form onSubmit={TruckRouter}>
                <input type="submit" value="Are you a Food Truck?" className="flex items-center text-7xl bg-blue-500 w-full h-200 p-10 rounded-2xl hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-2xl cursor-pointer"/>
                    {/* <p className="text-8xl">Are you a Food Truck?</p> */}
                
            </form>
        </div>
        </>
    )
}