const getLocalStorage = () => {
  const arrStr = localStorage.getItem("comments");
  const arr = JSON.parse(arrStr);
  if (arr) {
    return arr;
  } else {
    return [];
  }
};

const setLocalStorage = (array) => {
//   const mergeArr = [...getLocalStorage(), array];
//   console.log(mergeArr)
  const arrStr = JSON.stringify(array);
  localStorage.setItem("comments", arrStr);
};

export { setLocalStorage, getLocalStorage };
