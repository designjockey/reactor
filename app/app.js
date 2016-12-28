import React from 'react';
import ReactDOM from 'react-dom';
import Hello from 'components/Hello';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <Hello />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
