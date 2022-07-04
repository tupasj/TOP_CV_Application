import React, { useState } from "react";
import lowercaseFirstLetter from "./utility/lowercaseFirstLetter";
import Heading2 from "./Heading2";

const Section = (props) => {
  const [editing, setEditing] = useState(false);
  const toggleEditing = () => {
    if (editing) {
      setEditing(false);
    } else if (!editing) {
      setEditing(true);
    }
  };

  const title = props.title;

  return (
    <section className={lowercaseFirstLetter(title)}>
      <Heading2 editing={editing} onClick={toggleEditing} title={title} />
    </section>
  );
};

export default Section;
