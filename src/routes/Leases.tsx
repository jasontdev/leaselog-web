import {useLoaderData} from "react-router-dom";
import {Lease} from "../data.ts";
import {LeasesList} from "../components/LeasesList.tsx";

export default function Leases() {
  const leases = useLoaderData() as Lease[];

  return (
    <div><h1>Leases</h1>
      {leases ? <LeasesList leases={leases} /> : <p>No leases</p>}
    </div>
  );
}