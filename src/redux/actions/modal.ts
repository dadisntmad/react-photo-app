import instance from '../../API/api';
import { ModalActionType, ModalPhotoTypes } from '../../types/modal';
import { Dispatch } from 'redux';

export enum ModalActionTypes {
  SET_PHOTO = 'MODAL@SET_PHOTO',
  SET_IS_LOADING = 'MODAL@SET_IS_LOADING',
  SET_SHOW_MODAL = 'MODAL@SET_SHOW_MODAL',
  SET_CLOSE_MODAL = 'MODAL@SET_CLOSE_MODAL',
}

export const setPhoto = (photo: ModalPhotoTypes): ModalActionType => ({
  type: ModalActionTypes.SET_PHOTO,
  payload: photo,
});

export const setIsLoading = (): ModalActionType => ({
  type: ModalActionTypes.SET_IS_LOADING,
});

export const setShowModal = (photoId: string): ModalActionType => ({
  type: ModalActionTypes.SET_SHOW_MODAL,
  payload: photoId,
});

export const setCloseModal = (): ModalActionType => ({
  type: ModalActionTypes.SET_CLOSE_MODAL,
});

export const fetchPhoto = (photoId: string) => async (dispatch: Dispatch<ModalActionType>) => {
  try {
    dispatch(setIsLoading());
    const response = await instance.get(`/photos/${photoId}`);
    dispatch(setPhoto(response.data));
  } catch (e) {
    console.log(e);
  }
};
