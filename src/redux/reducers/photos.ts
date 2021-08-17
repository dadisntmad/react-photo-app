import { produce } from 'immer';
import { PhotosActionType, PhotosState } from '../../types/photos';
import { PhotosActionTypes } from '../actions/photos';

const initialState: PhotosState = {
  photos: [],
  randomPhoto: [],
  foundPhotos: [],
  query: '',
  isLoading: false,
  page: 1,
};

const photos = produce((draft, action: PhotosActionType) => {
  switch (action.type) {
    case PhotosActionTypes.SET_PHOTOS:
      draft.photos.push(...action.payload);
      break;
    case PhotosActionTypes.SET_RANDOM_PHOTO:
      draft.randomPhoto = action.payload;
      break;
    case PhotosActionTypes.SET_FOUND_PHOTOS:
      draft.isLoading = false;
      draft.foundPhotos = action.payload;
      break;
    case PhotosActionTypes.SET_QUERY:
      draft.query = action.payload;
      break;
    case PhotosActionTypes.SET_CLEAR:
      draft.query = '';
      break;
    case PhotosActionTypes.SET_IS_LOADING:
      draft.isLoading = true;
      break;
    case PhotosActionTypes.SET_PAGE:
      draft.page = action.payload;
      break;
    default:
  }
}, initialState);

export default photos;
