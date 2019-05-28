module.exports = {
  setupFiles: ['<rootDir>/test/setup.js'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
};
