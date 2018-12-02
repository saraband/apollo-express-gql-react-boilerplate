import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import {
  Switch,
  Route
} from 'react-router-dom';

import Layout from 'LAYOUTS/default';
import Routes from 'ROUTES';

const Hello = () => (
  <Query query={gql`
      {
        hello
      }
    `}
    >
    {({ data, loading, error }) => {
      if (error) return <h3>Error</h3>;
      if (loading) return <h3>Loading...</h3>;

      return <h3>{data.hello}</h3>;
    }}
  </Query>
);

export default class App extends React.Component {
  render () {
    return(
      <Layout>
        <Switch>
          <Route exact path={Routes.HOME} component={Hello} />
          <Route component={() => <h3>404: Page not found</h3>} />
        </Switch>
      </Layout>
    );
  }
}