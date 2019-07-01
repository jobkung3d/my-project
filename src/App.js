import React, { Component } from 'react';
import Home from './page';
import ProjectAdd from './page/project/ProjectAdd';
import ProjectEdit from './page/project/ProjectEdit';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component{
  renderRouter(){
    return (
      <Switch>
        <Route exact path="/"  component={Home} />
        <Route path="/project/add" component={ProjectAdd} />
        <Route path="/project/edit/:id" component={ProjectEdit} />
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
