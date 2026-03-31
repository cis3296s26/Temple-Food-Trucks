import Link from "next/link";

const trucks = ["halal", "teppanyaki", "bagel hut"];

export default function TrucksPage() {
  return (
    <div>
      <h1>All Trucks</h1>
      <ul>
        {trucks.map((truck) => (
          <li key={truck}>
            <Link href={`/trucks/${truck}`}>{truck}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
