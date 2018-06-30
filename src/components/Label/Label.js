import React from 'react';

class Label extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        this.props.getValueChange(this.state.value);

        return (
            <label>
                <span>{this.props.content.name}</span>
                <span>{this.props.content.minValue}</span>
                <input type="range" min={this.props.content.minValue} max={this.props.content.maxValue} value={this.state.value} onChange={this.handleChange} />
                <span>{this.props.content.maxValue}</span>
            </label>
        )
    }
}

export default Label;