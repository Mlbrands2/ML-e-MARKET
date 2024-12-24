import { NextResponse } from "next/server";

let farmers = []; // Mock in-memory data store. Replace with a database in production.

export async function POST(request) {
  try {
    const body = await request.json(); // Parse JSON from the request body.

    // Validate the input data
    const {
      name,
      phone,
      email,
      address,
      contactPerson,
      contactPersonPhone,
      farmerCode,
      farmersUniqueCode,
      paymentTerms,
      note,
    } = body;

    if (
      !name ||
      !phone ||
      !email ||
      !address ||
      !contactPerson ||
      !contactPersonPhone ||
      !farmerCode ||
      !farmersUniqueCode ||
      !paymentTerms
    ) {
      return NextResponse.json(
        { message: "All fields are required except note." },
        { status: 400 }
      );
    }

    // Create a new farmer entry
    const newFarmer = {
      id: Date.now(), // Mock ID; replace with a database-generated ID.
      name,
      phone,
      email,
      address,
      contactPerson,
      contactPersonPhone,
      farmerCode,
      farmersUniqueCode,
      paymentTerms,
      note: note || "", // Default to an empty string if note is not provided
    };

    // Add the new farmer to the in-memory store
    farmers.push(newFarmer);

    // Return a success response
    return NextResponse.json({
      message: "Farmer created successfully!",
      farmer: newFarmer,
    });
  } catch (error) {
    console.error("Error in farmers POST route:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Return the list of farmers
    return NextResponse.json({ farmers });
  } catch (error) {
    console.error("Error in farmers GET route:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
