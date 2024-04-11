"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex pt-5 gap-5 flex-col">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border-2 border-slate-400 p-3 rounded-md text-gray-700 text-xl"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border-2 border-slate-400 p-3 rounded-md text-gray-700 text-xl"
        type="text"
        placeholder="Topic Description"
      />

      <button className="text-center bg-indigo-600 px-4 py-2 text-white rounded-md w-fit font-bold">
        Update Topic
      </button>
    </form>
  );
}