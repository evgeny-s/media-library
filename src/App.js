import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Content from './containers/Content';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
