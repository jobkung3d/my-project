import React, { Component } from 'react';
import Home from './page';
import Project from './page/project/ProjectAdd';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import firebase from 'firebase';
class App extends Component{
  constructor(props){
    super(props);
    var firebaseConfig = {
      apiKey: "AIzaSyCl12yGEWjb0ezkOxH9-PJt7GoizBsKHMY",
      authDomain: "disco-domain-120215.firebaseapp.com",
      databaseURL: "https://disco-domain-120215.firebaseio.com",
      projectId: "disco-domain-120215",
      storageBucket: "disco-domain-120215.appspot.com",
      messagingSenderId: "916454456383",
      appId: "1:916454456383:web:26462c0981114b73"
    };

    firebase.initializeApp(firebaseConfig);
  }

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
