import {
  GET_NOTES_LIST,
  SET_SELECTED_NOTE,
  SET_CREATE_FLAG,
  SET_LANGUAGE
} from "../../redux/constants/actionTypes";
import { message } from "antd";
import { strings } from "../translate/strings";

export const loadNotesList = () => async (dispatch) => {
  try {
    const fullResult = await fetch(`https://private-9aad-note10.apiary-mock.com/notes`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });

    const result = fullResult.ok ? await fullResult.json() : [];

    dispatch({ type: GET_NOTES_LIST, payload: result });
  } catch (e) {
    dispatch({ type: GET_NOTES_LIST, payload: [] });
    message.error("Load notes failed");
    throw e;
  }
};

export const setSelectedNote = note => ({
  type: SET_SELECTED_NOTE,
  payload: note
});

export const setCreateFlag = flag => ({
  type: SET_CREATE_FLAG,
  payload: flag
});

export const addNewNote = (note) => async (dispatch, getState) => {
  const notes = getState().main.notesList;
  const index = notes[notes.length - 1].id;

  const postBody = {
    ...notes,
    [index]: {
      id: index + 1,
      title: note
    }
  };

  try {
    const fullResult = await fetch(`https://private-9aad-note10.apiary-mock.com/notes`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(postBody)
    });

    if (fullResult.ok) {
      message.success(strings.createSuccess);
      dispatch({
        type: SET_CREATE_FLAG,
        payload: false
      });
      await loadNotesList()(dispatch);
    }
  } catch (e) {
    message.error("Load notes failed");
    throw e;
  }
};

export const editNote = (id) => async (dispatch) => {
  try {
    const fullResult = await fetch(`https://private-9aad-note10.apiary-mock.com/notes/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "PUT"
    });

    if (fullResult.ok) {
      message.success(strings.editSuccess);
      dispatch({
        type: SET_CREATE_FLAG,
        payload: false
      });
      await loadNotesList()(dispatch);
    }
  } catch (e) {
    message.error("Edit note failed");
    throw e;
  }
};

export const deleteNote = id => async (dispatch) => {
  await fetch(`https://private-9aad-note10.apiary-mock.com/notes/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });

  await loadNotesList()(dispatch);
};

export const setLanguage = language => ({
  type: SET_LANGUAGE,
  payload: language
});