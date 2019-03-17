import React from "react";
import { connect } from 'react-redux';

import { LocaleProvider } from "antd";
import en_US from "antd/lib/locale-provider/en_US";
import cs_CZ from "antd/lib/locale-provider/cs_CZ";
import "moment/locale/cs";
import "moment/locale/en-gb";
import Routers from "../../Routers";
import { strings } from "./strings";

class Translate extends React.Component {
  render() {
    const userLang = this.props.language || navigator.language || navigator.userLanguage;
    const findLanguage = ((userLang === "en" && en_US) || (userLang === "cz" && cs_CZ) || en_US);

    strings.setLanguage(userLang);
    return (
      <LocaleProvider locale={findLanguage}>
        <Routers />
      </LocaleProvider>
    );
  }
}

const mapStateToProps = state => ({
  language: state.main.language || ''
});

export default connect(mapStateToProps)(Translate);
