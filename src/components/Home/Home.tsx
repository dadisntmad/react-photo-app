import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setShowModal} from '../../redux/actions/modal';
import {fetchPhotos, fetchRandomPhoto} from '../../redux/actions/photos';
import Modal from '../Modal/Modal';
import HomeContent from './HomeContent';
import './index.scss';
import {RootState} from "../../redux/reducers";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const photos = useSelector(({photos}: RootState) => photos.photos);
  const randomPhoto = useSelector(({photos}: RootState) => photos.randomPhoto);
  const isLoading = useSelector(({photos}: RootState) => photos.isLoading);
  const page = useSelector(({photos}: RootState) => photos.page);
  const showModal = useSelector(({modal}: RootState) => modal.showModal);

  const fetchMoreData = (page: number) => {
    dispatch(fetchPhotos(page));
  };

  React.useEffect(() => {
    dispatch(fetchRandomPhoto());
  }, [dispatch]);

  React.useEffect(() => {
    fetchMoreData(page);
  }, []);

  return (
    <>
      {showModal && <Modal/>}
      <div className="home">
        <div className="home__content">
          {randomPhoto &&
          randomPhoto.map((photo) => (
            <div key={photo.id} className="home__content-item">
              <img src={photo.urls.regular} alt={photo.alt_description}/>
              <p>
                <span onClick={() => dispatch(setShowModal(photo.id))}>Photo </span>by {' '}
                {photo.user.name}
              </p>
            </div>
          ))}
          <div className="home__content-info">
            <h3 className="title">Square</h3>
            <p className="description">
              Free amazing photos inspired by people all over the world.
            </p>
          </div>
        </div>
      </div>
      <HomeContent photos={photos} isLoading={isLoading} fetchMoreData={fetchMoreData} page={page}/>
    </>
  );
};

export default Home;
