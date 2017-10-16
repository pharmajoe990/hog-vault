import React from 'react';
import './App.css';
import VaultLink from './VaultLink';
import AddVault from './AddVault'
import { Grid, PageHeader, Row, Col, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const VaultList = () => (
  <div>
    <Grid>
      <Row>
        <PageHeader>Welcome to Hog Vault
          <br />
          <small>Please select from the vaults below to contribute</small>

          <span className="pull-right"><Button bsStyle="success" bsSize="large" href="/AddVault">Create new vault</Button></span>
        </PageHeader>
      </Row>
      <Row>
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
      </Row>
    </Grid>
  </div>
);

const HogVault= () => (
  <Router>
    <div>
      <Route exact path="/" component={VaultList}/>
      <Route path="/AddVault" component={AddVault}/>
    </div>
  </Router>
);

export default HogVault;
