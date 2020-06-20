import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import StoriesContainer from '../containers/StoriesContainer';
import { storyIds, singularStory } from '../fixtures';
import { getStory, getStoryIds } from '../services/api';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import { STORY_INCREMENT } from '../constants/index';

beforeEach(cleanup);

jest.mock('../hooks/useInfiniteScroll');
jest.mock('../services/api', () => ({
  getStory: jest.fn(),
  getStoryIds: jest.fn(),
}));

test('Renders the application', async () => {
  useInfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT,
  }));
  getStory.mockImplementation(() => Promise.resolve(singularStory));
  getStoryIds.mockImplementation(() => Promise.resolve(storyIds));

  await act(async () => {
    const { getByText, queryByTestId } = render(<StoriesContainer />);
    await waitForElement(() => [
      expect(getByText('Hackernews')).toBeTruthy(),
      expect(getByText('My YC app: Dropbox - Throw away your USB drive')).toBeTruthy(),
      expect(queryByTestId('story-by').textContent).toEqual('By: dhouston'),
    ]);
  });
});
