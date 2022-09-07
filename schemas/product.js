import { MdShoppingCart } from "react-icons/md"

export default {
  name: "product",
  title: "Product",
  description: "",
  type: "document",
  icon: MdShoppingCart,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "color",
      title: "Color",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (rule) => rule.required(),
    },
    {
      name: "currency",
      title: "Currency",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "reference",
      title: "Reference",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "productImage",
          },
        },
      ],
      validation: (rule) => rule.required(),
    },
  ],
}
