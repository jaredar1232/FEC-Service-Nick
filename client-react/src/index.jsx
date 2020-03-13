import React from 'react';
import ReactDOM from 'react-dom';

import SideBar from './components/sidebar/SideBar.jsx'
import NykeMain from './components/NykeMain/NykeMain.jsx'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'feed'
    };

  }


  render() {
    return (
      <div id='base_nl'>
        <NykeMain />
        <SideBar />
      </div>
    );
  }
}




ReactDOM.render(<App />, document.getElementById('app'));