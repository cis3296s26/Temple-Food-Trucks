import { FolderDot } from "lucide-react";
import MiniPopUpInfo from "./MiniPopUpInfo";

export default function SignUpInfoDesign(){
    return(
        <>
        
        <div className="flex flex-wrap justify-center relative m-4">
            <div className="relative bg-linear-to-r from transparent via-blue-300 to-transparent w-300 h-570 rounded-4xl m-10 p-25 shadow-2xl shadow-cyan-300"> {/*Relative allows the circle to be hidden behind the blue box */}
                {/* <div className="absolute top-0 left-0">
                    <TruckAnimation className=""></TruckAnimation>
                </div> */}
                    <MiniPopUpInfo className="relative"></MiniPopUpInfo>
                <h1 className="font-[Georgia] font-bold text-4xl p-7">Food Truck Customization</h1>
                <div className="flex flex-wrap justify-center bg-green-500 rounded-3xl m-2 p-10 gap-7">
                    
                    <div className="bg-white w-120 h-10 rounded-4xl">
                        <input placeholder="Truck's Name" required className="text-black focus:outline-none flex p-2 w-full"></input>
                    </div>

                    <div className="bg-white w-120 h-50 rounded-2xl">
                        <input placeholder="Description about the truck" required className="text-black focus:outline-none flex p-2 w-full"></input>
                    </div>

                    {/* <div className="bg-white w-120 h-10 rounded-4xl">
                        <input type="password" placeholder="Password" required className="text-black focus:outline-none flex p-2 w-full"></input>
                    </div> */}

                </div>

                <div className="bg-red-300 h-50 w-full">
                        
                </div>

                 <button className="absolute left-85 bg-black w-120 h-15 m-4 p-2 rounded-4xl overflow-hidden text-white flex justify-center hover:scale-150 hover:shadow-xl duration-300 transition-all hover:bg-white hover:text-black cursor-pointer">
                    <p className="font-bold text-3xl">Register</p>
                </button>
    
            </div>
        </div>
        </>
    )
}

/* 
Type of Food (String: "Halal" , "Korean" , "Breakfast")
Prob import some library that has types of food lol

Price Range (List: $5-$12)

Name (String: "Temple Teppanyaki")

Dietary Restrictions (String: "Vegetarian" , "Vegan")

Open/Closed Currently (Boolean)

Popularity (Float: 3.5 Stars)

Description (Bio about the truck, String)
*/