import React from 'react';
import './nav.css';

class nav extends React.Component{
  constructor(){
    super();
    this.state ={ 
      name: 'Startvest'
    }
  }
  render(){
    return(
      <div className="App">
        <header className="App-header">
          Welcome to Startvest     
        </header>
      </div>
    );
  }
}

export default nav;
// npm run client