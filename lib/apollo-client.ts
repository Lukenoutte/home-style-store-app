import { hygraphUrl, hygraphToken } from "@/config/envs";
import { ApolloClient, InMemoryCache, ApolloLink, createHttpLink } from '@apollo/client';

if (!hygraphUrl || !hygraphToken) throw new Error("Api envs not loaded!")

const httpLink = createHttpLink({
  uri: hygraphUrl,
});

const authLink = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        authorization: hygraphToken ? `Bearer ${hygraphToken}` : ''
      }
    });
    return forward(operation);
  });

export default new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});