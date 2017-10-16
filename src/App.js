import React, {Component} from 'react';
import './App.css';
import VaultLink from './VaultLink';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Hog Vault</h2>
        </div>

        <div className="info">
          <p>Please select from the vaults below to contribute</p>
        </div>

        <div className="vaults">
          <VaultLink description={"Titan team breakfast"} amount={34.50} />
          <VaultLink description={"Birthday cake"} amount={5.00} />
          <VaultLink description={"Friday Beer"} amount={150.50} />
          <VaultLink description={"Save the Penguins"} amount={102} />
          <VaultLink description={"Slush Fund"} amount={340.22} />
        </div>
      </div>
    );
  }
}

export default App;
