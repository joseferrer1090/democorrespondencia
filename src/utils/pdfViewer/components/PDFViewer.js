import React, { Component } from "react";

class PDFViewer extends Component {
  constructor(props) {
    super();
    this.viewerRef = React.createRef();
    this.backend = new props.backend();
  }

  componentDidMount() {
    const { src, width, height } = this.props;
    const element = this.viewerRef.current;

    this.backend.init(src, element, width, height);
  }
  render() {
    return (
      <div
        ref={this.viewerRef}
        id="viewer"
        // style={{
        //   width: `${this.props.width}px !important`,
        //   height: `${this.props.height}px !important`,
        // }}
      />
    );
  }
}

export default PDFViewer;
