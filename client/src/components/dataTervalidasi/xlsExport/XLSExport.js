import "../../../App.css";
import { Icon } from "@iconify/react";
import React from "react";
import exportFromJSON from "export-from-json";
import PropTypes from "prop-types";

export default function XLSExport(props) {
  function onClick() {
    const data = props.data;
    const name = props.name;
    const fileName = props.fileName ? props.fileName : name;
    let fields = props.fields ? props.fields : []; //empty list means "use all"
    const exportType = "xls";
    exportFromJSON({ data, fileName, fields, exportType });
  }

  return (
    <button
      type="button"
      className="shadow-all btn btn-success fw-semibold py-2 rounded-3"
      data-bs-toggle="modal"
      onClick={onClick}
    >
      <div>
        <Icon className="button-icon me-1" icon="entypo:export" />
        Export
      </div>
    </button>
  );
}

XLSExport.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  tooltip: PropTypes.string,
  fileName: PropTypes.string,
  fields: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]),
};
