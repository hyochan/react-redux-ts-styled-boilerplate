import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Intro from '../screen/Intro';
import NotFound from '../screen/NotFound';

class RootStackNavigator extends Component<any> {
  public render() {
    return (
      <BrowserRouter>
        <div style={{ textAlign: 'center' }}>
          <Switch>
            <Route exact={true} path='/' component={Intro} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default RootStackNavigator;
