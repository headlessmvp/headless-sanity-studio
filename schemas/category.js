import { BsSquareHalf } from "react-icons/bs"

export default {
  name: "category",
  title: "Category",
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
      name: "slug",
      title: "Slug",
      type: "string",
      options: {
        source: "Name",
      },
      validation: (rule) => rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (rule) => rule.required(),
    },
    {
      name: "subCategories",
      title: "Sub Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "subCategory",
          },
        },
      ],
    },
  ],
}
