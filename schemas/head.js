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
      name: "country",
      title: "Country",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "flag",
      title: "Flag",
      type: "image",
      validation: (rule) => rule.required(),
    },
    {
      name: "headline",
      title: "Headline",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "subHeading",
      title: "Sub Heading",
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
            type: "headImage",
          },
        },
      ],
      validation: (rule) => rule.required(),
    },

    {
      name: "url",
      title: "URL",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "bannerHeading",
      title: "Banner Heading",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "bannerText",
      title: "Banner Text",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "bannerImage",
      title: "Banner Image",
      type: "image",
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
    {
      name: "favourites",
      title: "Favourites",
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
    {
      name: "saleText",
      title: "Sale Section Text",
      type: "string",
      validation: (rule) => rule.required(),
    },
  ],
}
