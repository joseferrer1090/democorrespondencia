import React, { Component } from "react";
import { CommandBar } from "office-ui-fabric-react";
import { SearchBox } from "office-ui-fabric-react";
import PropTypes from "prop-types";

class Headerinbox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getItems = () => {
    return [
      {
        key: "newItem",
        name: "Nuevo",
        cacheKey: "myCacheKey", // changing this key will invalidate this items cache
        iconProps: {
          iconName: "Add"
        },
        ariaLabel: "Nuevo",
        subMenuProps: {
          items: [
            {
              key: "emailMessage",
              name: "Radicar documento",
              iconProps: {
                iconName: "document"
              },
              "data-automation-id": "newEmailButton"
            },
            {
              key: "calendarEvent",
              name: "Radicar trámite",
              iconProps: {
                iconName: "documentation"
              }
            }
          ]
        }
      },
      {
        key: "upload",
        name: "Usabilidad",
        iconProps: {
          iconName: "DocumentManagement"
        },
        onClick: () => console.log("Usabilidad")
      },
      {
        key: "exportar",
        name: "Exportar",
        iconProps: {
          iconName: "Download"
        },
        ariaLabel: "exportar",
        subMenuProps: {
          items: [
            {
              key: "exportFile",
              name: "Archivo de consulta",
              iconProps: {
                iconName: "ExcelDocument"
              },
              "data-automation-id": "newEmailButton"
            },
            {
              key: "",
              name: "Recibido / Despachado",
              iconProps: {
                iconName: "ExcelDocument"
              }
            }
          ]
        }
      },
      {
        key: "reportes",
        name: "Reportes",
        iconProps: {
          iconName: "CRMReport"
        },
        ariaLabel: "reportes",
        subMenuProps: {
          items: [
            {
              key: "",
              name: "Generar reporte",
              iconProps: {
                iconName: "pdf"
              },
              "data-automation-id": "newEmailButton"
            },
            {
              key: "calendarEvent",
              name: "Radicar trámite",
              iconProps: {
                iconName: "pdf"
              }
            }
          ]
        }
      }
    ];
  };

  getFarItems = () => {
    return [
      {
        key: "opciones",
        name: "Más opciones",
        ariaLabel: "Sort",
        iconProps: {
          iconName: "SortLines"
        },
        ariaLabel: "más opciones",
        subMenuProps: {
          items: [
            {
              key: "impresión masiva",
              name: "Copiar correspondencia",
              iconProps: {
                iconName: "FabricPublicFolder"
              }
            }
          ]
        }
      },
      {
        key: "sort",
        name: "Impresión",
        ariaLabel: "Sort",
        iconProps: {
          iconName: "print"
        },
        ariaLabel: "impresión",
        subMenuProps: {
          items: [
            {
              key: "impresión masiva",
              name: "Impresión masiva",
              iconProps: {
                iconName: "PrintfaxPrinterFile"
              }
            }
          ]
        }
      }
    ];
  };

  render() {
    return (
      <div className="">
        <CommandBar items={this.getItems()} farItems={this.getFarItems()} />
      </div>
    );
  }
}

Headerinbox.propTypes = {};

export default Headerinbox;
