// imports from next

// importing components
import TruckCard from "../components/TruckCard";
import { PageMain } from "../components/PageMain";

const trucks = ["halal", "teppanyaki", "bagel hut"];

export default function AllTrucksPage() {
  return (
    <PageMain>
    <div>
      <h1>All Trucks</h1>
      <ul>
        {trucks.map((truck) => (
          <li key={truck}>
            <a className="text" href={`/trucks/${truck}`}>{truck}</a>
          </li>
        ))}
      </ul>
    </div>
    </PageMain>
  );
}
