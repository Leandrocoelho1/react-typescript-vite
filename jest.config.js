module.exports = {
  // The root of the source code, `<rootDir>` is a token Jest substitutes
  roots: ['<rootDir>/src/'],

  // The test environment that will be used for testing, jsdom for browser environment
  testEnvironment: 'jsdom',

  // Jest transformations -- this adds support for TypeScript using ts-jest
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],

  // Code coverage config
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coverageDirectory: '<rootDir>/coverage/',
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '(.*).d.ts$'],

  // Important: order matters, specific rules should be defined first
  // See : https://jestjs.io/fr/docs/configuration#modulenamemapper-objectstring-string--arraystring
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/mocks/fileMock.ts',
    '.+\\.(css|sass|scss)$': 'identity-obj-proxy', // Return proxies objects
    '^@/(.*)$': '<rootDir>/src/$1', // To resolve typescript path aliases
  },
}
