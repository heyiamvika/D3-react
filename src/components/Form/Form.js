import React from 'react';

import Label from '../Label/Label';
import { data } from '../../data/data';

import './form.scss';

class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const labelsArray = [];

        const label = data.map(element => {
            labelsArray.push(<Label content={element} />);
        });

        return (
            <form className="c-form">
                {labelsArray}
            </form>
        )
    }
}

export default Form;