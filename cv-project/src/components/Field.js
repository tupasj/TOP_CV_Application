import React, { Component } from 'react';

class Field extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textContent: this.props.defaultText
        }
    }

    setText = (input) => {
        this.setState({
            textContent: ''
        })
    }

    render() {
        const {text} = this.state;

        return <div>{text}</div>
    }
}

export default Field;
