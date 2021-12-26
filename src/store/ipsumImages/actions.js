import axios from 'axios'

export const ActionTypes = {
  INIT: '@@redux/INIT',
  FETCH_IMAGES: "FETCH_IMAGES",
}

const randomId = (min,max) => {
  return Math.round(Math.random()*(max - min));
}

export const dispatchToReducer = (data) => {
  return {
    type: ActionTypes.FETCH_IMAGES,
    payload: data,
  };
};

export const serverFetchImages = () => (dispatch) => {
    axios.get(`https://picsum.photos/v2/list?page=2&limit=${randomId(10,20)}`)
    .then(function (response) {
      // handle success
      console.log("join");
      console.log(response.data);
      dispatch(dispatchToReducer(response.data));
    })
    .catch(function (error) {
      // handle error
      console.log("error");
    })
};
