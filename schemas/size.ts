import { defineField, defineType } from "sanity";

export default defineType({
  name: "size",
  title: "Size",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "quantity",
      title: "Quantity",
      type: "number",
    }),
  ],
});
