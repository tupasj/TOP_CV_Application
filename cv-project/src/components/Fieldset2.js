import React from "react";

const Fieldset2 = (props) => {
  const contentsText = props.contentsText;
  const keyValues = props.keyValues;
  const fields = contentsText.map((text, index) => (
    <li key={keyValues[index]} className={text ? "field" : "hidden"}>
      {text}
    </li>
  ));

  return (
    <div className="fieldset">
      <ul>{fields}</ul>
    </div>
  );
};

export default Fieldset2;