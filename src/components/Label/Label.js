import React from 'react';

class Label extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '1'
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        this.props.onChange();
    }

    render() {
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