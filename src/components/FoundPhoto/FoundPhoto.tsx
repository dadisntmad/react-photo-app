import React from 'react';
import Masonry from 'react-masonry-component';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {setShowModal} from '../../redux/actions/modal';
import {fetchPhotosSearch} from '../../redux/actions/photos';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import './index.scss';
import {RootState} from "../../redux/reducers";

const FoundPhoto: React.FC = () => {
  const {query} = useParams<{ query: string }>();
  const dispatch = useDispatch();
  const foundPhotos = useSelector(({photos}: RootState) => photos.foundPhotos);
  const isLoading = useSelector(({photos}: RootState) => photos.isLoading);
  const showModal = useSelector(({modal}: RootState) => modal.showModal);

  React.useEffect(() => {
    dispatch(fetchPhotosSearch(query));
  }, [dispatch, query]);

  const titleCase = (phrase: string): string => {
    return phrase
      .toLowerCase()
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(' ');
  };

  return isLoading ? (
    <Loader/>
  ) : (
    <>
      {showModal && <Modal/>}
      <div className="found">
        <h1>{titleCase(query)}</h1>
        <Masonry options={{fitWidth: true}} style={{margin: '0 auto'}}>
          {foundPhotos &&
          foundPhotos.map((foundPhoto) => (
            <div
              key={foundPhoto.id}
              className="found__item"
              onClick={() => dispatch(setShowModal(foundPhoto.id))}>
              <img src={foundPhoto.urls.small} alt={foundPhoto.alt_description}/>
              <div className="found__item-info">
                <div className="found__item-info-flex">
                  <div>
                    <img
                      src={foundPhoto.user.profile_image.small}
                      alt={foundPhoto.alt_description}
                    />
                  </div>
                  <p>{foundPhoto.user.name}</p>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </>
  );
};

export default FoundPhoto;
