import React from 'react';

import './c-chart.scss';

import { math } from '../../js/math';

class Chart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(math());

        return (
            <div className="c-chart">
            </div>
        )
    }
}

export default Chart;