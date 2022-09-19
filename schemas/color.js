import { BsPaintBucket } from "react-icons/bs"

export default {
  name: "color",
  title: "Color",
  description: "Color of item",
  type: "document",
  icon: BsPaintBucket,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "code",
      title: "Hex Code (with #)",
      type: "string",
      validation: (rule) => rule.required(),
    },
  ],
}
