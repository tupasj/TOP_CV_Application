const DefaultFieldset = () => {
  const textContents = ["Email", "Phone #", "Write your summary here."];
  const fields = textContents.map((text) => (
    <div key={text} className="field">{text}</div>
  ));

  return (
    <div className="default-fieldset">
      {fields}
    </div>
  );
};

export default DefaultFieldset;
