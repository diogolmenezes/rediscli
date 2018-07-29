import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Stage from './components/stage';
import MasterPage from './components/masterpage';
import DataSourceManager from './components/dataSourceManager';

import './css/pure-min.css';
import './css/grids-responsive-min.css';
import './css/style.css';

import DataSourceService from './services/dataSourceService';

const dataSourceService = new DataSourceService();

class App extends Component {

  render() {
    return (
      <Switch>           
          <Route exact path="/">
            <MasterPage dataSourceService={dataSourceService}>
                <Stage dataSourceService={dataSourceService} />
            </MasterPage>
          </Route>
          <Route exact path="/connections">
            <MasterPage dataSourceService={dataSourceService}>
                <DataSourceManager dataSourceService={dataSourceService} />
            </MasterPage>
          </Route>
      </Switch>
    );
  }
}

export default App;
