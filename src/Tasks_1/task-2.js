(() => {
  const MAX_FLOOR_COUNT = 25;
  const MAX_ENTRANCE_COUNT = 10;
  const MAX_APARTMENTS_ON_FLOOR_COUNT = 20;

  let button = document.querySelector('.js-button'),
      entrance_field = document.getElementById('entrance'),
      floor_field = document.getElementById('floor');

  let validateField = (field, max) => {
    let parent = field.parentNode,
        parentClasses = parent.classList;

    if (field.value > max) {
      if (!parentClasses.contains('error')) {
        parentClasses.add('error');
        parent.querySelector('.msg-validation').innerText = 'Максимум: ' + max;
      }
      return false;
    } else {
      if (parentClasses.contains('error')) {
        parentClasses.remove('error');
        parent.querySelector('.msg-validation').innerText = '';
      }
      return true;
    }
  };

  let checkRoom = (e) => {
    e.preventDefault();

    let maxFloorField = document.getElementById('max_floor'),
        maxEntranceField = document.getElementById('max_entrance'),
        maxApartmentsOnFloorField = document.getElementById('max_apartments_on_floor');

    if (!(
        validateField(maxFloorField, MAX_FLOOR_COUNT)
        && validateField(maxEntranceField, MAX_ENTRANCE_COUNT)
        && validateField(maxApartmentsOnFloorField, MAX_APARTMENTS_ON_FLOOR_COUNT)
    )) return;

    let roomField = document.getElementById('room_number'),
        room = roomField.value,
        maxApartments,
        entrance,
        floor;

    maxApartments = maxFloorField.value * maxEntranceField.value * maxApartmentsOnFloorField.value;

    if (room > maxApartments) {
      let validation_msg = roomField.parentNode.querySelector('.msg-validation');
      validation_msg.innerText = 'Максимальное число квартир в доме: ' + maxApartments;
      entrance_field.innerText = '';
      floor_field.innerText = '';
      return;
    }

    entrance = Math.ceil(room / (maxFloorField.value * maxApartmentsOnFloorField.value));
    floor = Math.ceil((room / maxApartmentsOnFloorField.value) % maxEntranceField.value);

    entrance_field.innerText = entrance.toString();
    floor_field.innerText = floor.toString();
  };

  button.addEventListener('click', checkRoom);
})();
