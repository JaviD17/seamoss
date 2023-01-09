import { getAllProducts } from "../../lib/sanity.client";
import Card from "../components/Card";

export default async function ShopPage() {
  const products = await getAllProducts();
  // console.log(posts[0].body[0].children);
  console.log(products);
  return (
    <ul className="grid grid-cols-3 gap-4 p-16 justify-items-center">
      {products.map((product: any) => (
        <li key={product._id}>
          <Card product={product} />
        </li>
      ))}
    </ul>
  );
}

// FIXME: remove the `revalidate` export below once you've followed the instructions in `/pages/api/revalidate.ts`
export const revalidate = 1;
