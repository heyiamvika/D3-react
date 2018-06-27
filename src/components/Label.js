import React from 'react';

class Label extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <label>
                <span>{this.props.content.name}</span>
                <span>{this.props.content.minValue}</span>
                <input type="range" min={this.props.content.minValue} max={this.props.content.maxValue} value={this.props.content.defaultValue} />
                <span>{this.props.content.maxValue}</span>
            </label>
        )
    }
}

export default Label;