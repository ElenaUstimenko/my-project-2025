import { render, screen } from '@testing-library/react';
import { VideoList } from './VideoList';

describe('VideoList accessibility', () => {
  it('renders named play buttons for videos', () => {
    render(
      <VideoList
        city={{
          video: [
            {
              id: 1,
              src: '/video/test.webm',
              img: {
                src: '/images/test-poster.webp',
                width: 100,
                height: 100,
              },
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
