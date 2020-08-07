import React from "react";

class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default Footer;
