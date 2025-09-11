"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { GlobalTableProps } from "@/types/global-table-types";

export function GlobalTable<T>({
  columns,
  data,
  loading = false,
  emptyMessage = "No data found",
  maxHeight = 440,
  className,
}: GlobalTableProps<T>) {
  const alignClass = (align?: "left" | "center" | "right") => {
    switch (align) {
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      default:
        return "text-left";
    }
  };

  return (
    <div
      className={`overflow-auto ${className}`}
      style={{ maxHeight }}
    >
      <Table>
        <TableHeader className="bg-background sticky top-0 z-10">
          <TableRow>
            {columns.map((col) => (
              <TableHead
                key={String(col.key)}
                className={`${alignClass(col.align)} font-semibold text-foreground-muted`}
              >
                {col.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {loading ? (
            [...Array(5)].map((_, i) => (
              <TableRow
                key={i}
                className={i % 2 === 0 ? "bg-sidebar" : "bg-background"}
              >
                {columns.map((col, j) => (
                  <TableCell key={j} className={alignClass(col.align)}>
                    <Skeleton className="h-4 w-24" />
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center py-6">
                {emptyMessage}
              </TableCell>
            </TableRow>
          ) : (
            data.map((row, i) => (
              <TableRow
                key={i}
                className={i % 2 === 0 ? "bg-sidebar" : "bg-background"}
              >
                {columns.map((col) => (
                  <TableCell
                    key={String(col.key)}
                    className={alignClass(col.align)}
                  >
                    {col.render ? col.render(row) : (row[col.key] as any)}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

// **USer guideline**===================================

// import { GlobalTable } from "@/components/global-table";

// const data = [
//   { id: 1, name: "John", role: "Admin" },
//   { id: 2, name: "Jane", role: "Editor" },
// ];

// const columns = [
//   { key: "id", label: "ID" },
//   { key: "name", label: "Name" },
//   { key: "role", label: "Role" },
// ];

// export default function Example() {
//   return (
//     <div className="p-6">
//       <GlobalTable
//         data={data}
//         columns={columns}
//         caption="Users List"
//         loading={false}
//         emptyMessage="No users found."
//       />
//     </div>
//   );
// }

// ==================================================
