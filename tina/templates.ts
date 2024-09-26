import type { TinaField } from "tinacms";
export function just_a_standard_postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "datetime",
      name: "date_modified",
      label: "Date Modified",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "page_type",
      label: "Page Type",
      options: ["standard"],
    },
  ] as TinaField[];
}
