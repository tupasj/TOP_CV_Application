import React, { Component } from "react";
import PersonalInfo from "./components/PersonalInfo";

class App extends Component {
  render() {
    return (
      <div className="app">
        <PersonalInfo />
        <section>
          <div className="first-line">
            <h2>Skills</h2>
            <button>Edit</button>
          </div>
          <div className="divider"></div>
          <div className="lists-container">
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
          </div>
        </section>
        <section>
          <div className="first-line">
            <h2>Work Experience</h2>
            <button>Edit</button>
          </div>
          <div className="divider"></div>
          <div className="field">Company</div>
          <div className="field">Position title</div>
          <div className="field">Main tasks</div>
          <div className="field">Date range</div>
        </section>
        <section>
          <div className="first-line">
            <h2>Education</h2>
            <button>Edit</button>
          </div>
          <div className="divider"></div>
          <div className="field">Institution</div>
          <div className="field">Title of study</div>
          <div className="field">Date of study</div>
        </section>
      </div>
    );
  }
}

export default App;