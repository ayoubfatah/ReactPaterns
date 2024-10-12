import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="h-lvh flex flex-col  justify-center items-center space-y-4">
      <Link className="text-[26px] " href="layoutComponents/screen-splitter">
        Screen Splitter
      </Link>
      <Link className="text-[26px] " href="layoutComponents/lists">
        lists
      </Link>
      <Link className="text-[26px] " href="layoutComponents/modals">
        modals
      </Link>
    </div>
  );
}
