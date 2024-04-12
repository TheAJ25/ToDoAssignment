"use client"
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";


const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
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

export default async function TopicsList() {
  const { topics } = await getTopics();
  

  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="px-8 py-3 bg-slate-200 my-3 flex justify-between gap-5"
        >
          <div>
            <h2 className="font-bold text-gray-800 text-xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex justify-center items-center text-gray-800 gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}