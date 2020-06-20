import React, { useState, useEffect } from 'react';
import { getStory } from '../services/api';
import {
  StoryWrapper, StoryTitle, StoryMeta, StoryMetaElement,
} from '../styles/StoryStyles';
import mapTime from '../mappers/mapTime';

const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => {
      data && data.url && setStory(data);
    });
  }, []);

  return story && story.url ? (
    <StoryWrapper data-testid="story">
      <StoryTitle>
        <a href={story.url}>{story.title}</a>
      </StoryTitle>

      <StoryMeta data-testid="story-by">
        <span>
          <StoryMetaElement color="#000">By: </StoryMetaElement>
          {story.by}
          <StoryMetaElement margin="10px" color="#000">Time: </StoryMetaElement>
          {mapTime(story.time)}
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
};

export default Story;
