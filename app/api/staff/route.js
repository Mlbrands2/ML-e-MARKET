import { NextResponse } from "next/server";

let staffList = []; // Mock in-memory data store. Replace with a database in production.

export async function POST(request) {
  try {
    const body = await request.json(); // Parse JSON from the request body.

    // Validate the input data
    const { name, position, description, slug, image, isActive } = body;
    if (!name || !position || !description || !slug || !image || isActive === undefined) {
      return NextResponse.json(
        { message: "All fields (name, position, description, slug, image, isActive) are required." },
        { status: 400 }
      );
    }

    // Create a new staff member
    const newStaff = {
      id: Date.now(), // Mock ID; replace with a database-generated ID.
      name,
      position,
      description,
      slug,
      image,
      isActive,
    };

    // Add the new staff member to the in-memory store
    staffList.push(newStaff);

    // Return a success response
    return NextResponse.json({
      message: "Staff created successfully!",
      staff: newStaff,
    });
  } catch (error) {
    console.error("Error in staff POST route:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    // Return the list of staff members
    return NextResponse.json({ staff });
  } catch (error) {
    console.error("Error in staff GET route:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
