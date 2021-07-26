export type PhotosState = {
  photos: string[],
  randomPhoto: string[],
  foundPhotos: string[],
  query: string,
  isLoading: boolean,
  page: number
}

export enum PhotosActionTypes {
  SET_PHOTOS = 'PHOTOS@SET_PHOTOS',
  SET_QUERY = 'PHOTOS@SET_QUERY',
  SET_CLEAR = 'PHOTOS@SET_CLEAR',
  SET_IS_LOADING = 'PHOTOS@SET_IS_LOADING',
  SET_RANDOM_PHOTO = 'PHOTOS@SET_RANDOM_PHOTO',
  SET_FOUND_PHOTOS = 'PHOTOS@SET_FOUND_PHOTOS',
  SET_PAGE = 'PHOTOS@SET_PAGE',
}

type setPhotos = {
  type: PhotosActionTypes.SET_PHOTOS,
  payload: string[]
}

type setQuery = {
  type: PhotosActionTypes.SET_QUERY,
  payload: string,
}

type setClear = {
  type: PhotosActionTypes.SET_CLEAR,
}

type setIsLoading = {
  type: PhotosActionTypes.SET_IS_LOADING,
}

type setRandomPhoto = {
  type: PhotosActionTypes.SET_RANDOM_PHOTO,
  payload: string[]
}

type setFoundPhotos = {
  type: PhotosActionTypes.SET_FOUND_PHOTOS,
  payload: string[]
}

type setPage = {
  type: PhotosActionTypes.SET_PAGE,
  payload: number
}

export type PhotosActionType = setPhotos | setQuery | setClear | setIsLoading | setRandomPhoto | setFoundPhotos | setPage;
