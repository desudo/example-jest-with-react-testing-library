'use strict';

const transform = {
  '^.+\\.(ts|tsx)$': 'ts-jest'
};

const globals = {
  'ts-jest': {
    tsconfig: '<rootDir>/tsconfig.json'
  }
};

const testEnvironment = 'node';

const createTestProject = (name, color) => ({
  displayName: {
    name,
    color
  },
  testMatch: [
    `<rootDir>/test/${name}/**/?(*.)+(spec|test).+(ts|tsx|js)`
  ],
  testEnvironment,
  transform,
  globals
});

const createComponentTestProject = color => {
  const testConfig = createTestProject('component', color);

  return {
    ...testConfig,
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: [
      '@testing-library/jest-dom'
    ]
  };
};

const jestConfiguration = {
  testEnvironment,
  transform,
  globals,
  collectCoverageFrom: [
    '<rootDir>/lib/**/*.{ts,tsx,js}'
  ],
  verbose: true,
  clearMocks: true,
  resetMocks: true,
  resetModules: true,
  restoreMocks: true,
  testTimeout: 120_000,
  projects: [
    createTestProject('unit', 'blue'),
    createTestProject('cli', 'magenta'),
    createTestProject('integration', 'yellow'),
    createTestProject('linterrule', 'cyan'),
    createTestProject('web', 'green'),
    createComponentTestProject('white')
  ]
};

module.exports = jestConfiguration;
