import React, { Component } from "react";
import { connect } from "react-redux";
import EditInformationSticker from "./components/EditInformationSticker";
import ValueSticker from "./components/ValueSticker";
import PreviewStickerConfiguration from "./components/PreviewStickerConfiguration";

class EditSticker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="alert alert-secondary" role="alert">
            <h4 className="alert-heading">Well done!</h4>
            <p>
              Aww yeah, you successfully read this important alert message. This
              example text is going to run a bit longer so that you can see how
              spacing within an alert works with this kind of content.
            </p>
            <hr />
            <p className="mb-0">
              Whenever you need to, be sure to use margin utilities to keep
              things nice and tidy.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <EditInformationSticker />
        </div>
        <div className="col-md-6">
          <ValueSticker />
        </div>
        {/* <div className="col-md-12">
          <PreviewStickerConfiguration />
        </div> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}

function mapDispatchToProps(dispatch) {}

export default connect(mapStateToProps, mapDispatchToProps)(EditSticker);
