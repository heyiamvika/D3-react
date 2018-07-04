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
        console.log(this.state);
    }

    getValueChange(name, value) {
        this.setState({ name: name, value: value });
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