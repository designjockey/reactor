import React from 'react';

class Hello extends React.Component {
  render() {
    return (
      <h1 ref={node => this.heading = node}>Hello World</h1>
    );
  }
}

export default Hello;