import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from 'react-masonry-component';
import { useDispatch } from 'react-redux';
import { setShowModal } from '../../redux/actions/modal';
import Loader from '../Loader/Loader';

const HomeContent = ({ photos, isLoading, fetchMoreData }) => {
  const dispatch = useDispatch();

  return (
    <InfiniteScroll
      next={() => fetchMoreData()}
      hasMore={true}
      loader={null}
      dataLength={photos.length}
      style={{ overflow: 'hidden' }}>
      <Masonry options={{ isFitWidth: 'true' }} style={{ margin: '0 auto' }}>
        {isLoading ? (
          <Loader />
        ) : (
          photos &&
          photos.map((listPhotos) => (
            <div
              key={listPhotos.id}
              onClick={() => dispatch(setShowModal(listPhotos.id))}
              className="home__item">
              <img src={listPhotos.urls.small} alt={listPhotos.alt_description} />
              <div className="home__item-info">
                <div className="home__item-info-flex">
                  <div>
                    <img
                      src={listPhotos.user.profile_image.small}
                      alt={listPhotos.alt_description}
                    />
                  </div>
                  <p>{listPhotos.user.name}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </Masonry>
    </InfiniteScroll>
  );
};

export default HomeContent;
