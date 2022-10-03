import { BsSquareHalf } from "react-icons/bs"

export default {
  name: "collection",
  title: "Collection",
  description: "",
  type: "document",
  icon: BsSquareHalf,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    },

    {
      name: "label",
      title: "Label",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "products",
      title: "Products",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "product",
          },
        },
      ],
    },
  ],
}
