import React from 'react';
import FontAwesome from 'react-fontawesome';

function VaultLink(props) {
    return (
      <div className="vault">
        <div className="description">
          <h3>{props.description}</h3>
        </div>
          <FontAwesome
            name='credit-card-alt'
            size='4x'
          />
        <div className="info">Raised ${props.amount}</div>
      </div>
    );
}

export default VaultLink;