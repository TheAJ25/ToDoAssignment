import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center rounded-md bg-slate-300  px-8 py-3">
        <Link className="text-indigo-600 font-bold text-3xl" href={"/"}>
          ToDo
        </Link>
        <Link
          className="bg-indigo-600 p-2 text-white rounded-md"
          href={"/addTopic"}
        >
          Add Topic
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
