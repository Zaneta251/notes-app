import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import logo from '../../logo.svg';
import './Main.scss';
import NotesList from '../notes/NotesList';
import NoteDetail from '../notes/NoteDetail';
import Header from '../header/Header';
import { loadNotesList, setSelectedNote } from './actions';

class Main extends Component {
  componentDidMount() {
    this.props.loadNotesList();
  }

  render() {
    return (
      <div className="flex-container">
        <Header />
        <div className="wrapper">
          <NotesList />
          <NoteDetail />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notesList: state.main.notesList
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadNotesList,
      setSelectedNote
    },
    dispatch
  );

export default connect(
  mapStateToProps, mapDispatchToProps
)(Main);
