import { BsFillImageFill } from "react-icons/bs"

export default {
  name: "social",
  title: "Social",
  description: "This is a social with a link",
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
      name: "url",
      title: "URL",
      type: "string",
      validation: (rule) => rule.required(),
    },
  ],
}
