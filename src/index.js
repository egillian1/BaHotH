import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class Welcome extends React.Component {
  render() {
    return (
      <div class="welcome">
        <h1>React start page</h1>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Welcome />,
  document.getElementById('root')
);
