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

      <StoryMeta>
        <span>

          <StoryMetaElement data-testid="story-by" color="#000">
            By:
            <span>
              {' '}
              {story.by}
            </span>
          </StoryMetaElement>

          <StoryMetaElement data-testid="story-time" margin="10px" color="#000">
            Time:
            <span>
              {' '}
              {mapTime(story.time)}
            </span>
          </StoryMetaElement>

        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
};

export default Story;
