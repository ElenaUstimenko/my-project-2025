import { KETA_URL, WOWPASS_URL } from './constants';
import { cityList } from './constantsCity';
import { placesList } from './constantsPlaces';

describe('external URLs', () => {
  const externalUrls = [
    { name: 'K-ETA', url: KETA_URL, hostname: 'www.k-eta.go.kr' },
    { name: 'WOWPASS', url: WOWPASS_URL, hostname: 'www.wowpass.io' },
  ];

  it.each(externalUrls)(
    'keeps $name URL non-empty and valid',
    ({ url, hostname }) => {
      expect(url.trim()).not.toBe('');

      const parsedUrl = new URL(url);

      expect(parsedUrl.protocol).toBe('https:');
      expect(parsedUrl.hostname).toBe(hostname);
    },
  );
});

describe('city routes', () => {
  it('keeps city paths non-empty, unique and URL-safe', () => {
    const cityPaths = cityList.map((city) => city.path);

    expect(cityPaths.length).toBeGreaterThan(0);
    expect(new Set(cityPaths).size).toBe(cityPaths.length);

    cityPaths.forEach((path) => {
      expect(path.trim()).not.toBe('');
      expect(path).toMatch(/^[a-z0-9-]+$/);
      expect(`/cities/${path}`).toMatch(/^\/cities\/[a-z0-9-]+$/);
    });
  });

  it('keeps required city content filled', () => {
    cityList.forEach((city) => {
      expect(city.name.trim()).not.toBe('');
      expect(city.text0.trim()).not.toBe('');
      expect(city.images.length).toBeGreaterThan(0);
      expect(city.video.length).toBeGreaterThan(0);
    });
  });
});

describe('city media data', () => {
  it('keeps image ids unique and alt text filled for each city', () => {
    cityList.forEach((city) => {
      const imageIds = city.images.map((image) => image.id);

      expect(new Set(imageIds).size).toBe(imageIds.length);

      city.images.forEach((image) => {
        expect(image.src).toBeTruthy();
        expect(image.alt.trim()).not.toBe('');
      });
    });
  });

  it('keeps video ids unique and media sources filled for each city', () => {
    cityList.forEach((city) => {
      const videoIds = city.video.map((video) => video.id);

      expect(new Set(videoIds).size).toBe(videoIds.length);

      city.video.forEach((video) => {
        expect(video.src).toBeTruthy();
        expect(video.img).toBeTruthy();
      });
    });
  });
});

describe('places data', () => {
  it('keeps place ids unique and card content filled', () => {
    const placeIds = placesList.map((place) => place.id);

    expect(placesList.length).toBeGreaterThan(0);
    expect(new Set(placeIds).size).toBe(placeIds.length);

    placesList.forEach((place) => {
      expect(place.img).toBeTruthy();
      expect(place.alt.trim()).not.toBe('');
      expect(place.text.trim()).not.toBe('');
    });
  });
});
