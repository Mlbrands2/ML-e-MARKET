import { NextResponse } from "next/server";

let categories = []; // Mock in-memory data store. Replace with a database in production.

export async function POST(request) {
  try {
    const body = await request.json(); // Parse JSON from the request body.

    // Validate the input data
    const { title, description, slug, image } = body;
    if (!title || !description || !slug || !image) {
      return NextResponse.json(
        { message: "All fields (title, description, slug, image) are required." },
        { status: 400 }
      );
    }

    // Create a new category
    const newCategory = {
      id: Date.now(), // Mock ID; replace with a database-generated ID.
      title,
      description,
      slug,
      image,
    };

    // Add the new category to the in-memory store
    categories.push(newCategory);

    // Return a success response
    return NextResponse.json({
      message: "Category created successfully!",
      category: newCategory,
    });
  } catch (error) {
    console.error("Error in categories POST route:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    // Return the list of categories
    return NextResponse.json({ categories });
  } catch (error) {
    console.error("Error in categories GET route:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
