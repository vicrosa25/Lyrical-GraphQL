import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache()
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <div>Lyrical</div>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
