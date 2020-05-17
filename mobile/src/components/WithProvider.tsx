import React, { Component, ComponentClass } from 'react';
import { ApolloProvider } from 'react-apollo';

import { client } from '../graphql';

const WithProvider = (WrappedComponent: ComponentClass) => {
  return class Cp extends Component<Record<string, any>> {
    public render() {
      return (
        <ApolloProvider client={client}>
          <WrappedComponent {...this.props} />
        </ApolloProvider>
      );
    }
  };
};

export default WithProvider;
