import React from "react";

export class Clscom extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello World</h2>
        <h2>Hello from the cls component</h2>
        <p> This is the data from class components: {this.props.classdata}</p>
          <p>Some new data here: {this.props.newcomponent}</p>
        <p>The children data: {this.props.children}</p>
      </div>
    );
  }
}
