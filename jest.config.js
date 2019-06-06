module.exports = {
  setupFiles: ['<rootDir>/__test__/setup.js'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
