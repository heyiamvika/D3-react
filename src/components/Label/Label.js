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
                <span className="input-heading">{this.props.content.name}</span>
                <div className="input-wrapper">
                    {/* <span className="round">{this.props.content.minValue}</span> */}
                    <input
                        type="range"
                        min={this.props.content.minValue}
                        max={this.props.content.maxValue}
                        value={this.state.value}
                        step="0.01"
                        onChange={(e) => this.props.getValueChange(this.props.content.name, e.target.value)}
                    />
                    {/* <span className="round">{this.props.content.maxValue}</span> */}
                </div>
            </label>
        )
    }
}

export default Label;