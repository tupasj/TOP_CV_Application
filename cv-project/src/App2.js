import React from "react";
import PersonalInfo from "./components/PersonalInfo";
import Section2 from "./components/Section2";

const App2 = () => {
  return (
    <div className="app">
      <PersonalInfo />
      <Section2 title="skills" type="list" elementQuantity="4" />
      <Section2 title="work-experience" elementQuantity="1" />
      <Section2 title="education" elementQuantity="1" />
    </div>
  );
};

export default App2;
