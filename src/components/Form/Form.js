import React from 'react';

import Label from '../Label/Label';
import { inputs } from '../../data/inputs';

import './c-form.scss';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        console.log('change');
    }

    render() {
        const labelsArray = [];

        const label = inputs.map(element => {
            labelsArray.push(<Label content={element} onChange={this.handleChange} />);
        });

        return (
            <form className="c-form" onChange={this.handleChange()}>
                {labelsArray}
            </form>
        )
    }
}

export default Form;