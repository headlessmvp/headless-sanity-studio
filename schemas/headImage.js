import { BsFillImageFill } from "react-icons/bs"

export default {
  name: "headImage",
  title: "Head Image",
  description: "",
  type: "document",
  icon: BsFillImageFill,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "images",
      title: "Images",
      type: "image",
      validation: (rule) => rule.required(),
    },
  ],
}
