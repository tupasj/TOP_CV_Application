import React from "react";

const FieldsetEditable2 = (props) => {
  const keyValues = props.keyValues;
  const onSkillEdit = props.onSkillEdit;
  const inputs = props.contentsText.map((text, index) => (
    <input key={keyValues[index]} value={text} onChange={onSkillEdit}></input>
  ));

  return <form className="fieldset-editable">{inputs}</form>;
};

export default FieldsetEditable2;