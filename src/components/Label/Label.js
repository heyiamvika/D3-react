import React from 'react';

class Label extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <label>
                <span>{this.props.content.name}</span>
                <span>{this.props.content.minValue}</span>
                <input
                    type="range"
                    min={this.props.content.minValue}
                    max={this.props.content.maxValue}
                    value={this.state.value}
                    step="0.01"
                    onChange={(e) => this.props.getValueChange(this.props.content.name, e.target.value)}
                />
                <span>{this.props.content.maxValue}</span>
            </label>
        )
    }
}

export default Label;