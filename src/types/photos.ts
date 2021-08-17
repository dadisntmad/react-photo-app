import { PhotosActionTypes } from '../redux/actions/photos';

export type RandomPhotoType = {
  id: string;
  alt_description: string;
  urls: Urls;
  user: RandomUserType;
};

export type PhotosType = {
  id: string;
  urls: Urls;
  alt_description: string;
  user: UserType;
};

export type UserType = {
  name: string;
  profile_image: ProfileImage;
};

type ProfileImage = {
  small: string;
};

export type Urls = {
  small?: string;
  regular?: string;
};

type RandomUserType = {
  name: string;
};

export type PhotosState = {
  photos: PhotosType[];
  randomPhoto: RandomPhotoType[];
  foundPhotos: PhotosType[];
  query: string;
  isLoading: boolean;
  page: number;
};

type setPhotos = {
  type: PhotosActionTypes.SET_PHOTOS;
  payload: PhotosType[];
};

type setQuery = {
  type: PhotosActionTypes.SET_QUERY;
  payload: string;
};

type setClear = {
  type: PhotosActionTypes.SET_CLEAR;
};

type setIsLoading = {
  type: PhotosActionTypes.SET_IS_LOADING;
};

type setRandomPhoto = {
  type: PhotosActionTypes.SET_RANDOM_PHOTO;
  payload: RandomPhotoType[];
};

type setFoundPhotos = {
  type: PhotosActionTypes.SET_FOUND_PHOTOS;
  payload: PhotosType[];
};

type setPage = {
  type: PhotosActionTypes.SET_PAGE;
  payload: number;
};

export type PhotosActionType =
  | setPhotos
  | setQuery
  | setClear
  | setIsLoading
  | setRandomPhoto
  | setFoundPhotos
  | setPage;
