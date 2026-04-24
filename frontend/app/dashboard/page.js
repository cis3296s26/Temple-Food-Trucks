"use client";

import { useEffect, useState } from "react";
import { PageMain } from "../components/PageMain";
import SignUpInfoDesign from "../components/SignUpInfoDesign";
import { useSearchParams } from "next/navigation";
import axiosClient from "../axiosClient";

export default function SignUp_Info() {
  const [truck, setTruck] = useState({});
  const searchParams = useSearchParams();

  useEffect(() => {
    async function getTruck() {
      const truckId = searchParams.get("truckId");
      const res = await axiosClient(`foodtrucks/${truckId}/`, null, "", "GET");
      setTruck(res || {})
      console.log(res)
    }

    getTruck();
  }, []);

  return (
    <PageMain>
      <SignUpInfoDesign truckData={truck}></SignUpInfoDesign>
    </PageMain>
  );
}
