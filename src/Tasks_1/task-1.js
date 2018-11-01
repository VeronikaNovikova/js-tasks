(function() {
    let x, y;

    function enterNumbers() {
        while(true) {
            if(Math.random() > 0.99) {
                break;
            } else {
                x = +prompt('Введите первое число', null);
                y = +prompt('Введите второе число', null);

                if (!Number.isInteger(x)) {
                    alert("первый ввод – не число");
                    return;
                }
                if (!Number.isInteger(y)) {
                    alert("второй ввод – не число");
                    return;
                }
                compareNumbers(x, y);
            }
        }
    }

    function compareNumbers(x, y){
        if (x < y) {
            alert("первое число меньше");
        } else if (x > y) {
            alert("второе число меньше");
        } else {
            alert("числа равны");
        }
    }

    enterNumbers();
})();
