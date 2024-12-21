import { NextResponse } from "next/server";

let coupons = []; // Mock in-memory data store. Replace with a database in production.

export async function POST(request) {
  try {
    const body = await request.json(); // Parse JSON from the request body.

    // Validate the input data
    const { title, couponCode, expiryDate } = body;
    if (!title || !couponCode || !expiryDate) {
      return NextResponse.json(
        { message: "All fields (title, couponCode, expiryDate) are required." },
        { status: 400 }
      );
    }

    // Create a new coupon
    const newCoupon = {
      id: Date.now(), // Mock ID; replace with a database-generated ID.
      title,
      couponCode,
      expiryDate,
    };

    // Add the new coupon to the in-memory store
    coupons.push(newCoupon);

    // Return a success response
    return NextResponse.json({ message: "Coupon created successfully!", coupon: newCoupon });
  } catch (error) {
    console.error("Error in coupons POST route:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    // Return the list of coupons
    return NextResponse.json({ coupons });
  } catch (error) {
    console.error("Error in coupons GET route:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
