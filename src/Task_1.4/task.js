// Получить номер дня в неделе. Неделя в JavaScript начинается с воскресенья, так что результат будет числом от 0(воскресенье) до 6(суббота).
const YEAR = 2018;
let month, day;

function getDayName() {
  month = prompt('Введите номер месяца (1-12)');
  day = prompt('Введите число в этом месяце (1-31)');

  if ( (month || day) === null ) {
    return
  }

  let date = new Date(YEAR, parseFloat(month) - 1, parseFloat(day));

  switch (date.getDay()) {
    case 0:
      alert('Воскресенье');
      break;
    case 1:
      alert('Понедельник');
      break;
    case 2:
      alert('Вторник');
      break;
    case 3:
      alert('Среда');
      break;
    case 4:
      alert('Четверг');
      break;
    case 5:
      alert('Пятница');
      break;
    case 6:
      alert('Суббота');
      break;
    default:
      alert('Неверная дата');
  }
}
