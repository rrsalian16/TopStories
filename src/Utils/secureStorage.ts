import EncryptedStorage from 'react-native-encrypted-storage';

export enum SecureStorageKey {
    ACCESS_TOKEN = 'access-token',
    REFRESH_TOKEN = 'refresh-token',
}

const set = async (key: SecureStorageKey, value: unknown) => {
    try {
        await EncryptedStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.log(error);
    }
};

const get = async (key: SecureStorageKey) => {
    try {
        const session = await EncryptedStorage.getItem(key);

        if (session !== undefined) return true;
    } catch (error) {
        console.log(error);
    }
};

const remove = async (key: SecureStorageKey) => {
    try {
        await EncryptedStorage.removeItem(key);
    } catch (error) {
        console.log(error);
    }
};

const clearStorage = async () => {
    try {
        await EncryptedStorage.clear();
    } catch (error) {
        console.log(error);
    }
};

export const SecureUtils = {
    set,
    get,
    remove,
    clearStorage,
};
