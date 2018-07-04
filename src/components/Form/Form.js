import React from 'react';

import Label from '../Label/Label';
import { inputs } from '../../data/inputs';

import './c-form.scss';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }

        this.getValueChange = this.getValueChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        // The mistake was the following:
        console.log(this.state);
    }

    getValueChange(name, value) {
        console.log(value);
        this.state[name] = value;
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