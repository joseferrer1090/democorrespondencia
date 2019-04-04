import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Data2 from "./../../../../../../../services/data";
import "./components/css/table_inbox.css";

class ContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data2.data,
      dropdownOpen: false
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  componentDidMount() {
    console.log("Probando el component did mount");
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="inbox-body">
          <div className="mail-option">
            <div className="chk-all" style={{ marginLeft: "-9px" }}>
              <ButtonDropdown
                isOpen={this.state.dropdownOpen}
                toggle={this.toggle}
              >
                <DropdownToggle caret size="sm">
                  Acciones
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Seleccionar todo</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </div>
            {/* <div className="btn-group">
              <button className="btn btn-secondary btn-sm">
                <i className="fa fa-refresh" />
              </button>
            </div> */}

            {/* <div className="btn-group hidden-phone">
              <button className="btn btn-secondary btn-sm">more</button>
            </div> */}

            <div className="float-right">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="fa fa-angle-double-left" />
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item ">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="fa fa-angle-double-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="scrollable">
          <table className="table table-hover">
            <tbody
              style={{ height: "200px", overflowY: "auto", width: "100%" }}
            >
              <tr className="table-info">
                <td className="inbox-small-cells">
                  <input type="checkbox" className="mail-checkbox" />
                </td>
                <td className="inbox-small-cells">
                  <i class="fa fa-star" />
                </td>
                <td className="view-message  dont-show">PHPClass</td>
                <td className="view-message ">
                  Added a new class: Login Class Fast Site
                </td>
                <td className="view-message  inbox-small-cells">
                  <i className="fa fa-paperclip" />
                </td>
                <td className="view-message  text-right">9:27 AM</td>
              </tr>
              <tr className="table-danger">
                <td className="inbox-small-cells">
                  <input type="checkbox" className="mail-checkbox" />
                </td>
                <td className="inbox-small-cells">
                  <i className="fa fa-star" />
                </td>
                <td className="view-message dont-show">Google Webmaster </td>
                <td className="view-message">
                  Improve the search presence of WebSite
                </td>
                <td className="view-message inbox-small-cells" />
                <td className="view-message text-right">March 15</td>
              </tr>

              <tr className="table-success">
                <td className="inbox-small-cells">
                  <input type="checkbox" className="mail-checkbox" />
                </td>
                <td className="inbox-small-cells">
                  <i className="fa fa-star" />
                </td>
                <td className="view-message dont-show">Google Webmaster </td>
                <td className="view-message">
                  Improve the search presence of WebSite
                </td>
                <td className="view-message inbox-small-cells" />
                <td className="view-message text-right">March 15</td>
              </tr>
              <tr className="table-light">
                <td className="inbox-small-cells">
                  <input type="checkbox" className="mail-checkbox" />
                </td>
                <td className="inbox-small-cells">
                  <i className="fa fa-star" />
                </td>
                <td className="view-message dont-show">Google Webmaster </td>
                <td className="view-message">
                  Improve the search presence of WebSite
                </td>
                <td className="view-message inbox-small-cells" />
                <td className="view-message text-right">March 15</td>
              </tr>
              <tr className="table-info">
                <td className="inbox-small-cells">
                  <input type="checkbox" className="mail-checkbox" />
                </td>
                <td className="inbox-small-cells">
                  <i class="fa fa-star" />
                </td>
                <td className="view-message  dont-show">PHPClass</td>
                <td className="view-message ">
                  Added a new class: Login Class Fast Site
                </td>
                <td className="view-message  inbox-small-cells">
                  <i className="fa fa-paperclip" />
                </td>
                <td className="view-message  text-right">9:27 AM</td>
              </tr>
              <tr className="table-danger">
                <td className="inbox-small-cells">
                  <input type="checkbox" className="mail-checkbox" />
                </td>
                <td className="inbox-small-cells">
                  <i className="fa fa-star" />
                </td>
                <td className="view-message dont-show">Google Webmaster </td>
                <td className="view-message">
                  Improve the search presence of WebSite
                </td>
                <td className="view-message inbox-small-cells" />
                <td className="view-message text-right">March 15</td>
              </tr>

              <tr className="table-success">
                <td className="inbox-small-cells">
                  <input type="checkbox" className="mail-checkbox" />
                </td>
                <td className="inbox-small-cells">
                  <i className="fa fa-star" />
                </td>
                <td className="view-message dont-show">Google Webmaster </td>
                <td className="view-message">
                  Improve the search presence of WebSite
                </td>
                <td className="view-message inbox-small-cells" />
                <td className="view-message text-right">March 15</td>
              </tr>
              <tr className="table-light">
                <td className="inbox-small-cells">
                  <input type="checkbox" className="mail-checkbox" />
                </td>
                <td className="inbox-small-cells">
                  <i className="fa fa-star" />
                </td>
                <td className="view-message dont-show">Google Webmaster </td>
                <td className="view-message">
                  Improve the search presence of WebSite
                </td>
                <td className="view-message inbox-small-cells" />
                <td className="view-message text-right">March 15</td>
              </tr>
              <tr className="table-info">
                <td className="inbox-small-cells">
                  <input type="checkbox" className="mail-checkbox" />
                </td>
                <td className="inbox-small-cells">
                  <i class="fa fa-star" />
                </td>
                <td className="view-message  dont-show">PHPClass</td>
                <td className="view-message ">
                  Added a new class: Login Class Fast Site
                </td>
                <td className="view-message  inbox-small-cells">
                  <i className="fa fa-paperclip" />
                </td>
                <td className="view-message  text-right">9:27 AM</td>
              </tr>
              <tr className="table-danger">
                <td className="inbox-small-cells">
                  <input type="checkbox" className="mail-checkbox" />
                </td>
                <td className="inbox-small-cells">
                  <i className="fa fa-star" />
                </td>
                <td className="view-message dont-show">Google Webmaster </td>
                <td className="view-message">
                  Improve the search presence of WebSite
                </td>
                <td className="view-message inbox-small-cells" />
                <td className="view-message text-right">March 15</td>
              </tr>

              <tr className="table-success">
                <td className="inbox-small-cells">
                  <input type="checkbox" className="mail-checkbox" />
                </td>
                <td className="inbox-small-cells">
                  <i className="fa fa-star" />
                </td>
                <td className="view-message dont-show">Google Webmaster </td>
                <td className="view-message">
                  Improve the search presence of WebSite
                </td>
                <td className="view-message inbox-small-cells" />
                <td className="view-message text-right">March 15</td>
              </tr>
              <tr className="table-light">
                <td className="inbox-small-cells">
                  <input type="checkbox" className="mail-checkbox" />
                </td>
                <td className="inbox-small-cells">
                  <i className="fa fa-star" />
                </td>
                <td className="view-message dont-show">Google Webmaster </td>
                <td className="view-message">
                  Improve the search presence of WebSite
                </td>
                <td className="view-message inbox-small-cells" />
                <td className="view-message text-right">March 15</td>
              </tr>
              <tr className="table-light">
                <td className="inbox-small-cells">
                  <input type="checkbox" className="mail-checkbox" />
                </td>
                <td className="inbox-small-cells">
                  <i className="fa fa-star" />
                </td>
                <td className="view-message dont-show">Google Webmaster </td>
                <td className="view-message">
                  Improve the search presence of WebSite
                </td>
                <td className="view-message inbox-small-cells" />
                <td className="view-message text-right">March 15</td>
              </tr>
              <tr className="table-light">
                <td className="inbox-small-cells">
                  <input type="checkbox" className="mail-checkbox" />
                </td>
                <td className="inbox-small-cells">
                  <i className="fa fa-star" />
                </td>
                <td className="view-message dont-show">Google Webmaster </td>
                <td className="view-message">
                  Improve the search presence of WebSite
                </td>
                <td className="view-message inbox-small-cells" />
                <td className="view-message text-right">March 15</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

ContentComponent.propTypes = {};

export default ContentComponent;
