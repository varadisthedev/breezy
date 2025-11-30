import React from "react";

export const Navbar = () => {
  return (
    <>
      <nav
        className="backdrop-blur-xl  border border-white/20 rounded-2xl  
        fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl
      bg-linear-to-r from-gray-400/40 to-white/20 
      shadow-xl px-6 py-3 flex justify-between items-center
      "
      >
        <div className="flex gap-6 justify-between items-center">
          <button className="text-2xl antialiased font-bold  hover: text-black">
            Home
          </button>
          <button className="text-2xl antialiased font-bold  hover: text-blue-950">
            Home
          </button>
          <button className="text-2xl antialiased font-bold  hover: text-blue-950">
            Home
          </button>
          <button className="text-2xl antialiased font-bold  hover: text-blue-950">
            Home
          </button>
          <button className="text-2xl antialiased font-bold  hover: text-blue-950">
            Home
          </button>
          <button className="text-2xl antialiased font-bold  hover: text-blue-950">
            Home
          </button>
        </div>
      </nav>
    </>
  );
};
