import React from 'react';

import Label from '../Label/Label';
import { inputs } from '../../data/inputs';

import './c-form.scss';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            values: {}
        }

        this.getValueChange = this.getValueChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        const values = this.state.values;
        console.log(values);
    }

    getValueChange(name, value) {
        this.state.values[name] = value;
    }

    render() {
        return (
            <form className="c-form" onChange={this.handleChange}>
                {inputs.map(element => <Label content={element} getValueChange={this.getValueChange} key={element.name} />)}
            </form>
        )
    }
}

export default Form;