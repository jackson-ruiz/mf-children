import React from "react";
import SamplePage from "./pages/SamplePage";
const App = () => {
  return (
    <>
      <h1 data-testid="greeting">Sample Page</h1>
      <p>Environment Variable = [ {process.env.VARIABLE_SAMPLE} ]</p>
      <SamplePage />
    </>
  );
};

export default App;
