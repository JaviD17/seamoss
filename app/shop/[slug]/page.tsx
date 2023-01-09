import PostPage from "../../components/ProductSlugPage";
import { getAllPostsSlugs, getProductBySlug } from "../../../lib/sanity.client";
import ProductSlugPage from "../../components/ProductSlugPage";

export async function generateStaticParams() {
  return await getAllPostsSlugs();
}

export default async function SlugRoute({
  params,
}: {
  params: { slug: string };
}) {
  // console.log(params);
  const { slug } = params;
  const product = await getProductBySlug(slug);
  return <ProductSlugPage product={product} />;
}

// FIXME: remove the `revalidate` export below once you've followed the instructions in `/pages/api/revalidate.ts`
export const revalidate = 1;
