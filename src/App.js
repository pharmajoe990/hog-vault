import React, {Component} from 'react';
import './App.css';
import VaultLink from './VaultLink';
import { Grid, PageHeader, Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Grid>
          <PageHeader>Welcome to Hog Vault
            <br />
            <small>Please select from the vaults below to contribute</small>
          </PageHeader>
          <Grid>
            <Row>
              <Col xs={12} lg={4}><VaultLink description={"Titan team breakfast"} amount={34.50} /></Col>
              <Col xs={12} lg={4}><VaultLink description={"Birthday cake"} amount={5.00} /></Col>
              <Col xs={12} lg={4}><VaultLink description={"Friday Beer"} amount={150.50} /></Col>
            </Row>
            <Row>
              <Col xs={12} lg={4}><VaultLink description={"Save the Penguins"} amount={102} /></Col>
              <Col xs={12} lg={4}><VaultLink description={"Slush Fund"} amount={340.22} /></Col>
            </Row>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
