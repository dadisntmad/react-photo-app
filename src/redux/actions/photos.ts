import instance from '../../API/api';
import {PhotosActionType, PhotosActionTypes, PhotosType, RandomPhotoType} from "../../types/photos";
import {Dispatch} from "redux";

export const setPhotos = (photos: PhotosType[]): PhotosActionType => ({
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

export const setRandomPhoto = (photo: RandomPhotoType[]): PhotosActionType => ({
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

export const fetchRandomPhoto = () => async (dispatch: Dispatch<PhotosActionType>) => {
  try {
    const response = await instance.get(`/photos/random/?count=1&orientation=landscape`);
    dispatch(setRandomPhoto(response.data))
  } catch (e) {
    console.log(e)
  }
};

export const fetchPhotos = (page: number) => async (dispatch: Dispatch<PhotosActionType>) => {
  try {
    dispatch(setPage(page));
    const response = await instance.get(`/photos?page=${page}`);
    dispatch(setPhotos(response.data))
    dispatch(setPage(page + 1));
  } catch (e) {
    console.log(e);
  }
};

export const fetchPhotosSearch = (query: string) => async (dispatch: Dispatch<PhotosActionType>) => {
  try {
    dispatch(setIsLoading());
    const response = await instance
      .get(`/search/photos?per_page=30&query=${query}`)
    dispatch(setFoundPhotos(response.data.results))
  } catch (e) {
    console.log(e);
  }
};
