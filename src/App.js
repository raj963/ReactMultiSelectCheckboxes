import React from "react";
import "./styles.css";

import MultiSelect from "./MultiSelect";
import MultiSelectAll from "./MultiSelectAll";

export default function App() {
  return (
    <div className="App">
      <MultiSelect />
      <br />
      <MultiSelectAll />
    </div>
  );
}
