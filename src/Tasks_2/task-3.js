(function() {
  let button = document.querySelector('.js-button');
  button.addEventListener('click', call);

  function* sequence(start, step){
    start = start || 0;
    step = step || 1;
    while(true){
      yield start;
      start+=step;
    }
  }

  function call() {
    let generator = sequence(10,3);

    alert(generator.next().value); // 10
    alert(generator.next().value); // 13
    alert(generator.next().value); // 16
  }

})();
