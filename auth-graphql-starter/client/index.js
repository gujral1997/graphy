import React from 'react';
import ReactDOM from 'react-dom';
import AppolloClient, { ApolloClient } from 'apollo-client'
import {ApolloProvider} from 'react-apollo'

const client = new ApolloClient({
  dataIdFromObject: o => o.id //Every data from backend will be cached here
})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        Auth Starter
      </div>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
