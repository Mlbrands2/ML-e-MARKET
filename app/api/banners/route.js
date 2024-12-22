import { NextResponse } from "next/server";

let banners = []; // Mock in-memory data store. Replace with a database in production.

export async function POST(request) {
  try {
    const body = await request.json(); // Parse JSON from the request body.

    // Validate the input data
    const { title, link, imageUrl } = body;
    if (!title || !link || !imageUrl) {
      return NextResponse.json(
        { message: "All fields (title, link, imageUrl) are required." },
        { status: 400 }
      );
    }

    // Additional validation (optional but recommended)
    const urlRegex = /^(https?:\/\/[^\s$.?#].[^\s]*)$/i;
    if (!urlRegex.test(link)) {
      return NextResponse.json(
        { message: "Invalid URL format for the link." },
        { status: 400 }
      );
    }
    if (!/\.(jpg|jpeg|png|gif)$/i.test(imageUrl)) {
      return NextResponse.json(
        { message: "Invalid image format. Accepted: jpg, jpeg, png, gif." },
        { status: 400 }
      );
    }

    // Create a new banner
    const newBanner = {
      id: banners.length + 1, // Mock ID; replace with a database-generated ID.
      title,
      link,
      imageUrl,
    };

    // Add the new banner to the in-memory store
    banners.push(newBanner);

    // Return a success response
    return NextResponse.json({
      message: "Banner created successfully!",
      banner: newBanner,
    });
  } catch (error) {
    console.error("Error in banner POST route:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Return the list of banners
    return NextResponse.json({ banners });
  } catch (error) {
    console.error("Error in banners GET route:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
