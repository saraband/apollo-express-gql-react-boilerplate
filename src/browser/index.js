import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost"
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import App from './App';
import store from 'STORE';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
});

const render = (App) => {
  ReactDOM.render(
    <ApolloProvider client={apolloClient}>
      <StoreProvider store={store}>
        <Router>
          <App />
        </Router>
      </StoreProvider>
    </ApolloProvider>,
    document.getElementById('root')
  );
}

render(App);

/* HOT MODULE RELOADING */
if (module.hot) {
  module.hot.accept('./App', () => {
    render(require('./App'));
    console.log('App updated successfully.');
  });
}