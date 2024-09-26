import { defineConfig } from "tinacms";
import { just_a_standard_postFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "65bef851-8727-416b-861f-e43f667cf828", // Get this from tina.io
  token: "1af05a1bce0c29eb51919c67305a2e0f106a8a32", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "_src/pages",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Main Content",
        name: "main_content",
        path: "_src/pages",
        match: {
          include: "**/*",
          exclude: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...just_a_standard_postFields(),
        ],
      },
    ],
  },
});
