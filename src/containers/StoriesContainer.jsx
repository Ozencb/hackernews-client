import React, { useState, useEffect } from 'react';
import { getStoryIds } from '../services/api';
import Story from '../components/Story';
import { GlobalStyle, StoriesContainerWrapper } from '../styles/StoriesContainerStyles';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  const { count } = useInfiniteScroll();

  useEffect(() => {
    getStoryIds().then((ids) => {
      ids && setStoryIds(ids);
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper>
        <h1>Hackernews</h1>

        {storyIds.slice(0, count).map((storyId) => <Story key={storyId} storyId={storyId} />)}
      </StoriesContainerWrapper>
    </>
  );
};

export default StoriesContainer;
