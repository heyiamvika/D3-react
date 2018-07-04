import React from 'react';

class Label extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }

        // this.handleChange = this.handleChange.bind(this);
    }

    // handleChange(e) {
    //     this.setState({})
    // }

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
                    onChange={(e) => this.props.getValueChange({ name: this.props.content.name, value: e.target.value })}
                />
                <span>{this.props.content.maxValue}</span>
            </label>
        )
    }
}

export default Label;