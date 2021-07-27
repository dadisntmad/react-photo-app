import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import location from '../../assets/location.svg';
import {fetchPhoto, setCloseModal} from '../../redux/actions/modal';
import Loader from '../Loader/Loader';
import './index.scss';
import {RootState} from "../../redux/reducers";

const Modal: React.FC = () => {
  const dispatch = useDispatch();
  const photoId = useSelector(({modal}: RootState) => modal.photoId);
  const photo = useSelector(({modal}: RootState) => modal.photo);
  const isLoading = useSelector(({modal}: RootState) => modal.isLoading);
  const clickRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;

  const handleOutsideClick = (e: Event) => {
    if (clickRef.current && !clickRef.current.contains(e.target as Node)) {
      dispatch(setCloseModal());
    }
  };

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  React.useEffect(() => {
    dispatch(fetchPhoto(photoId));
  }, [dispatch, photoId]);

  return (
    <div className="modal">
      <div ref={clickRef} className="modal__container">
        <span className="modal__container-button" onClick={() => dispatch(setCloseModal())}>
          <svg
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30px"
            height="30px">
            <path
              d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/>
          </svg>
        </span>
        {isLoading && <Loader/>}
        {Object.keys(photo).length > 0 && (
          <div className="modal__content">
            <div className="author__info">
              <img
                src={photo.user!.profile_image!.small}
                alt={photo.user!.name}
                className="author__info-photo"
              />
              <p className="author__info-name"> {photo.user!.name}</p>
            </div>
            <img
              src={photo.urls!.regular}
              alt={photo.alt_description}
              className="modal__content-photo"
            />
            <p className="modal__content-location">
              {photo.location!.title && (
                <img src={location} alt="" width="16px" style={{marginRight: '5px'}}/>
              )}
              {photo.location!.title}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
