import React from "react";
import Fieldset2 from "./Fieldset2";

const DivSet2 = (props) => {
  const title = props.title;
  const editing = props.editing;
  const educationText = ["Instiution", "Title of study", "Date of study"];
  const workText = ["Company", "Position title", "Main tasks", "Date range"];
  const keyValues1 = ["1", "2", "3", "4"];
  const keyValues2 = ["1", "2", "3"];

  if (title === "education") {
    return <Fieldset2 keyValues={keyValues1} contentsText={educationText} />;
  } else {
    return <Fieldset2 keyValues={keyValues2} contentsText={workText} />;
  }
};

export default DivSet2;