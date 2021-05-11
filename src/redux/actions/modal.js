import instance from '../../API/api';

export const Types = {
  SET_PHOTO: 'MODAL@SET_PHOTO',
  SET_IS_LOADING: 'MODAL@SET_IS_LOADING',
  SET_SHOW_MODAL: 'MODAL@SET_SHOW_MODAL',
  SET_CLOSE_MODAL: 'MODAL@SET_CLOSE_MODAL',
};

export const setPhoto = (photo) => ({
  type: Types.SET_PHOTO,
  payload: photo,
});

export const setIsLoading = () => ({
  type: Types.SET_IS_LOADING,
});

export const setShowModal = (photoId) => ({
  type: Types.SET_SHOW_MODAL,
  payload: photoId,
});

export const setCloseModal = () => ({
  type: Types.SET_CLOSE_MODAL,
});

export const fetchPhoto = (photoId) => (dispatch) => {
  dispatch(setIsLoading());
  instance.get(`/photos/${photoId}`).then(({ data }) => {
    dispatch(setPhoto(data));
  });
};
