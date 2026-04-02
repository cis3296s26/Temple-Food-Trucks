import TruckCard from "../../components/TruckCard";
import { PageMain } from "../../components/PageMain";

export default async function TruckDetailPage({ params }) {
  const { truckDetail } = await params;
  return (
    <PageMain>
      <h1 className="text-5xl font-semibold" >{truckDetail}</h1>
      <hr className="my-10 text-gray-500 w-full"></hr>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </PageMain>
  );
}
