import React from "react";
import ModeToggle from "@/components/shared/ModeToggle";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center">
        <span className="text-2xl text-gray-100 bg-black p-2">
          Bharath Lakkoju
        </span>
        <ModeToggle />
      </div>
    </>
  );
}
