"use client";
// import { Image, View, Text, StyleSheet } from "react-native";

import IconCard from "./IconCard";
import Link from "next/link";
import StoreStatus from "./StoreStatus";

export default function TruckCard({ truck }) {
  const truckName = truck.name;
  const isOpen = truck.status;
  const foodType = truck.foodType;
  const description = truck.description;
  const location = truck.location;
  const id = truck.id;

  return (
    <Link
      href={`/trucks/${id}`}
      className="bg-blue-500 mb-4 w-3/12 rounded-4xl border-4 m-4 overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-2xl"
    >
      <div className="h-full flex flex-col justify-between">
        {" "}
        {/* This is to stylize the content and the individual card */}
        {/* Replace the bg-amber-800 div with this */}
        <div className="h-64 relative overflow-hidden">
          {truck.image ? (
            <img
              src={truck.image}
              alt={truckName}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="bg-amber-800 w-full h-full flex items-center justify-center">
              <span className="text-white text-5xl font-bold">
                No Image Available
              </span>
            </div>
          )}

          {/* Your StoreStatus overlay stays exactly the same */}
          <div className="w-30 h-10 absolute bottom-2 right-2">
            <div className="flex flex-wrap justify-center absolute bottom-50 border-3 border-black bg-white w-30 h-10 rounded-2xl overflow-hidden">
              <StoreStatus isOpen={isOpen} />
            </div>
          </div>
        </div>
        {/* Below is the descriptions that are inside the box */}
        <h1 className="p-8 text-center text-3xl font-bold">{truckName}</h1>
        <hr />
        <p className="p-4 wrap-break-word">{description}</p>
        <hr />
        <IconCard
          location={location}
          phoneNumber={"123-456-7890"}
          foodType={foodType}
        ></IconCard>
      </div>
    </Link>
  );
}

// Name
// Icon: type of food (middle-eastern, smoothie), location
// open_status
