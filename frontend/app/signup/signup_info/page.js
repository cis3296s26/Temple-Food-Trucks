import { PageMain } from "../../components/PageMain"
import SignUpInfoDesign from "@/app/components/SignUpInfoDesign"


export default function SignUp_Info(){
    return(
        <PageMain>
            <SignUpInfoDesign truckData={{}} typeOfRequest={"POST"}></SignUpInfoDesign>
        </PageMain>
    )
}