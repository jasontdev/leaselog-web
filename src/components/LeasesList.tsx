import {Lease} from "../data.ts";
import "./LeastList.css";

type LeasesListProps = {
  leases: Lease[];
}

export function LeasesList({leases}: LeasesListProps) {
  return (
    <table className="leaselist-table">
      <thead className="leaselist-th">
      <tr>
        <th>Name</th>
        <th>Tenant</th>
        <th>Rate ($)</th>
      </tr>
      </thead>
      <tbody>
      {leases.map((lease) => <tr key={lease.id}>
        <th>{lease.name}</th>
        <th>{lease.contact.name}</th>
        <th>{lease.rate}</th>
      </tr>)}
      </tbody>
    </table>
  )
}