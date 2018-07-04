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

        this.values = [];

        this.handleChange = this.handleChange.bind(this);
        this.getValueChange = this.getValueChange.bind(this);
    }

    handleChange() {
        this.setState({ values: this.values });
        console.log(this.state);
    }

    getValueChange(name, value) {
        if (name, value) {
            // this.vales.forEach(element => console.log(element));
            this.values.push({ name: name, value: value })
        }
    }

    render() {
        return (
            <form className="c-form" onChange={this.handleChange}>
                {inputs.map(element => <Label content={element} onChange={this.getValueChange} key={element.name} />)}
            </form>
        )
    }
}

export default Form;