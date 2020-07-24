import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import SongList from "./components/SongList";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  connectToDevTools: true
});

const Root = () => {
  return <SongList />;
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>,
  document.querySelector("#root")
);
