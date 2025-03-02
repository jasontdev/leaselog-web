import React from "react";

type DataTableProps<T, K> = {
  data: T[];
  renderRowFn: (rowData: T) => React.ReactNode;
  selectRows: K[];
}

export function DataTable<T>({data, renderRowFn, selectedRows}: DataTableProps<T>) {
  return (
    <table>
      <thead>
      <tr>
        <th><input type="checkbox"/></th>
        <th>Name</th>
        <th>Tenant</th>
        <th className="text-number">Rate ($)</th>
      </tr>
      </thead>
      <tbody>
      {data.map((row: T) => renderRowFn(row, selectedRows))}
      </tbody>
    </table>
  )
}