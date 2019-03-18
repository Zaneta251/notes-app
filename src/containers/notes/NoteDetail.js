import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Input } from "antd";
import "./NoteDetail.scss";
import { addNewNote, setSelectedNote, setCreateFlag, deleteNote, editNote } from '../main/actions';
import { strings } from "../translate/strings";

const { TextArea } = Input;

class NoteDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newNote: "",
      editedNote: ""
    };
  }

  editNote = note => {
    this.setState({
      editedNote: note.title
    });
    this.props.setCreateFlag(true);
  };

  addNewNote = () => {
    if (this.state.newNote.length !== 0) {
      this.props.addNewNote(this.state.newNote);
    }
  }

  onCancel = () => {
    this.props.setCreateFlag(false);
    this.setState({ newNote: "", editedNote: "" })
  }

  deleteNote = () => {
    this.props.deleteNote(this.props.selectedNote.id);
    this.props.setSelectedNote(null);
  }

  saveEditedNote = () => {
    if (this.state.editedNote !== this.props.selectedNote.title) {
      this.props.editNote(this.props.selectedNote.id);
    }
  }

  render() {
    const { selectedNote, createFlag } = this.props;

    return (
      <div className="note-detail-layout">
        {selectedNote ?
          createFlag ?
            <div className="text-area">
              <TextArea
                style={{ height: "90%", width: "100%" }}
                placeholder="Add new note ... "
                value={this.state.editedNote}
                onChange={e => this.setState({ editedNote: e.target.value })}
              />
              <div className="action-buttons">
                <Button onClick={this.onCancel}>{strings.cancel}</Button>
                <Button onClick={this.deleteNote}>{strings.delete}</Button>
                <Button onClick={this.saveEditedNote}>{strings.save}</Button>
              </div>
            </div>
            :
            <div>
              <div className="note-detail">{selectedNote.title}</div>
              <div className="action-buttons">
                <Button onClick={() => this.props.setSelectedNote(null)}>{strings.cancel}</Button>
                <Button onClick={this.deleteNote}>{strings.delete}</Button>
                <Button onClick={() => this.editNote(selectedNote)}>{strings.edit}</Button>
              </div>
            </div>
          :
          createFlag ?
            <div className="text-area">
              <TextArea
                style={{ height: "95%", width: "100%" }}
                placeholder="Add a new note ... "
                value={this.state.newNote}
                onChange={e => this.setState({ newNote: e.target.value })}
              />
              <div className="action-buttons">
                <Button onClick={this.onCancel}>{strings.cancel}</Button>
                <Button onClick={this.addNewNote}>{strings.add}</Button>
              </div>
            </div>
            :
            <div className="bsc-text">{strings.BSC}</div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedNote: state.main.selectedNote,
    notes: state.main.notesList,
    createFlag: state.main.newNote
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setCreateFlag,
      setSelectedNote,
      addNewNote,
      deleteNote,
      editNote
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteDetail);
