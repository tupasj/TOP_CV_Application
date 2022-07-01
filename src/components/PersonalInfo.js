import React, { Component } from "react";
import PersonalInfoContents from "./PersonalInfoContents";
import PersonalInfoEditableContents from "./PersonalInfoEditableContents";

class Section extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      headerText: "Some name",
      subheaderText: "Occupation",
      email: "Email",
      phone: "Phone #",
      summary: "Write your summary here.",
    };

    this.onEditStart = this.onEditStart.bind(this);
    this.onEditFinish = this.onEditFinish.bind(this);
    this.onH1Edit = this.onH1Edit.bind(this);
    this.onH2Edit = this.onH2Edit.bind(this);
    this.onFieldEmailEdit = this.onFieldEmailEdit.bind(this);
    this.onFieldPhoneEdit = this.onFieldPhoneEdit.bind(this);
    this.onFieldSummaryEdit = this.onFieldSummaryEdit.bind(this);
  }

  onEditStart() {
    this.setState({
      editing: true,
    });
  }

  onEditFinish() {
    this.setState({
      editing: false,
    });
  }

  onH1Edit(input) {
    this.setState({
      headerText: input.target.value,
    });
  }

  onH2Edit(input) {
    this.setState({
      subheaderText: input.target.value,
    });
  }

  onFieldEmailEdit(input) {
    this.setState({
      email: input.target.value,
    });
  }

  onFieldPhoneEdit(input) {
    this.setState({
      phone: input.target.value,
    });
  }

  onFieldSummaryEdit(input) {
    this.setState({
      summary: input.target.value,
    });
  }

  render() {
    const { editing } = this.state;
    const { headerText, subheaderText, email, phone, summary } = this.state;
    const keyValues = ["1", "2", "3", "4", "5"];
    const textContents = [headerText, subheaderText, email, phone, summary];
    const onFieldEditMethods = [
      this.onH1Edit,
      this.onH2Edit,
      this.onFieldEmailEdit,
      this.onFieldPhoneEdit,
      this.onFieldSummaryEdit,
    ];

    return (
      <section className="personal-info">
        {editing ? (
          <PersonalInfoEditableContents
            keyValues={keyValues}
            textContents={textContents}
            onEditFinish={this.onEditFinish}
            onFieldEditMethods={onFieldEditMethods}
          />
        ) : (
          <PersonalInfoContents
            keyValues={keyValues}
            textContents={textContents}
            onEditStart={this.onEditStart}
          />
        )}
      </section>
    );
  }
}

export default Section;