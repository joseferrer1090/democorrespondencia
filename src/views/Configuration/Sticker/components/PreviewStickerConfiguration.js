import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "reactstrap";
import Barcode from "react-barcode";
import { useSelector, useDispatch } from "react-redux";

export const PreviewStickerConfiguration = () => {
  const [data, setdata] = useState([]);

  const { details, name, id } = useSelector(
    (state) => state.stickerReducer.sticker
  );

  useEffect(() => {
    setdata(details);
  });

  return (
    <div className="animated fadeIn">
      <Card>
        <CardHeader>
          {" "}
          <i className="fa fa-globe" /> Previsualizar Sticer {name}
        </CardHeader>
        <CardBody>
          {data ? (
            <div className="row">
              <div
                className="col-md-4 offset-4 text-center"
                style={{
                  border: "1px solid #e3e3e3",
                  backgroundColor: "#e3e3e3",
                  padding: "0px",
                }}
              >
                <table class="table">
                  <tbody>
                    <tr>
                      <td colspan="4">Larry the Bird</td>
                      <th scope="row">3</th>
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
            </div>
          ) : (
            <div>no hay datos asignado al sticker</div>
          )}
        </CardBody>
      </Card>
    </div>
  );
};
