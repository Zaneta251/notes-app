import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Radio } from "antd";
import { setCreateFlag, setSelectedNote, setLanguage } from '../main/actions';
import { strings } from "../translate/strings";
import './Header.scss';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class Header extends React.Component {
  addNote = () => {
    this.props.setCreateFlag(true);
    this.props.setSelectedNote(null);
  }

  changeLanguage = e => {
    this.props.setLanguage(e.target.value);
  }

  render() {
    let defLang = this.props.language || navigator.language || navigator.userLanguage;

    return (
      <div className="header row">
        <div className="title">
          <h1 className="flex-grow">{strings.title}</h1>
        </div>
        <div className="add-button">
          <Button block type="primary" onClick={this.addNote}>{strings.addNew}</Button>
        </div>
        <div className="language">
          <RadioGroup onChange={this.changeLanguage} defaultValue={defLang} buttonStyle="solid">
            <RadioButton style={{ padding: "0 5px" }} value="en">EN</RadioButton>
            <RadioButton style={{ padding: "0 5px" }} value="cz">CZ</RadioButton>
          </RadioGroup>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state.main.language
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setCreateFlag,
      setSelectedNote,
      setLanguage
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
