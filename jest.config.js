/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'react-native',
    automock: true,
    moduleFileExtensions: ['js', 'ts', 'tsx'],
    setupFilesAfterEnv: [
        '@testing-library/jest-native/extend-expect',
        '<rootDir>/__tests__/setupTest.js',
    ],
    moduleDirectories: ['src', 'node_modules'],
    moduleNameMapper: {
        '@TopStories/(.*)': '<rootDir>/src/$1',
    },
    setupFiles: ['<rootDir>/__tests__/setupTest.js'],
    transform: {
        '\\.(ts|tsx)$': 'ts-jest',
        '^.+\\.(js)$': '<rootDir>/node_modules/babel-jest',
    },
    testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    testPathIgnorePatterns: [
        '\\.snap$',
        '<rootDir>/node_modules/',
        '<rootDir>/__tests__/setupTest.js',
        'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
        'node_modules/(?!@react-native|react-native|newrelic-react-native-agent|@react-navigation/native-stack)',
    ],
    cacheDirectory: '.jest/cache',
};
