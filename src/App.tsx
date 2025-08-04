import AppWrapper from "./components/appWrapper";
import React from "react";

const App = () => (
  <AppWrapper>
    <div style={{ color: "white" }}>Ball sort Puzzle</div>
  </AppWrapper>
);

export default React.memo(App);
