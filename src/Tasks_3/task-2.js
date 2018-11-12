(() => {
  const arr = [3, 7, 4, 1, 6, 5, 8];
  const arr2 = ["asd", "dsa", "sda"];
  // alert("bubble: " + bubbleSort(arr));
  // console.log(arr)
  // alert("insertion: " + insertionSort(arr2));
  // alert("selection: " + selectionSort(arr2));

  const users = [
    { name: 'Ваня', level: '3' },
    { name: 'Саша', level: '1' },
    { name: 'Маша', level: '2' },
    { name: 'Ника', level: '3' },
    { name: 'Вера', level: '1' },
    { name: 'Саша', level: '2' },
    { name: 'Ваня', level: '2' }
  ];
  // console.log(users);

  console.log("bubble: ", bubbleSort(users, "level"));
  console.log(users);

  console.log("insertion: ", insertionSort(users, "name"));
  console.log("selection: ", selectionSort(users, "name"));
  console.log(users);

  function swap(items, left, right) {
    let temp = [];
    if (left !== right) {
      temp = items[left];
      items[left] = items[right];
      items[right] = temp;
    }
  }

  function getItem(item, fieldName) {
    if (fieldName) {
      item = item[fieldName]
    }
    return item;
  }

  function bubbleSort(array, fieldName) {
    let { length } = array, items = [], i;
    while (length--) {
      items[length] = array[length];
    }

    let swapped = true;
    while (swapped) {
      swapped = false;
      for (i = 1; i < length; i++) {
        if (getItem(items[i - 1], fieldName) > getItem(items[i], fieldName)
            && getItem(items[i - 1], fieldName) !== getItem(items[i], fieldName))
        {
          swap(items, i - 1, i);
          swapped = true;
        }
      }
    }
    return items;
  }

  function insertionSort(array, fieldName) {
    let { length } = array, items = [];
    let i, j, current;
    while (length--) {
      items[length] = array[length];
    }

    for (i = 1; i < length; i++) {
      current = items[i];
      j = i;
      while (j > 0 && getItem(items[j - 1], fieldName) > getItem(current, fieldName)) {
        items[j] = items[j - 1];
        j--;
      }
      items[j] = current;
    }
    return items;
  }

  function selectionSort(array, fieldName) {
    let { length } = array, items = [];
    let i, j, indexMin;
    while (length--) {
      items[length] = array[length];
    }
    for (i = 0; i < length - 1; i++) {
      indexMin = i;
      for (j = i + 1; j < length; j++) {
        if (getItem(items[indexMin], fieldName) > getItem(items[j], fieldName)) {
          indexMin = j;
        }
      }
      swap(items, indexMin, i);
    }
    return items;
  }
})();