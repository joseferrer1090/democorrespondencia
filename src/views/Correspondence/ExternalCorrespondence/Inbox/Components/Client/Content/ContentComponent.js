import React, { Component } from "react";
import PropTypes from "prop-types";
import Data2 from "./../../../../../../../services/data";
import "./components/css/table_inbox.css";

class ContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data2.data
    };
  }

  componentDidMount() {
    console.log("Probando el component did mount");
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="inbox-body">
          <div className="mail-option">
            <div className="chk-all" style={{ marginLeft: "-9px" }}>
              <input
                type="checkbox"
                className="mail-checkbox mail-group-checkbox"
              />
              <div className="btn-group">
                <a
                  data-toggle="dropdown"
                  href="#"
                  className="btn mini all"
                  aria-expanded="false"
                >
                  Seleccionar todo
                  <i className="fa fa-angle-down " />
                </a>
              </div>
            </div>
            <div className="btn-group">
              <a
                data-original-title="Refresh"
                data-placement="top"
                data-toggle="dropdown"
                href="#"
                className="
                
                3
                btn mini tooltips"
              >
                <i className=" fa fa-refresh" />
              </a>
            </div>

            <div className="btn-group hidden-phone">
              <a
                data-toggle="dropdown"
                href="#"
                className="btn mini blue"
                aria-expanded="false"
              >
                More
                <i className="fa fa-angle-down " />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">
                    <i className="fa fa-pencil" /> Mark as Read
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-ban" /> Spam
                  </a>
                </li>
                <li className="divider" />
                <li>
                  <a href="#">
                    <i className="fa fa-trash-o" /> Delete
                  </a>
                </li>
              </ul>
            </div>
            <div className="btn-group">
              <a data-toggle="dropdown" href="#" className="btn mini blue">
                Move to
                <i className="fa fa-angle-down " />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">
                    <i className="fa fa-pencil" /> Mark as Read
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-ban" /> Spam
                  </a>
                </li>
                <li className="divider" />
                <li>
                  <a href="#">
                    <i className="fa fa-trash-o" /> Delete
                  </a>
                </li>
              </ul>
            </div>

            {/* <div className="custom-control custom-checkbox custom-control-inline">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customRadio"
                name="example"
                defaultValue="customEx"
              />
              <label className="custom-control-label" htmlFor="customRadio">
                Seleccionar todo
              </label>
            </div> */}
          </div>
        </div>
        <table className="table table-inbox table-hover">
          <tbody>
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
    );
  }
}

ContentComponent.propTypes = {};

export default ContentComponent;
