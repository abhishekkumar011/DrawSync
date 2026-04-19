"use client";

import { UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <div className="flex items-center gap-x-4 p-5 bg-green-500">
      <div className="hiddent lg:flex lg:flex-1">{/* Add Search */}</div>
      <UserButton />
    </div>
  );
};
