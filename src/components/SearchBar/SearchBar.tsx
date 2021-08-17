import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { setClear, setQuery } from '../../redux/actions/photos';
import { RootState } from '../../redux/reducers';

import './index.scss';

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const query = useSelector(({ photos }: RootState) => photos.query);
  let history = useHistory();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value));
  };

  const handleResults = (query: string) => {
    history.push(`/${query}`.toLowerCase());
    dispatch(setClear());
  };

  const handleClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleResults(query);
    } else {
      return false;
    }
  };

  return (
    <form className="form">
      <div className="form__content">
        <span onClick={() => handleResults(query)} className="search__button">
          <svg
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="20px"
            height="20px">
            <path d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search free amazing photos"
          value={query}
          onChange={handleOnChange}
          onKeyPress={handleClick}
        />
        {query ? (
          <span onClick={() => dispatch(setClear())} className="cancel__button">
            <svg
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20px"
              height="20px">
              <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
            </svg>
          </span>
        ) : null}
      </div>
    </form>
  );
};

export default SearchBar;
