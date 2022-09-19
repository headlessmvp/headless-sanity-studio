import { BsSortNumericDownAlt } from "react-icons/bs"

export default {
  name: "size",
  title: "Size",
  description: "Sizes of items",
  type: "document",
  icon: BsSortNumericDownAlt,
  fields: [
    {
      name: "number",
      title: "Number",
      type: "number",
      validation: (rule) => rule.required(),
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    },
  ],
  orderings: [
    {
      title: "Number, Ascending",
      name: "numberAsc",
      by: [{ field: "number", direction: "asc" }],
    },
  ],
}
