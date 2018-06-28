import React from 'react';
import ReactDOM from 'react-dom';

import './src/styles/main.scss';

import Form from './src/components/Form/Form';
import Graph from './src/components/Graph/Graph';

const Layout = (data) => {
  return (
    <div className="container">
      <Form />
      <Graph />
    </div>
  )
}

ReactDOM.render(<Layout />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
