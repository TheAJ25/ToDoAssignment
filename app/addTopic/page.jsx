"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleChange = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required !!");
      return;
    }

    try {
      const data = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (data.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleChange} className="flex pt-5 gap-5 flex-col">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className={
            "border-2 border-slate-400 p-3 rounded-md text-gray-700 text-xl"
          }
          type="text"
          placeholder="Topic Title"
        />

        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className={
            "border-2 border-slate-400 p-3 rounded-md text-gray-700 text-xl"
          }
          type="text"
          placeholder="Topic Description"
        />

        <button
          type="submit"
          className="text-center bg-indigo-600 p-2 text-white rounded-md w-[70px] font-bold"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default page;
