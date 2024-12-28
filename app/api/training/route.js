import { NextResponse } from "next/server";

let trainings = []; // Mock in-memory data store. Replace with a database in production.

export async function POST(request) {
  try {
    const body = await request.json(); // Parse JSON from the request body.

    // Validate the input data
    const { title, description, image, marketID, context, isActive } = body;
    if (!title || !description || !image || !marketID || !context) {
      return NextResponse.json(
        { message: "All fields (title, description, image, marketID, context) are required." },
        { status: 400 }
      );
    }

    // Create a new training
    const newTraining = {
      id: Date.now(), // Mock ID; replace with a database-generated ID.
      title,
      description,
      image,
      marketID,
      context,
      isActive: isActive || true, // Default to true if not provided
    };

    // Add the new training to the in-memory store
    trainings.push(newTraining);

    // Return a success response
    return NextResponse.json({
      message: "Training created successfully!",
      training: newTraining,
    });
  } catch (error) {
    console.error("Error in training POST route:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    // Return the list of trainings
    return NextResponse.json({ trainings });
  } catch (error) {
    console.error("Error in training GET route:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
