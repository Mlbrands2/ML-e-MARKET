import { NextResponse } from "next/server";

let products = []; // Mock in-memory data store. Replace with a database in production.

export async function POST(request) {
  try {
    const body = await request.json(); // Parse JSON from the request body.

    // Validate the input data
    const {
      title,
      description,
      slug,
      image,
      sku,
      barcode,
      price,
      salePrice,
      categoryId,
      farmerId,
      tags,
    } = body;

    if (
      !title ||
      !description ||
      !slug ||
      !image ||
      !sku ||
      !barcode ||
      price === undefined ||
      salePrice === undefined ||
      !categoryId ||
      !farmerId ||
      !tags
    ) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // Create a new product
    const newProduct = {
      id: Date.now(), // Mock ID; replace with a database-generated ID.
      title,
      description,
      slug,
      image,
      sku,
      barcode,
      price,
      salePrice,
      categoryId,
      farmerId,
      tags: Array.isArray(tags) ? tags : tags.split(",").map((tag) => tag.trim()), // Ensure tags are an array
    };

    // Add the new product to the in-memory store
    products.push(newProduct);

    // Return a success response
    return NextResponse.json({
      message: "Product created successfully!",
      product: newProduct,
    });
  } catch (error) {
    console.error("Error in products POST route:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    // Return the list of products
    return NextResponse.json({ products });
  } catch (error) {
    console.error("Error in products GET route:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
