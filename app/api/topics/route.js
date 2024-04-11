import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";


connectMongoDB();

export async function POST(request) {
  try {
    const { title, description } = await request.json();
    await Topic.create({ title, description });
    return NextResponse.json({ message: "Topic Created" }, { status: 201 });
  } catch (error) {
    console.error("Error creating topic:", error);
    return NextResponse.error({ message: "Failed to create topic" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const topics = await Topic.find();
    return NextResponse.json({ topics });
  } catch (error) {
    console.error("Error fetching topics:", error);
    return NextResponse.error({ message: "Failed to fetch topics" }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get('id');
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({ message: "Topic Deleted" }, { status: 201 });
  } catch (error) {
    console.error("Error deleting topic:", error);
    return NextResponse.error({ message: "Failed to delete topic" }, { status: 500 });
  }
}
