import { produce } from 'immer';
import { Types } from '../actions/photos';

const initialState = {
  photos: [],
  randomPhoto: [],
  foundPhotos: [],
  query: '',
  isLoading: false,
  page: 1,
};

const photos = produce((draft, action) => {
  switch (action.type) {
    case Types.SET_PHOTOS:
      draft.photos.push(...action.payload);
      break;
    case Types.SET_RANDOM_PHOTO:
      draft.randomPhoto = action.payload;
      break;
    case Types.SET_FOUND_PHOTOS:
      draft.isLoading = false;
      draft.foundPhotos = action.payload;
      break;
    case Types.SET_QUERY:
      draft.query = action.payload;
      break;
    case Types.SET_CLEAR:
      draft.query = '';
      break;
    case Types.SET_IS_LOADING:
      draft.isLoading = true;
      break;
    case Types.SET_PAGE:
      draft.page = action.payload;
      break;
    default:
  }
}, initialState);

export default photos;
