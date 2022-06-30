import React, { Component } from "react";
import DefaultFieldset from "./Fieldset";
import EditableFieldset from "./EditableFieldset";

class Fieldsets extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            editing: props.editing
        }
    }

    render() {
        const { editing } = this.state;
        const fieldset = editing ? <EditableFieldset /> : <DefaultFieldset />;

        return fieldset;
      }
}

export default Fieldsets;