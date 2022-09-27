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
      name: "details",
      title: "Details",
      type: "text",
    },
    {
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
    {
      name: "caption",
      title: "Caption",
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
      name: "sizes",
      title: "Sizes",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "size",
          },
        },
      ],
      validation: (rule) => rule.required(),
    },
    {
      name: "colors",
      title: "Colors",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "color",
          },
        },
      ],
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
