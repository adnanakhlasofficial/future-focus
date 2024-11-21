const getLocalStorage = (id) => {
  const arrStr = localStorage.getItem(id);
  const arr = JSON.parse(arrStr);
  if (arr) {
    return arr;
  } else {
    return [];
  }
};

const setLocalStorage = (id, array) => {
  const arrStr = JSON.stringify(array);
  localStorage.setItem(id, arrStr);
};

export { setLocalStorage, getLocalStorage };
