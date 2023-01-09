import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "productImages",
      title: "ProductImages",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "flavor",
      title: "Flavor",
      type: "string",
    }),
    defineField({
      name: "launchedAt",
      title: "Launched At",
      type: "datetime",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "string" }],
      description: "Name 3 catchy touch points 10 words or less",
    }),
    // defineField({
    //   name: "sizes",
    //   title: "Sizes",
    //   type: "array",
    //   of: [{ type: "string" }],
    //   options: {
    //     list: [
    //       { title: "8oz", value: "8oz" },
    //       { title: "16oz", value: "16oz" },
    //       { title: "32oz", value: "32oz" },
    //     ],
    //   },
    // }),
    defineField({
      name: "sizes",
      title: "Sizes",
      type: "array",
      of: [{ type: "size" }],
    }),
  ],
});
