import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description } = await request.json();
    await connectMongoDB();
    await Topic.create({ title, description });
    return NextResponse.json({ message: "Topic Created" }, { status: 201 });
  } finally {
    await mongoose.disconnect();
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const topics = await Topic.find();
    return NextResponse.json({ topics });
  } finally {
    await mongoose.disconnect();
  }
}

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({ message: "Topic Deleted" }, { status: 201 });
  } finally {
    await mongoose.disconnect();
  }
}
