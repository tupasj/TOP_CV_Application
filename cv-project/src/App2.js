import React from "react";
import PersonalInfo from "./components/PersonalInfo";
import Section2 from "./components/Section2";

const App2 = () => {
  return (
    <div className="app">
      <PersonalInfo />
      <Section2 title="skills" type="list" elementQuantity="4" />
    </div>
  );
};

export default App2;
