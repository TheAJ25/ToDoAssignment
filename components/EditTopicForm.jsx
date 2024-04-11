import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
  const apiUrl = process.env.API_URL;

  try {
    const res = await fetch(`${apiUrl}/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching topic:", error);
    
    return null;
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;

  try {
    const topic = await getTopicById(id);

    if (!topic) {
      return <div>Topic not found!</div>;
    }

    const { title, description } = topic;

    return <EditTopicForm id={id} title={title} description={description} />;
  } catch (error) {
    console.error("Error fetching topic:", error);
    return <div>Error loading topic!</div>;
  }
}
