import db from "@/lib/db"
import { NextResponse } from "next/server";

export async function POST(request){
    try {
  const {  title,
    description,
    slug,
    image,
    sku,
    barcode,
    price,
    salePrice,
    categoryId,
    farmerId,
    tags
    }=await request.json();


const existingProduct=await db.product.findUnique({
    where:{
        slug,
    }
});
if(existingProduct){
    return NextResponse({
        data:null,
        message:"Product already exist"
    },
{status:400}
);
} 
const  newProduct=await db.product.create({
    data: {title,
      description,
      slug,
      image,
      sku,
      barcode,
      price,
      salePrice,
      categoryId,
      farmerId,
      tags
    },
});
console.log(newProduct)
//  const newProduct ={productData}
//  console.log(productData)
 return NextResponse.json(newProduct)
 }  catch (error) {
console.log(error)
return NextResponse.json({
    message:"failed to create product",error
},{status:500})
 } 
}

export async function GET(request){
    try{
    const products = await db.product.findMany({
        orderBy:{
            createdAt:"desc"
        },
    },);
    return NextResponse.json(products)
    } catch (error) {
  console.log(error)
  return NextResponse.json({
      message:"failed to fetch products",error
  },{status:500})
    }
  }

{/*title,
      description,
      slug,
      image,
      sku,
      barcode,
      price,
      salePrice,
      categoryId,
      farmerId,
      tags,*/}