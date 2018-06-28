import React from 'react';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';

import './c-graph.scss';

import { data } from '../../data/data';

class Graph extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PieChart width={300} height={300}>
                <Pie
                    dataKey="value"
                    data={data}
                    cx={140}
                    cy={140}
                    innerRadius={60}
                    outerRadius={120}
                    fill="#82ca9d" />
            </PieChart>
        )
    }
}

export default Graph;
