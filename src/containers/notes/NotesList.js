import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Col, Row, Button } from "antd";
import { strings } from "../translate/strings";
import "./NotesList.scss";
import { loadNotesList, setSelectedNote, setCreateFlag } from '../main/actions';

class NotesList extends React.Component {
  openDetail = note => {
    this.props.setSelectedNote(note);
    this.props.setCreateFlag(false);
  }

  render() {
    return (
      <div className="note-list-layout">
        <div style={{ overflowY: "auto", maxHeight: "100vh" }} className="scrollable-container">
          {this.props.notes.map(note => (
            <div key={`area-${note.id}`}>
              <div className="hoverable-list-item note"
                onClick={() => this.openDetail(note)}>
                <Row>
                  <Col span={15}>
                    <div style={{ padding: "2px" }}>
                      {strings.note}: {note.title}
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.main.notesList
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadNotesList,
      setSelectedNote,
      setCreateFlag
    },
    dispatch
  );

export default connect(
  mapStateToProps, mapDispatchToProps
)(NotesList);

