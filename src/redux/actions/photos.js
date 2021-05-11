import instance from '../../API/api';

export const Types = {
  SET_PHOTOS: 'PHOTOS@SET_PHOTOS',
  SET_QUERY: 'PHOTOS@SET_QUERY',
  SET_CLEAR: 'PHOTOS@SET_CLEAR',
  SET_IS_LOADING: 'PHOTOS@SET_IS_LOADING',
  SET_RANDOM_PHOTO: 'PHOTOS@SET_RANDOM_PHOTO',
  SET_FOUND_PHOTOS: 'PHOTOS@SET_FOUND_PHOTOS',
  SET_PAGE: 'PHOTOS@SET_PAGE',
};

export const setPhotos = (photos) => ({
  type: Types.SET_PHOTOS,
  payload: photos,
});

export const setQuery = (query) => ({
  type: Types.SET_QUERY,
  payload: query,
});

export const setClear = () => ({
  type: Types.SET_CLEAR,
});

export const setIsLoading = () => ({
  type: Types.SET_IS_LOADING,
});

export const setRandomPhoto = (photo) => ({
  type: Types.SET_RANDOM_PHOTO,
  payload: photo,
});

export const setFoundPhotos = (foundPhoto) => ({
  type: Types.SET_FOUND_PHOTOS,
  payload: foundPhoto,
});

export const setPage = (page) => ({
  type: Types.SET_PAGE,
  payload: page,
});

export const fetchRandomPhoto = () => (dispatch) => {
  instance
    .get(`/photos/random/?count=1&orientation=landscape`)
    .then(({ data }) => dispatch(setRandomPhoto(data)));
};

export const fetchPhotos = (page) => (dispatch) => {
  dispatch(setPage());
  instance.get(`/photos?page=${page}`).then(({ data }) => dispatch(setPhotos(data)));
  dispatch(setPage(page + 1));
};

export const fetchPhotosSearch = (query) => (dispatch) => {
  dispatch(setIsLoading());
  instance
    .get(`/search/photos?per_page=30&query=${query}`)
    .then(({ data }) => dispatch(setFoundPhotos(data.results)));
};
