// import { Product, products } from "@/product-data";
// import { log } from "console";
import { NextRequest } from "next/server";
import { connectToDB } from "@/app/api/db";

type Params = {
    id: string
}

export async function GET(request: NextRequest, {params}: {params: Promise<Params>}) {
    const { db } = await connectToDB();

    const { id } = await params ;

    // const product = products.find((p) => p.id === productID);

    const product = await db.collection('products').findOne({id: id})

    if(!product) {
        return new Response('Product Not Found!', {
            status: 404,
            statusText: 'Product not found!'
        })
    }

  return new Response(JSON.stringify(product), {
    status: 200,
    headers: {
        'Content-Type':'application/json'
    }
  });
}
