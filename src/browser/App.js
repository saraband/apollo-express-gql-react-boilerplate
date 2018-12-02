import React from 'react';
import styled from 'styled-components';
import {
  Switch,
  Route
} from 'react-router-dom';

import Layout from 'LAYOUTS/default';
import Routes from 'ROUTES';

export default class App extends React.Component {
  render () {
    return(
      <Layout>
        <Switch>
          <Route exact path={Routes.HOME} component={() => <h3>Home</h3>} />
          <Route component={() => <h3>404: Page not found</h3>} />
        </Switch>
      </Layout>
    );
  }
}