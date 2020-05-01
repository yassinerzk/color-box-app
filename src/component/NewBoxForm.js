import React from "react";
import uuid from "react-uuid";

class NewBoxForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { background: "", height: "", width: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    const newbox = { ...this.state, id: uuid() };
    this.props.addBox(newbox);
    this.setState({ background: "", height: "", width: "" });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="width">Width</label>
            <input
              name="width"
              type="text"
              value={this.state.width}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="height">Height</label>
            <input
              name="height"
              type="text"
              value={this.state.height}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="background">Background</label>
            <input
              name="background"
              type="text"
              value={this.state.background}
              onChange={this.handleChange}
            />
          </div>
          <button>Add box!</button>
        </form>
      </div>
    );
  }
}
export default NewBoxForm;
