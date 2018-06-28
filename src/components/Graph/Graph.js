import React from 'react';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';

import './c-graph.scss';

import { math } from '../../js/math';

class Graph extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const inputData = math();

        return (
            <div className="c-graph">
                <PieChart width={300} height={300}>
                    <Pie
                        dataKey="value"
                        data={inputData}
                        cx={140}
                        cy={140}
                        innerRadius={60}
                        outerRadius={120}
                        fill="#82ca9d" />
                </PieChart>
            </div>
        )
    }
}

export default Graph;
