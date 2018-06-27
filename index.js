import React from 'react';
import ReactDOM from 'react-dom';

import './src/styles/main.scss';

import Form from './src/components/Form/Form'

const Chart = (data) => {
  return (
    <div className="Chart">
      <div className="container">
        <Form />
        <div className="chart">
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<Chart />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
