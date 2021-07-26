import instance from '../../API/api';
import {PhotosActionType, PhotosActionTypes} from "../../types/photos";
import {Dispatch} from "redux";

export const setPhotos = (photos: any): PhotosActionType => ({
  type: PhotosActionTypes.SET_PHOTOS,
  payload: photos,
});

export const setQuery = (query: string): PhotosActionType => ({
  type: PhotosActionTypes.SET_QUERY,
  payload: query,
});

export const setClear = (): PhotosActionType => ({
  type: PhotosActionTypes.SET_CLEAR,
});

export const setIsLoading = (): PhotosActionType => ({
  type: PhotosActionTypes.SET_IS_LOADING,
});

export const setRandomPhoto = (photo: any): PhotosActionType => ({
  type: PhotosActionTypes.SET_RANDOM_PHOTO,
  payload: photo,
});

export const setFoundPhotos = (foundPhoto: any): PhotosActionType => ({
  type: PhotosActionTypes.SET_FOUND_PHOTOS,
  payload: foundPhoto,
});

export const setPage = (page: number): PhotosActionType => ({
  type: PhotosActionTypes.SET_PAGE,
  payload: page,
});

export const fetchRandomPhoto = () => (dispatch: Dispatch<PhotosActionType>) => {
  instance
    .get(`/photos/random/?count=1&orientation=landscape`)
    .then(({data}) => dispatch(setRandomPhoto(data)));
};

export const fetchPhotos = (page: number) => (dispatch: Dispatch<PhotosActionType>) => {
  dispatch(setPage());
  instance.get(`/photos?page=${page}`).then(({data}) => dispatch(setPhotos(data)));
  dispatch(setPage(page + 1));
};

export const fetchPhotosSearch = (query: string) => (dispatch: Dispatch<PhotosActionType>) => {
  dispatch(setIsLoading());
  instance
    .get(`/search/photos?per_page=30&query=${query}`)
    .then(({data}) => dispatch(setFoundPhotos(data.results)));
};
