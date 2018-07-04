import React from 'react';

class Label extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ name: this.props.content.name, value: event.target.value });
    }

    render() {
        return (
            <label onChange={this.props.onChange(this.state.name, this.state.value)}>
                <span>{this.props.content.name}</span>
                <span>{this.props.content.minValue}</span>
                <input
                    type="range"
                    min={this.props.content.minValue}
                    max={this.props.content.maxValue}
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <span>{this.props.content.maxValue}</span>
            </label>
        )
    }
}

export default Label;