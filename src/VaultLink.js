import React from 'react';
import { Image, Panel, Button } from 'react-bootstrap';

const VaultLink = (props) => (
  <Panel>
    <Image src="http://68.media.tumblr.com/fba67173ee0e128fd6ff707bf3558962/tumblr_nyp9p8eYus1s2ppeco1_500.gif"
           width="50px"
           height="50px"
           rounded />
    <h3>{props.description}</h3>
    <p>Raised ${props.amount}
      <span className="pull-right"><Button bsStyle="primary" bsSize="xsmall">Contribute</Button></span>
    </p>
  </Panel>
);

export default VaultLink;