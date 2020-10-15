const arr = [1, 1, "1", 17, true, true, false, false, "true", "a", {}, {}];
// => [1, '1', 17, true, false, 'true', 'a', {}, {}]

//Set
[...new Set(arr)];

//indexOf
function repeat(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) == -1) {
      result.push(arr[i]);
    }
  }
  return result;
}

//includes
function repeat(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

//Map
function repeat(arr) {
  const map = new Map();
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], true);
      result.push(arr[i]);
    }
  }
  return result;
}

//filter
function repeat(arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
}
