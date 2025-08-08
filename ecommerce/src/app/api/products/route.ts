// import { products } from "@/product-data"
import { connectToDB } from "@/app/api/db";

export async function GET () {
    const { db } = await connectToDB();
    const _products = await db.collection('products').find({}).toArray();

    // const _products = JSON.stringify(_products)

    return new Response(JSON.stringify(_products), {
        status: 200,
        statusText: 'showing products ' + new Date().toLocaleString()
    })
}   