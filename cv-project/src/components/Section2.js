import React, { useState } from "react";
import lowercaseFirstLetter from "./utility/lowercaseFirstLetter";
import Heading2 from "./Heading2";
import Contents2 from "./Contents2";

const Section = (props) => {
  const title = props.title;
  const type = props.type;
  const quantity = props.elementQuantity;

  const [editing, setEditing] = useState(false);
  const toggleEditing = () => {
    if (editing) {
      setEditing(false);
    } else if (!editing) {
      setEditing(true);
    }
  };

  return (
    <section className={lowercaseFirstLetter(title)}>
      <Heading2
        editing={editing}
        className={`${title}-heading`}
        onClick={toggleEditing}
        title={title}
      />
      <Contents2
        editing={editing}
        className={`${title}-contents`}
        type={type}
        quantity={quantity}
      />
    </section>
  );
};

export default Section;