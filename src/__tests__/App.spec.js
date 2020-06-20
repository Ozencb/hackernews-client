import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, cleanup } from '@testing-library/react';
import App from '../App';
import { storyIds, singularStory } from '../fixtures';
import { getStory, getStoryIds } from '../services/api';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import { STORY_INCREMENT } from '../constants/index';

beforeEach(cleanup);

test('Renders the application', async () => {
  useInfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT,
  }));
});
