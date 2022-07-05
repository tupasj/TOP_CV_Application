import React from "react";
import SkillColumn2 from "./SkillColumn2";
import DivSet2 from "./DivSet2";

const Contents2 = (props) => {
  const { editing, className, type, quantity, title } = props;
  const numbers = [];
  for (let i = 0; i < quantity; i++) {
    numbers.push(i);
  }

  if (type === "list") {
    return (
      <div className={className}>
        {numbers.map((number) => (
          <SkillColumn2 key={number} editing={editing} type={type} />
        ))}
      </div>
    );
  } else {
    return numbers.map((number) => (
      <DivSet2
        key={number}
        editing={editing}
        quantity={quantity}
        title={title}
      />
    ));
  }
};

export default Contents2;
