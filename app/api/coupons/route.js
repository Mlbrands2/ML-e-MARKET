import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function POST(request) {
    try {
        // Parse and validate the request body
        const { title, couponCode, ExpiryData, isActive } = await request.json();

        if (
            !title ||
            !couponCode ||
            !ExpiryData ||
            typeof isActive !== "boolean"
        ) { 
            return NextResponse.json(
                {
                    data: null,
                    message: "All fields are required, and isActive must be a boolean.",
                },
                { status: 400 }
            );
        }

        // Ensure ExpiryData is a valid date
        const expiryDate = new Date(ExpiryData);
        if (isNaN(expiryDate.getTime())) {
            return NextResponse.json(
                {
                    data: null,
                    message: "ExpiryData must be a valid date.",
                },
                { status: 400 }
            );
        }

        // Create a new coupon
        const newCoupon = await db.coupon.create({
            data: {
                title,
                couponCode,
                ExpiryData: expiryDate, // Save as a Date object
                isActive,
            },
        });

        console.log("New coupon created:", newCoupon);

        return NextResponse.json({
            data: newCoupon,
            message: "Coupon created successfully.",
        }, { status: 201 });

    } catch (error) {
        console.error("Error creating coupon:", error.message);

        return NextResponse.json(
            {
                data: null,
                message: "Failed to create coupon.",
                error: error.message,
            },
            { status: 500 }
        );
    }
}

export async function GET(request) {
    try {
        // Fetch coupons ordered by creation date
        const coupons = await db.coupon.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json({
            data: coupons,
            message: "Coupons fetched successfully.",
        });

    } catch (error) {
        console.error("Error fetching coupons:", error.message);

        return NextResponse.json(
            {
                data: null,
                message: "Failed to fetch coupons.",
                error: error.message,
            },
            { status: 500 }
        );
    }
}

// import { NextResponse } from "next/server";
// import db from "../../../lib/db";

// export async function POST(request){
//  try {
//     const { title, couponCode, ExpiryData,isActive } = await request.json();

 
//     const newCoupon = await db.Coupon.create({
//       data: {
//         title,
//         couponCode,
//         ExpiryData, // Pass the Date object
//         isActive
//       },
//     });
    
//  console.log(newCoupon)
//  return NextResponse.json(newCoupon)
//  }  catch (error) {
// console.log(error)
// return NextResponse.json({
//     message:"failed to create coupon",error
// },{status:500})
//  } 
// }

// export async function GET(request){
//   try{
//   const coupons = await db.coupon.findMany({
//     orderBy:{
//         createdAt:"desc"
//     },
// },);
//   return NextResponse.json(coupons)
//   } catch (error) {
// console.log(error)
// return NextResponse.json({
//     message:"failed to fetch coupon",error
// },{status:500})
//   }
// }