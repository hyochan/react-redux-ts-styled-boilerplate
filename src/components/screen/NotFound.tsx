import React, { Component } from 'react';
import Button from '../shared/Button';

class NotFound extends Component<any, any> {
  public render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          onClick={() => this.props.history.goBack()}
          txt='back to tab page'
        />
      </div>
    );
  }
}

export default NotFound;
