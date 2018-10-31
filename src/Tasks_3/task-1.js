let button = document.querySelector('.js-button');

let start;
let end;
let step;

button.addEventListener('click', function (start, end, step) {
    start = document.getElementById('start').value;
    end = document.getElementById('end').value;
    step = document.getElementById('step').value;

    if (step !== "") {
        range(parseInt(start), parseInt(end), parseInt(step));
        return;
    }
    range(parseInt(start), parseInt(end));
});


function range(start, end, step = 1) {
    let arr = [];

    if (step < 0 && start < end) {
        return alert("Начало не может быть меньше конца при отрицательном шаге");
    } else if (step > 0 && start > end) {
        return alert("Начало не может быть больше конца при положительном шаге")
    }

    for (let i = start; (step < 0 ? (i >= end) : (i <= end)); i = i + step) {
        arr.push(i);
    }

    alert('Массив: [' + arr + ']');
}