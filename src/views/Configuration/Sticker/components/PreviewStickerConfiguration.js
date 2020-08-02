import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "reactstrap";
import Barcode from "react-barcode";
import { useSelector, useDispatch } from "react-redux";

export const PreviewStickerConfiguration = () => {
  const { details, name, id } = useSelector(
    (state) => state.stickerReducer.sticker
  );

  return (
    <div className="animated fadeIn">
      <Card>
        <CardHeader>
          {" "}
          <i className="fa fa-globe" /> Previsualizar Sticer {name}
        </CardHeader>
        <CardBody>
          <div className="row">
            {details ? (
              <div
                className="col-md-4 offset-4 text-center"
                style={{
                  border: "1px solid #e3e3e3",
                  backgroundColor: "#e3e3e3",
                  padding: "0px",
                }}
              >
                <table
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <tbody className="text-justify">
                    <tr>
                      {details.map((aux, id) => {
                        return (
                          <tr>
                            {aux.labelText}: {id}
                          </tr>
                        );
                      })}
                    </tr>
                  </tbody>
                </table>
                <Barcode
                  value={`${id}`}
                  width={1}
                  format="CODE128"
                  displayValue
                  fontSize={12}
                  background="#e3e3e3"
                />
              </div>
            ) : (
              <div>
                <p>No hay valores asignados</p>
              </div>
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
