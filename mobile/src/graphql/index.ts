import AsyncStorage from '@react-native-community/async-storage';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import { authToken } from '../utils/constants';

let token: string | null;

const getToken = async () => {
  if (token) {
    return token;
  }

  token = await AsyncStorage.getItem(authToken);
  return token;
};

const cache = new InMemoryCache();

const httpLink = createHttpLink({ uri: 'http://10.0.2.2:4000/api/graphiql' });

const authLink = setContext(async (_, { headers }) => {
  await getToken();

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});
