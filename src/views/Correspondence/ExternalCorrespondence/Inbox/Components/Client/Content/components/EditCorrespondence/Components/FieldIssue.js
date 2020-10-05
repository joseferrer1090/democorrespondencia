import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
const FieldIssue = ({
  field,
  form: { errors, touched, setFieldValue, setFieldTouched, values },
  ...props
}) => {
  const issueValue = useSelector(
    (state) =>
      state.editCorrespondenceExternalTypeDocumentary.dataTypeDocumentary.issue
  );

  useEffect(() => {
    validateValues();
  }, [issueValue]);

  const validateValues = () => {
    if (issueValue !== null) {
      values.correspondence_issue = issueValue;
    }
  };

  return (
    <Fragment>
      <textarea
        onChange={(e) => {
          setFieldValue("correspondence_issue", e.target.value);
        }}
        onBlur={(e) => setFieldTouched("correspondence_issue", true)}
        className={`form-control form-control-sm ${
          errors.correspondence_issue &&
          touched.correspondence_issue &&
          "is-invalid"
        }`}
        value={values.correspondence_issue}
      />
    </Fragment>
  );
};
export default FieldIssue;
