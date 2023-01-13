import { groq } from "next-sanity";

const productFields = groq`
  _id,
  title,
  description,
  flavor,
  launchedAt,
  "mainImage": mainImage.asset,
  productImages,
  sizes,
  "slug": slug.current,
  body,
  nutrition
  `;
const postFields = groq`
  _id,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`;

export const productQuery = groq`
*[_type == "product"] | order( date desc, _updatedAt desc) {
  ${productFields}
}`;
// export const indexQuery = groq`
// *[_type == "post"] | order(date desc, _updatedAt desc)`;
export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
  "mainImage": mainImage.asset
}`;

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`;

export const productSlugsQuery = groq`
*[_type == "product" && defined(slug.current)][].slug.current`;

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const productBySlugQuery = groq`
*[_type == "product" && slug.current == $slug][0] {
  ${productFields}
}`;

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
    ${postFields}
    body
}
`;

export interface Author {
  name?: string;
  picture?: any;
}

export interface Post {
  _id: string;
  title?: string;
  coverImage?: any;
  date?: string;
  excerpt?: string;
  author?: Author;
  slug?: string;
  content?: any;
  body?: any;
}

export interface Product {
  _id: string;
  title: string;
  description: [];
  flavor: string;
  launchedAt: string;
  mainImage: {};
  productImages: [];
  sizes: [];
  slug: string;
  body: string;
  nutrition: string;
}
