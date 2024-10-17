"use client";
import React, { createContext, useContext } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Types
type TableContextType = {
  columns: string;
};

type TableProps = {
  columns: string;
  children: React.ReactNode;
};

type CommonProps = {
  children: React.ReactNode;
};

type PaginationProps = {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  onPageChange: (page: number) => void;
};

// Context
const TableContext = createContext<TableContextType>({ columns: "" });

// Components
function Table({ columns, children }: TableProps) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children }: CommonProps) {
  const { columns } = useContext(TableContext);
  return (
    <div
      className="grid gap-4 bg-gray-50 dark:bg-gray-900 px-4 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </div>
  );
}

function Body({ children }: CommonProps) {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {children}
    </div>
  );
}

function Row({ children }: CommonProps) {
  const { columns } = useContext(TableContext);
  return (
    <div
      className="grid gap-4 px-4 py-3 bg-white dark:bg-gray-800 items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </div>
  );
}

function Footer({
  currentPage,
  itemsPerPage,
  totalItems,
  onPageChange,
}: PaginationProps) {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItemsCount = Math.min(indexOfLastItem, totalItems);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 px-4 py-3 flex items-center justify-between">
      <div className="text-sm text-gray-700 dark:text-gray-300">
        Showing {indexOfFirstItem + 1} to {currentItemsCount} of {totalItems}{" "}
        results
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center gap-1 px-3 py-1 text-sm rounded-md
            disabled:opacity-50 disabled:cursor-not-allowed
            hover:bg-gray-100 dark:hover:bg-gray-700
            text-gray-700 dark:text-gray-300"
        >
          <ChevronLeft size={16} />
          Previous
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={indexOfLastItem >= totalItems}
          className="flex items-center gap-1 px-3 py-1 text-sm rounded-md
            disabled:opacity-50 disabled:cursor-not-allowed
            hover:bg-gray-100 dark:hover:bg-gray-700
            text-gray-700 dark:text-gray-300"
        >
          Next
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

// Assign components
Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

// Example usage
export default function DataTable() {
  const data = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      status: "Inactive",
    },
  ];

  return (
    <Table columns="50px 1fr 1fr 100px">
      <Table.Header>
        <div>ID</div>
        <div>Name</div>
        <div>Email</div>
        <div>Status</div>
      </Table.Header>

      <Table.Body>
        {data.map((item) => (
          <Table.Row key={item.id}>
            <div>{item.id}</div>
            <div>{item.name}</div>
            <div>{item.email}</div>
            <div>{item.status}</div>
          </Table.Row>
        ))}
      </Table.Body>

      <Table.Footer
        currentPage={1}
        itemsPerPage={10}
        totalItems={data.length}
        onPageChange={(page) => console.log(page)}
      />
    </Table>
  );
}
