import React, { useState } from "react";
import FieldsetEditable2 from "./FieldsetEditable2";
import Fieldset2 from "./Fieldset2";

const SkillColumn2 = (props) => {
  const editing = props.editing;
  const keyValues = ["1", "2", "3", "4"];

  const [contentsText, setContentsText] = useState([
    "Skill 1",
    "Skill 2",
    "Skill 3",
    "Skill 4",
  ]);
  const handleChange = (e) => {
    // setContentsText(e.target.value);
  }
  
  return editing ? (
    <FieldsetEditable2
      editing={editing}
      keyValues={keyValues}
      contentsText={contentsText}
      onSkillEdit={handleChange}
    />
  ) : (
    <Fieldset2
      editing={editing}
      keyValues={keyValues}
      contentsText={contentsText}
    />
  );
};

export default SkillColumn2;
