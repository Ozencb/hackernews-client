import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Story from '../components/Story';
import { singularStory } from '../fixtures';
import { getStory } from '../services/api';

beforeEach(() => {
  cleanup();
  jest.resetAllMocks();
});

jest.mock('../services/api', () => ({
  getStory: jest.fn(),
}));

test('Renders the story component', async () => {
  getStory.mockImplementation(() => Promise.resolve(singularStory));

  await act(async () => {
    const { getByText, queryByTestId, getByTestId } = render(<Story storyId="1" />);
    await waitForElement(() => [
      expect(getByTestId('story')).toBeTruthy(),
      expect(getByText('My YC app: Dropbox - Throw away your USB drive')).toBeTruthy(),
      expect(queryByTestId('story-by').textContent).toEqual('By: dhouston'),
    ]);
  });
});
