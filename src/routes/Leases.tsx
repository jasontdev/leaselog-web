import {useLoaderData} from "react-router-dom";
import {Lease} from "../data.ts";
import {DataTable} from "../components/DataTable.tsx";
import {useState} from "react";
import Container from "../ui/Container.tsx";
import Button from "../ui/Button.tsx";

export default function Leases() {
  const leases = useLoaderData() as Lease[];
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  function handleCheckBoxClick(rowId: string) {
    if(selectedRows.includes(rowId)) {
      setSelectedRows(selectedRows.filter((row) => row != rowId));
    } else {
      setSelectedRows([...selectedRows, rowId])
    }
  }

  function renderLeaseTableRow(row: Lease, selectedRows: string[]) {
    return (
      <tr key={row.id}>
        <td><input type="checkbox" checked={selectedRows.includes(row.id)} onClick={() => handleCheckBoxClick(row.id)}/></td>
        <td>{row.name}</td>
        <td>{row.contact.name}</td>
        <td>{row.rate}</td>
      </tr>
    );
  }

  return (
    <div>
      <h1>Leases</h1>
      <Container column center>
        {leases ? <DataTable data={leases} renderRowFn={(row: Lease) => renderLeaseTableRow(row, selectedRows)}
                             selectRows={selectedRows}/> : <p>No leases</p>}
          <Button text="New Lease" center />
      </Container>
    </div>
  );
}