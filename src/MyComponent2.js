import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContent } from './redux-toolkit/contentSlice';

const MyComponent2 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);

  const content = useSelector((state) => state.content.contents);
  const isLoading = useSelector((state) => state.content.isLoading);
  const error = useSelector((state) => state.content.error);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error...</p>;
  }

  return (
    <div>
      {content.map((photo) => (
        <>
          <p>{photo.title}</p>
          {/* <img src={photo.thumbnailUrl} alt='...' /> */}
        </>
      ))}
    </div>
  );
};

export default MyComponent2;
