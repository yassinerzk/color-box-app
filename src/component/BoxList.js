import React from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

class BoxList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
    };
    this.addBox = this.addBox.bind(this);
  }
  addBox(newBox) {
    this.setState({
      boxes: [...this.state.boxes, newBox],
    });
  }
  removeBox(id) {
    this.setState({
      boxes: this.state.boxes.filter((box) => box.id !== id),
    });
  }
  renderBoxes() {
    return (
      <div>
        {this.state.boxes.map((box) => (
          <Box
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            background={box.background}
            removeBox={() => this.removeBox(box.id)}
          />
        ))}
      </div>
    );
  }
  render() {
    return (
      <div>
        <h1>Box List</h1>
        <NewBoxForm addBox={this.addBox} />
        {this.renderBoxes()}
      </div>
    );
  }
}
export default BoxList;
