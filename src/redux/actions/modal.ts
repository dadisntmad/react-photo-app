import instance from '../../API/api';
import {ModalActionType, ModalActionTypes} from "../../types/modal";
import {Dispatch} from "redux";

export const setPhoto = (photo: any): ModalActionType => ({
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

export const fetchPhoto = (photoId: string) => (dispatch: Dispatch<ModalActionType>) => {
  dispatch(setIsLoading());
  instance.get(`/photos/${photoId}`).then(({data}) => {
    dispatch(setPhoto(data));
  });
};
