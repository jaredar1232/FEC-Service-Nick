import React from 'react';
import ReactDOM from 'react-dom';




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'feed'
    };

  }


  render() {
    return (
      <div>
        <h1>Hi</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('blogmodo'));