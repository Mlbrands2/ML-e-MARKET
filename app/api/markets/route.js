import { NextResponse } from "next/server";

let markets = []; // Mock in-memory data store. Replace with a database in production.

// Utility function to generate a slug
function generateSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}

export async function POST(request) {
  try {
    const body = await request.json(); // Parse JSON from the request body.

    // Validate the input data
    const { title, logo, description } = body;
    if (!title || !logo || !description) {
      return NextResponse.json(
        { message: "All fields (title, logo, description) are required." },
        { status: 400 }
      );
    }

    // Generate slug from the title
    const slug = generateSlug(title);

    // Check if slug is unique
    const isSlugTaken = markets.some((market) => market.slug === slug);
    if (isSlugTaken) {
      return NextResponse.json(
        { message: "A market with this title already exists." },
        { status: 400 }
      );
    }

    // Create a new market
    const newMarket = {
      id: Date.now(), // Mock ID; replace with a database-generated ID.
      title,
      slug, // Add slug to the market object
      logo,
      description,
    };

    // Add the new market to the in-memory store
    markets.push(newMarket);

    // Return a success response
    return NextResponse.json({ message: "Market created successfully!", market: newMarket });
  } catch (error) {
    console.error("Error in markets POST route:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    // Return the list of markets
    return NextResponse.json({ markets });
  } catch (error) {
    console.error("Error in markets GET route:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
