
import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";

const getTopics = async () => {
  const apiUrl = process.env.API_URL;
  try {
    const res = await fetch(`${apiUrl}/api/topics`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const TopicLists = async () => {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((t) => (
        <div key={t._id} className="px-8 py-4 bg-slate-200 my-3 flex justify-between rounded-md gap-5 items-center">
          <div>
            <h2 className="font-bold text-gray-700 text-xl">{t.title}</h2>
            <div className="text-sm text-indigo-600">{t.description}</div>
          </div>

          <div className="flex gap-5 text-gray-700">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <FaEdit size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicLists;
