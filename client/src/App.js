import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SongList from "./components/SongList";
import SongCreate from "./components/SongCreate";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact path="/">
          <SongList />
        </Route>
        <Route exact path="/song/new">
          <SongCreate />
        </Route>
      </Router>
    </ApolloProvider>
  );
}

export default App;
