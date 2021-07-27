export type ModalPhotoTypes = {
  user?: {
    name?: string,
    profile_image?: {
      small: string,
    },
  },
  urls?: {
    regular: string,
  },
  alt_description?: string,
  location?: {
    title: string,
  },
}

export type ModalState = {
  photo: ModalPhotoTypes,
  isLoading: boolean,
  showModal: boolean,
  photoId: string
}

export enum ModalActionTypes {
  SET_PHOTO = 'MODAL@SET_PHOTO',
  SET_IS_LOADING = 'MODAL@SET_IS_LOADING',
  SET_SHOW_MODAL = 'MODAL@SET_SHOW_MODAL',
  SET_CLOSE_MODAL = 'MODAL@SET_CLOSE_MODAL',
}

type setPhoto = {
  type: ModalActionTypes.SET_PHOTO,
  payload: ModalPhotoTypes
}

type setIsLoading = {
  type: ModalActionTypes.SET_IS_LOADING
}

type setShowModal = {
  type: ModalActionTypes.SET_SHOW_MODAL,
  payload: string
}

type setCloseModal = {
  type: ModalActionTypes.SET_CLOSE_MODAL
}

export type ModalActionType = setPhoto | setIsLoading | setShowModal | setCloseModal;