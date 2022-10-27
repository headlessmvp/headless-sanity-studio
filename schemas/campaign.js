import { BsSquareHalf } from "react-icons/bs"

export default {
  name: "campaign",
  title: "Campaign",
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
      name: "image",
      title: "Image",
      type: "image",
      validation: (rule) => rule.required(),
    },
  ],
}
