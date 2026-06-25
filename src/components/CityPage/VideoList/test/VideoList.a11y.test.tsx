import { render, screen } from '@testing-library/react';
import { VideoList } from '../VideoList';

describe('VideoList accessibility', () => {
  it('renders named play buttons for videos', () => {
    render(
      <VideoList
        city={{
          video: [
            {
              id: 1,
              src: '/video/test.webm',
              img: '/images/test-poster.webp',
            },
          ],
        }}
      />,
    );

    expect(
      screen.getByRole('button', { name: /Открыть видео 1/i }),
    ).toBeInTheDocument();
  });
});
