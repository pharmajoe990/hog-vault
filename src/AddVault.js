import React from 'react';
import { Grid, Form, FormGroup, ControlLabel, FormControl, Col, Button, Row, PageHeader } from 'react-bootstrap';

const AddVault = () => (
<Grid>

  <Row>
    <PageHeader>Add a new Vault
      <br />
      <small>Fill in the details and hit Create to add a new Vault</small>
    </PageHeader>
  </Row>

  <Form horizontal>
    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Email
      </Col>
      <Col sm={10} lg={4}>
        <FormControl type="email" placeholder="Email" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalDescription">
      <Col componentClass={ControlLabel} sm={2}>
        Description
      </Col>
      <Col sm={10} lg={4}>
        <FormControl type="text" placeholder="Vault Description" />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={8} lg={3}>
        <Button type="submit" bsStyle="primary">Create</Button>
      </Col>
      <Col lg={2}>
        <Button href="/" bsStyle="danger">Cancel</Button>
      </Col>
    </FormGroup>
  </Form>
</Grid>
);

export default AddVault;
