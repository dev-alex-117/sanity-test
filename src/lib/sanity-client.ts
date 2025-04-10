import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "tmgo6aq6",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: "skYbJujnOIi8SmYeCeY9FjcXHrAwEscCaDMhmweprT3vsuGQz92ftlEg1ea2tbBfLj08cqEBmN8gNk1vh0I2rDuddFMmnSk6K6ShMnx5ubZYeCo1ZmPCNIeEmhuFewDq6pJIOCuMPRX3bo8TDkV3JfrPXAQ5TN4Im9hQ6fku4AxP7gZQpyRd"
});
