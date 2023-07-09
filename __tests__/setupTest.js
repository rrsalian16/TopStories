import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('react-native/Libraries/Utilities/Dimensions', () => {
    return {
        get: () => ({
            width: 375,
            height: 667,
        }),
    };
});
