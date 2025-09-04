export const getLocalStorage = (item, parse) => {
  if (typeof value === 'object' || parse) {
    const element = localStorage.getItem(item);
    return element ? JSON.parse(element) : element;
  } else {
    return localStorage.getItem(item);
  }
};

export const setLocalStorage = (key, value) => {
  if (typeof value === 'object') {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, value);
  }
};

export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};
