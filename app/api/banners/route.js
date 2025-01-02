import db from "@/lib/db";
import { NextResponse } from "next/server";

// Validate URL
const urlRegex = /^(https?:\/\/)[\w.-]+(\.[a-z]+)+(\/[^\s]*)?$/i;

// Handle POST request: Create a new banner
export async function POST(request) {
  try {
    const { title, imageUrl, link, isActive } = await request.json();

    // Validate input fields
    if (!title || !imageUrl || !link || typeof isActive !== "boolean") {
      return NextResponse.json(
        { message: "All fields are required, and isActive must be a boolean." },
        { status: 400 }
      );
    }

    if (!urlRegex.test(imageUrl) || !urlRegex.test(link)) {
      return NextResponse.json(
        { message: "imageUrl and link must be valid URLs." },
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
        message: "Banner created successfully.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating banner:", error);

    return NextResponse.json(
      {
        message: "Failed to create banner.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// Handle GET request: Retrieve all banners
export async function GET(request) {
  try {
    const banners = await db.banner.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!banners.length) {
      return NextResponse.json({
        data: [],
        message: "No banners found.",
      });
    }

    return NextResponse.json({
      data: banners,
      message: "Banners fetched successfully.",
    });
  } catch (error) {
    console.error("Error fetching banners:", error);

    return NextResponse.json(
      {
        message: "Failed to fetch banners.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
