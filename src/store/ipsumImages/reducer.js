import { ActionTypes } from "./actions";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  console.log("reducer");
  console.log("reducer action", action);
  switch (action.type) {
    case ActionTypes.FETCH_IMAGES:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return {...state};
  }
}
