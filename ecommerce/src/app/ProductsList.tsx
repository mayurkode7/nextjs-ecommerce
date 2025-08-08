import Link from "next/link";
import { Product } from "../product-data";
import Image from "next/image";

export default function ProductsList({ products }: { products: Product[] }) {
  return (
    <div>
      {products.map((product) => (
        <Link key={product.id} href={"/products/"+product.id}>
          <Image
            src={'/'+ product.imageUrl}
            height={150}
            width={150}
            alt={product.name}
          ></Image>
          <h1>{product.name}</h1>
          {/* <p>{product.description}</p> */}
          <p>${product.price}</p>
        </Link>
      ))}
    </div>
  );
}
