import React from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

class BoxList extends React.Component {
  render() {
    return (
      <div>
        <h1>Box List</h1>
        <Box />
        <NewBoxForm />
      </div>
    );
  }
}
export default BoxList;
