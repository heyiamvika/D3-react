import React from 'react';

import Label from '../Label/Label';
import { inputs } from '../../data/inputs';

import './c-form.scss';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }

        this.handleChange = this.handleChange.bind(this);
        this.getValueChange = this.getValueChange.bind(this);
    }

    handleChange() {
        console.log(this.state)
    }

    getValueChange(value) {
        this.setState({ value })
    }

    render() {
        const labelsArray = [];

        const label = inputs.map(element => {
            labelsArray.push(<Label content={element} getValueChange={this.getValueChange} />);
        });

        return (
            <form className="c-form" onChange={this.handleChange}>
                {labelsArray}
            </form>
        )
    }
}

export default Form;