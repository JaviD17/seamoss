import PostPage from "../../components/PostPage";
import { getAllPostsSlugs, getPostBySlug } from "../../../lib/sanity.client";

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
  const post = await getPostBySlug(slug);
  return <PostPage post={post} />;
}

// FIXME: remove the `revalidate` export below once you've followed the instructions in `/pages/api/revalidate.ts`
export const revalidate = 1;
