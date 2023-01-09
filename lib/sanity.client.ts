// import "server-only";

import {
  type Post,
  type Product,
  indexQuery,
  postAndMoreStoriesQuery,
  postBySlugQuery,
  postSlugsQuery,
  productQuery,
  productSlugsQuery,
  productBySlugQuery,
} from "./sanity.queries";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID; // "pv8y60vp"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET; // "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION; // "2022-11-16"

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: string) {
  return builder.image(source);
}

export async function getAllProducts(): Promise<Product[]> {
  if (client) {
    return (await client.fetch(productQuery)) || [];
  }
  return [];
}

export async function getAllPosts(): Promise<Post[]> {
  if (client) {
    return (await client.fetch(indexQuery)) || [];
  }
  return [];
}

export async function getAllProductsSlugs(): Promise<Pick<Product, "slug">[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(productSlugsQuery)) || [];
    return slugs.map((slug) => ({ slug }));
  }
  return [];
}

export async function getAllPostsSlugs(): Promise<Pick<Post, "slug">[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(postSlugsQuery)) || [];
    return slugs.map((slug) => ({ slug }));
  }
  return [];
}

export async function getProductBySlug(slug: string): Promise<Product> {
  if (client) {
    return (await client.fetch(productBySlugQuery, { slug })) || ({} as any);
  }
  return {} as any;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  if (client) {
    return (await client.fetch(postBySlugQuery, { slug })) || ({} as any);
  }
  return {} as any;
}

// export async function getPostAndMoreStories(
//   slug: string,
//   token?: string | null
// ): Promise<{ post: Post; morePosts: Post[] }> {
//   if (projectId) {
//     const client = createClient({
//       projectId,
//       dataset,
//       apiVersion,
//       useCdn,
//       token: token || undefined,
//     });
//     return await client.fetch(postAndMoreStoriesQuery, { slug });
//   }
//   return { post: null, morePosts: [] };
// }
