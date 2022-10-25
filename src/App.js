import React from "react";
const App = () => {
  return (
    <>
      <h1 data-testid="greeting">Sample Page</h1>
      <p>Environment Variable = [ {process.env.VARIABLE_SAMPLE} ]</p>
    </>
  );
};

export default App;
