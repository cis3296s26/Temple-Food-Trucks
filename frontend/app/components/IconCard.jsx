import {
    MapPin,
    Phone
} from "lucide-react"

export default function IconCard({location}){
    return (
        <div>
            <div className="flex flex-row">
                <MapPin></MapPin>
                <p>{location}</p>
            </div>
            <div className="flex flex-row">
                <Phone></Phone>
                <p>{location}</p>
            </div>
        </div>
    )
}