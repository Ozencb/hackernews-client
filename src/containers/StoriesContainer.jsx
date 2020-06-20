import React, { useState, useEffect } from 'react';
import { getStoryIds } from '../services/api';
import Story from '../components/Story';

const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((ids) => {
      ids && setStoryIds(ids);      
    });
  }, []);

  // storyIds.map((storyId) => <Story key={storyId} storyId={storyId} />)

  return  <Story storyId={23583238} />
};

export default StoriesContainer;
