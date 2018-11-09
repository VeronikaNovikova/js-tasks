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
  console.log("insertion: ", insertionSort(users, "name"));
  console.log("selection: ", selectionSort(users));

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
    let items = JSON.parse(JSON.stringify(array));

    let swapped = true;
    while (swapped) {
      swapped = false;
      for (let i = 1; i < items.length; i++) {
        let left = getItem(items[i - 1], fieldName),
            right = getItem(items[i], fieldName);
        if (left > right && left !== right) {
          swap(items, i - 1, i);
          swapped = true;
        }
      }
    }
    return items;
  }

  function insertionSort(array, fieldName) {
    let items = JSON.parse(JSON.stringify(array));

    for (let i = 1; i < items.length; i++) {
      const current = items[i];
      let j = i;

      while (j > 0 && getItem(items[j - 1], fieldName) > getItem(current, fieldName)) {
        items[j] = items[j - 1];
        j--;
      }
      items[j] = current;
    }
    return items;
  }

  function selectionSort(array, fieldName) {
    let items = JSON.parse(JSON.stringify(array));

    for (let i = 0; i < items.length - 1; i++) {
      let indexMin = i;
      for (let j = i + 1; j < items.length; j++) {
        if (getItem(items[indexMin], fieldName) > getItem(items[j], fieldName)) {
          indexMin = j;
        }
      }
      swap(items, indexMin, i);
    }
    return items;
  }
})();