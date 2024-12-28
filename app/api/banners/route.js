import db from "@/lib/db";
import { NextResponse } from "next/server";

// Handle POST request: Create a new banner
export async function POST(request) {
  try {
    // Parse and validate the request body
    const { title, imageUrl, link, isActive } = await request.json();

    if (!title || !imageUrl || !link || typeof isActive !== "boolean") {
      return NextResponse.json(
        {
          message: "All fields are required, and isActive must be a boolean",
        },
        { status: 400 }
      );
    }

    // Create a new banner
    const newBanner = await db.banner.create({
      data: {
        title,
        imageUrl,
        link,
        isActive,
      },
    });

    console.log("New banner created:", newBanner);

    return NextResponse.json(
      {
        data: newBanner,
        message: "Banner created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating banner:", error.message);

    return NextResponse.json(
      {
        message: "Failed to create banner",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// Handle GET request: Retrieve all banners
export async function GET(request) {
  try {
    // Fetch banners ordered by creation date (descending)
    const banners = await db.banner.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(banners);
  } catch (error) {
    console.error("Error fetching banners:", error.message);

    return NextResponse.json(
      {
        message: "Failed to fetch banners",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
