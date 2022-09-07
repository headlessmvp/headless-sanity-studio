import { BsSquareHalf } from "react-icons/bs"

export default {
  name: "head",
  title: "Head",
  description: "",
  type: "document",
  icon: BsSquareHalf,
  fields: [
    {
      name: "id",
      title: "ID",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "url",
      title: "URL",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "category",
          },
        },
      ],
    },
  ],
}
