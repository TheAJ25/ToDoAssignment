"use client";
import React from "react";
import Link from "next/link";
import { UserAuth } from "@/context/AuthContext";

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      const confirmed = confirm("Do you really want to Sign Out ?")
      if(confirmed){
        await logOut();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className="flex justify-between items-center rounded-md bg-slate-300  px-8 py-3">
        <Link className="text-indigo-600 text-center font-bold text-3xl" href={"/"}>
          ToDo
        </Link>
        
        {user ? (
          <Link
          className="bg-indigo-600 p-2 text-center text-white rounded-md"
          href={"/addTopic"}
        >
          Add Topic
        </Link>
        ) : (
          <div className="hidden"></div>
        )}

        {!user ? (<div className="flex flex-row gap-5">
          <button
            onClick={handleSignIn}
            className="bg-slate-500 p-2 rounded-md text-white w-fit"
          >
            Log In
          </button>
          <button
            onClick={handleSignIn}
            className="bg-slate-500 p-2 rounded-md text-white w-fit"
          >
            Sign Up
          </button>
        </div>) : (
          <div className="flex flex-row justify-center items-center gap-5">
          <h2 className="text-indigo-600 font-bold text-md text-center">
            Welcome {user.displayName}
          </h2>
          <button
            onClick={handleSignOut}
            className="bg-slate-500 p-2 rounded-md text-white w-fit"
          >
            Sign Out
          </button>
        </div>
        )}

        
      </nav>
    </>
  );
};

export default Navbar;
