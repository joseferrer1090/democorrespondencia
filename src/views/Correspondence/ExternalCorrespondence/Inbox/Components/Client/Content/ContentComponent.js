import React, { Component } from "react";
import PropTypes from "prop-types";
import { DetailsList, Fabric } from "office-ui-fabric-react";
import { Spinner, MessageBar, MessageBarType } from "office-ui-fabric-react";
import Data from "./../../../../../../../services/correspondencia_externa_recibida_new";
import Data2 from "./../../../../../../../services/data";
import "./../../../../../../../../node_modules/office-ui-fabric-core/dist/css/fabric.min.css";

class ContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data2.data
    };
  }

  ProcessData = () => {
    const auxData = this.state.data.map((aux, id) => {
      return {
        Consecutivo: aux.consecutivo,
        nro_documento: aux.nro_documento,
        Sede: aux.sede,
        Remitente: aux.remitente
      };
    });
  };

  componentDidMount() {
    console.log("Probando el component did mount");
  }

  render() {
    // console.log(this.state.data);
    //this.ProcessData();
    return (
      <main
        role="main"
        className="col-md-12 col-lg-12 col-md-12"
        style={{ border: "1px solid green", padding: "0px" }}
      >
        <ul className="ms-List">
          <li className="ms-ListItem is-unread is-selectable" tabIndex={0}>
            <span className="ms-ListItem-primaryText">Alton Lafferty</span>
            <span className="ms-ListItem-secondaryText">Meeting notes</span>
            <span className="ms-ListItem-tertiaryText">
              Today we discussed the importance of a, b, and c in regards to d.
            </span>
            <span className="ms-ListItem-metaText">2:42p</span>
            <div className="ms-ListItem-selectionTarget" />
            <div className="ms-ListItem-actions">
              <div className="ms-ListItem-action">
                <i className="ms-Icon ms-Icon--Mail" />
              </div>
              <div className="ms-ListItem-action">
                <i className="ms-Icon ms-Icon--Delete" />
              </div>
              <div className="ms-ListItem-action">
                <i className="ms-Icon ms-Icon--Flag" />
              </div>
              <div className="ms-ListItem-action">
                <i className="ms-Icon ms-Icon--Pinned" />
              </div>
            </div>
          </li>
          <li className="ms-ListItem is-unread is-selectable" tabIndex={0}>
            <span className="ms-ListItem-primaryText">Alton Lafferty</span>
            <span className="ms-ListItem-secondaryText">Meeting notes</span>
            <span className="ms-ListItem-tertiaryText">
              Today we discussed the importance of a, b, and c in regards to d.
            </span>
            <span className="ms-ListItem-metaText">2:42p</span>
            <div className="ms-ListItem-selectionTarget" />
            <div className="ms-ListItem-actions">
              <div className="ms-ListItem-action">
                <i className="ms-Icon ms-Icon--Mail" />
              </div>
              <div className="ms-ListItem-action">
                <i className="ms-Icon ms-Icon--Delete" />
              </div>
              <div className="ms-ListItem-action">
                <i className="ms-Icon ms-Icon--Flag" />
              </div>
              <div className="ms-ListItem-action">
                <i className="ms-Icon ms-Icon--Pinned" />
              </div>
            </div>
          </li>
          <li className="ms-ListItem is-selectable" tabIndex={0}>
            <span className="ms-ListItem-primaryText">Alton Lafferty</span>
            <span className="ms-ListItem-secondaryText">Meeting notes</span>
            <span className="ms-ListItem-tertiaryText">
              Today we discussed the importance of a, b, and c in regards to d.
            </span>
            <span className="ms-ListItem-metaText">2:42p</span>
            <div className="ms-ListItem-selectionTarget" />
            <div className="ms-ListItem-actions">
              <div className="ms-ListItem-action">
                <i className="ms-Icon ms-Icon--Mail" />
              </div>
              <div className="ms-ListItem-action">
                <i className="ms-Icon ms-Icon--Delete" />
              </div>
              <div className="ms-ListItem-action">
                <i className="ms-Icon ms-Icon--Flag" />
              </div>
              <div className="ms-ListItem-action">
                <i className="ms-Icon ms-Icon--Pinned" />
              </div>
            </div>
          </li>
          <li className="ms-ListItem is-selectable" tabIndex={0}>
            <span className="ms-ListItem-primaryText">Alton Lafferty</span>
            <span className="ms-ListItem-secondaryText">Meeting notes</span>
            <span className="ms-ListItem-tertiaryText">
              Today we discussed the importance of a, b, and c in regards to d.
            </span>
            <span className="ms-ListItem-metaText">2:42p</span>
            <div className="ms-ListItem-selectionTarget" />
            <div className="ms-ListItem-actions">
              <div className="ms-ListItem-action">
                <i className="ms-Icon ms-Icon--Mail" />
              </div>
              <div className="ms-ListItem-action">
                <i className="ms-Icon ms-Icon--Delete" />
              </div>
              <div className="ms-ListItem-action">
                <i className="ms-Icon ms-Icon--Flag" />
              </div>
              <div className="ms-ListItem-action">
                <i className="ms-Icon ms-Icon--Pinned" />
              </div>
            </div>
          </li>
        </ul>

        {/* <DetailsList
          items={this.state.data}
          // setKey="set"
          // selection={this._selection}
          // onItemInvoked={item => window.open(item.WebUrl)}
          // onRenderItemColumn={this._onRenderItemColumn.bind(this)}
          // onRenderMissingItem={() => this._onLoadNextPage()}
        /> */}
      </main>
    );
  }
}

ContentComponent.propTypes = {};

export default ContentComponent;
