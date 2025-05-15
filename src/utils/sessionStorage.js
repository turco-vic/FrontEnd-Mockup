const isClient = typeof window !== 'undefined';

export const getSessionStorage = (key, initialValue) => {
    if (!isClient) return initialValue;

    const stored = sessionStorage.getItem(key);

    return stored ? JSON.parse(stored) : initialValue;
}

export const setSessionStorage = (key, value) => {
    if (!isClient) {

        sessionStorage.setItem(key, JSON.stringify(value));
    }
};
