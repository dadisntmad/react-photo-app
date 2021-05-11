import { produce } from 'immer';
import { Types } from '../actions/modal';

const initialState = {
  photo: {},
  isLoading: false,
  showModal: false,
  photoId: '',
};

const modal = produce((draft, action) => {
  switch (action.type) {
    case Types.SET_PHOTO:
      draft.isLoading = false;
      draft.photo = action.payload;
      break;
    case Types.SET_IS_LOADING:
      draft.isLoading = true;
      break;
    case Types.SET_SHOW_MODAL:
      draft.showModal = true;
      draft.photoId = action.payload;
      break;
    case Types.SET_CLOSE_MODAL:
      draft.showModal = false;
      draft.photoId = '';
      draft.photo = {};
      break;
    default:
  }
}, initialState);

export default modal;
