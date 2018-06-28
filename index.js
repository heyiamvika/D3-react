import React from 'react';
import ReactDOM from 'react-dom';

import './src/styles/main.scss';

import Form from './src/components/Form/Form';
import Chart from './src/components/Chart/Chart';

const Layout = (data) => {
  return (
    <div className="Chart">
      <div className="container">
        <Form />
        <Chart />
      </div>
    </div>
  )
}

ReactDOM.render(<Layout />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
