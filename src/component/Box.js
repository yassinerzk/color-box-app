import React from "react";

class Box extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            height: `${this.props.height}em`,
            width: `${this.props.width}em`,
            background: this.props.background,
          }}
        ></div>
        <button onClick={this.props.removeBox}>-</button>
      </div>
    );
  }
}
export default Box;
