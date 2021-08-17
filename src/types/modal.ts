import { ModalActionTypes } from '../redux/actions/modal';
import { Urls, UserType } from './photos';

export type ModalPhotoTypes = {
  user?: UserType;
  urls?: Urls;
  alt_description?: string;
  location?: Location;
};

type Location = {
  title: string;
};

export type ModalState = {
  photo: ModalPhotoTypes;
  isLoading: boolean;
  showModal: boolean;
  photoId: string;
};

type setPhoto = {
  type: ModalActionTypes.SET_PHOTO;
  payload: ModalPhotoTypes;
};

type setIsLoading = {
  type: ModalActionTypes.SET_IS_LOADING;
};

type setShowModal = {
  type: ModalActionTypes.SET_SHOW_MODAL;
  payload: string;
};

type setCloseModal = {
  type: ModalActionTypes.SET_CLOSE_MODAL;
};

export type ModalActionType = setPhoto | setIsLoading | setShowModal | setCloseModal;
