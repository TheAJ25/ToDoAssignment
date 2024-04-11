import React, { useState, useEffect } from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";

const TopicsList = () => {
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/topics", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch topics");
        }

        const data = await res.json();
        setTopics(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error fetching topics: {error.message}</div>;
  }

  if (!topics.length) {
    return <div>Loading topics...</div>; // Optional loading indicator
  }

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

export default TopicsList;
