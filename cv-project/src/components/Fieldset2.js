import React from "react";

const Fieldset2 = (props) => {
  const { contentsText, keyValues, type } = props;
  let fields;

  if (type === "list") {
    fields = contentsText.map((text, index) => (
      <li key={keyValues[index]} className={text ? "field" : "hidden"}>
        {text}
      </li>
    ));
    return (
      <div className="fieldset">
        <ul>{fields}</ul>
      </div>
    );
  } else {
    fields = contentsText.map((text, index) => (
      <div key={keyValues[index]} className="field">
        {text}
      </div>
    ));
    return (
      <div className="fieldset">
        {fields}
      </div>
    );
  }
};

export default Fieldset2;