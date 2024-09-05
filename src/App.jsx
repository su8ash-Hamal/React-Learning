import React from "react";
import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <Button title={"Ashish"} isDark={true} />
      <Button title={"Manoj"} />
      <Button title={"Aman"} />
      <Button title={"Babin"} isDark={true} />
    </div>
  );
};

export const Riwaj = () => {
  return <div>Riwaj</div>;
};

export default App;
