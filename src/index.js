import _ from 'lodash';

function component() {
    let element = document.createElement('div');

    let first_tasks = [
        {
            "name": "Задача 1",
            "path": "task-1",
        },
        {
            "name": "Задача 2",
            "path": "task-2",
        },
        {
            "name": "Задача 3",
            "path": "task-3",
        },
        {
            "name": "Задача 4",
            "path": "task-4",
        },
    ];

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());
