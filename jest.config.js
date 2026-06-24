const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/src/test/__mocks__/svgMock.tsx',
    '\\.(webm|mp4|mov|avi|mkv)$': '<rootDir>/src/test/__mocks__/fileMock.ts',
  },
  modulePathIgnorePatterns: ['<rootDir>/.next/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/'],
  testEnvironment: 'jsdom',
};

module.exports = createJestConfig(customJestConfig);
