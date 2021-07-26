import {produce} from 'immer';
import {ModalActionType, ModalActionTypes, ModalState} from "../../types/modal";

const initialState: ModalState = {
  photo: {},
  isLoading: false,
  showModal: false,
  photoId: '',
};

const modal = produce((draft, action: ModalActionType) => {
  switch (action.type) {
    case ModalActionTypes.SET_PHOTO:
      draft.isLoading = false;
      draft.photo = action.payload;
      break;
    case ModalActionTypes.SET_IS_LOADING:
      draft.isLoading = true;
      break;
    case ModalActionTypes.SET_SHOW_MODAL:
      draft.showModal = true;
      draft.photoId = action.payload;
      break;
    case ModalActionTypes.SET_CLOSE_MODAL:
      draft.showModal = false;
      draft.photoId = '';
      draft.photo = {};
      break;
    default:
  }
}, initialState);

export default modal;
