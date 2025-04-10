import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "tmgo6aq6",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
