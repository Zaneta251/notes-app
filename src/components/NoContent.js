import React from "react";
import noResultsImage from "images/no-results.svg";
import { strings } from "containers/translate/strings";

export default class NoContent extends React.Component {
  render() {
    return (
      <div
        style={{
          textAlign: "center"
        }}
      >
        <img src={noResultsImage} alt="No results found" />
        <br />
        <span>{strings.noContent}</span>
      </div>
    );
  }
}
