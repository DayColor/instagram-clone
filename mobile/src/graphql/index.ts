import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();

const link = new HttpLink({ uri: 'http://10.0.2.2:4000/api/graphiql' });

export const client = new ApolloClient({
  link,
  cache,
});
