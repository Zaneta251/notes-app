import NotesList from "./NotesList";
import NoteDetail from "./NoteDetail";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import {
  main
} from "../main/reducers";
import { createStore } from 'redux';

const myReducers = combineReducers({
  main: main
});

const store = createStore(
  myReducers
);

it("renders correctly", () => {
  const wrapper = shallow(
    <NotesList />
  );
  expect(wrapper).toMatchSnapshot();
});

it("renders correctly", () => {
  const wrapper = shallow(
    <NoteDetail />
  );
  expect(wrapper).toMatchSnapshot();
});

it("renders correctly again", () => {
  const wrapper = render(
    <Provider store={store}>
      <NotesList />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});

it("renders correctly again", () => {
  const wrapper = render(
    <Provider store={store}>
      <NoteDetail />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
