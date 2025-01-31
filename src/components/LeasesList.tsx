import {Lease} from "../data.ts";

type LeasesListProps = {
  leases: Lease[];
}

export function LeasesList({leases}: LeasesListProps) {
  return (
    <table>
      <thead>
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