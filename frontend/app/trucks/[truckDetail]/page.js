export default async function TruckDetailPage({ params }) {
  const { truckDetail } = await params;
  return (
    <div>
      <h1>Truck Detail</h1>
      <p>Truck: {truckDetail}</p>
    </div>
  );
}
