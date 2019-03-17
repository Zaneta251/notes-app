import {
  GET_NOTES_LIST,
  SET_SELECTED_NOTE,
  SET_CREATE_FLAG,
  SET_LANGUAGE
} from "../../redux/constants/actionTypes";

const initialState = {
  notesList: [],
  selectedNote: null,
  newNote: false,
  language: 'cz'
};

export const main = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_NOTES_LIST:
      return { ...state, notesList: payload };
    case SET_SELECTED_NOTE:
      return { ...state, selectedNote: payload };
    case SET_CREATE_FLAG:
      return { ...state, newNote: payload };
    case SET_LANGUAGE:
      return { ...state, language: payload };
    default:
      return state;
  }
};
