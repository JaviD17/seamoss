import Link from "next/link";
import { getAllPosts } from "../../lib/sanity.client";
import Card from "../components/Card";

export default async function BlogPage() {
  const posts = await getAllPosts();
  // console.log(posts[0].body[0].children);
  // console.log(posts);
  return (
      <ul className="grid grid-cols-3 gap-4">
        {posts.map((post: any) => (
          <li key={post._id}>
            <Link href={`/blog/${post.slug}`}>
              <Card post={post} />
            </Link>
          </li>
        ))}
      </ul>
  );
}

// FIXME: remove the `revalidate` export below once you've followed the instructions in `/pages/api/revalidate.ts`
export const revalidate = 1;
