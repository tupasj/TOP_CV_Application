import React from "react";

const Heading2 = (props) => {
    const editing = props.editing;
    const title = props.title;
    const toggleEditing = props.onClick;

  return (
    <div className={`${title}-heading`}>
      {editing ? (
        <button className="edit-btn" onClick={toggleEditing}>
          Finish editing
        </button>
      ) : (
        <button className="edit-btn" onClick={toggleEditing}>
          Edit
        </button>
      )}
      <h2>{title}</h2>
      <div className="divider"></div>
    </div>
  );
};

export default Heading2;
