// import { products } from "@/product-data";
import ProductsList from "@/app/ProductsList";
import { env } from "process";

export const dynamic = "force-dynamic";

export default async function ProductsPage() {

  // const products = await fetch('http://localhost:3000/api/products');
  const products = await fetch(env.NEXT_PUBLIC_SITE_URL+'/api/products');
  const productsData = await products.json();

  return (
    <>
      <h1>Products...</h1>
      <p>This is a test message</p>
      <ProductsList products={productsData}></ProductsList>
    </>
  );
}