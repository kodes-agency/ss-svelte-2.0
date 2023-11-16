import { PUBLIC_API_URL } from "$env/static/public";

/* Important to import from index.js to solve Module issues */
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core/index.js";

/**
 Returns a GraphQL Client that is ready to use.
*/
export function getClient() {
  const httpLink = new HttpLink({
    uri: PUBLIC_API_URL,
  });

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache({
      /* Workaround to deal with query errors that can appear */
      addTypename: false 
    }),
  });

  return client;
}