require('dotenv').config({ path: './.env' });
module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    testMatch: [
      '<rootDir>/**/*.test.js',
      '<rootDir>/**/*.spec.js',
    ],
  };
  