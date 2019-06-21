import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render(message, counter){
    return (
      <div className="container">
        <div className="columns column is-12">
          <h1>Counter : {counter}</h1>
        </div>

        <div className="buttons">
          <button className="button is-primary">+1</button>
          <button className="button is-link">+2</button>
          <button className="button is-info">+3</button>
        </div>

        <div className="buttons">
          <button className="button is-primary">-1</button>
          <button className="button is-link">-2</button>
          <button className="button is-info">-3</button>
        </div>
      </div>
    );  
    
    const mapStateToProps = (state) => {
      return{
        message : 'This is message from mapStateToProps',
        counter : state.counter || 0
      }
    }
  }
}

export default connect({mapStateToProps})(App);
