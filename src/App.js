import React, { Component } from 'react';
import Home from './page';
import Project from './page/project/ProjectAdd';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component{

  renderRouter(){
    return (
      <Switch>
        <Route exact path="/"  component={Home} />
        <Route path="/project/add" component={Project} />
      </Switch>
    )
  }

  render(){
    return (
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    );
  }
}

export default App
