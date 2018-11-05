(function () {
  let button = document.querySelector('.js-button');

  let f = (args) => {
    let res = [];
    let repeats = [];

    if (!(args instanceof Array)) {
      args = args.split('');
    }

    for (let value of args) {
      repeats[value] = (repeats[value]||0)+1;
    }

    for(let i in args) {
      if ( repeats[ args[i] ] < 3 ) {
        res.push(args[i]);
      }
    }

    return(`исходные данные: [`+ args +`]`+`\nновый массив: [`+ res +`]`);
  };

  let check = () => {
    alert(f([1, 2, 1, 3, 1, 3, 1, 4])); // a = [2, 3, 3, 4]
    alert(f("mama ramu")); // b = [" ", "r", "u"];
  };

  button.addEventListener('click', check);
})();
