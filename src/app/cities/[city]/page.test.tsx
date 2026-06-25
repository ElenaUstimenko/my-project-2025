import City, { generateStaticParams } from './page';
import { cityList } from '@utils/constantsCity';

const mockNotFound = jest.fn(() => {
  throw new Error('NEXT_NOT_FOUND');
});

jest.mock('next/navigation', () => ({
  notFound: () => mockNotFound(),
}));

jest.mock('@components/CityPage/CityPage', () => ({
  CityPage: ({ city }: { city: { name: string } }) => city.name,
}), { virtual: true });

describe('city route', () => {
  beforeEach(() => {
    mockNotFound.mockClear();
  });

  it('generates static params from city data', () => {
    expect(generateStaticParams()).toEqual(
      cityList.map((city) => ({
        city: city.path,
      })),
    );
  });

  it('returns notFound for unknown city', async () => {
    await expect(
      City({ params: Promise.resolve({ city: 'unknown-city' }) }),
    ).rejects.toThrow('NEXT_NOT_FOUND');

    expect(mockNotFound).toHaveBeenCalledTimes(1);
  });
});
