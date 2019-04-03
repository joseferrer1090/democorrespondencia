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
        <div className="">
          <p className="float-left">Probando</p>
          <div className="float-right">paginacion</div>
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
