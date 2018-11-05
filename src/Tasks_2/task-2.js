(() => {
  let x1, x2, x3, x4, y1, y2, y3, y4;
  let point1, point2, point3, point4;

  let check = (e) => {
    e.preventDefault();

    x1 = document.getElementById('x1').value;
    x2 = document.getElementById('x2').value;
    x3 = document.getElementById('x3').value;
    x4 = document.getElementById('x4').value;

    y1 = document.getElementById('y1').value;
    y2 = document.getElementById('y2').value;
    y3 = document.getElementById('y3').value;
    y4 = document.getElementById('y4').value;

    point1 = [x1, y1];
    point2 = [x2, y2];
    point3 = [x3, y3];
    point4 = [x4, y4];

    let coordinates = [point1, point2, point3, point4];

    let isRectangular = (points) => {
      let a1 = calcSideSize(points[0], points[1]);
      let b1 = calcSideSize(points[1], points[2]);

      let a2 = calcSideSize(points[2], points[3]);
      let b2 = calcSideSize(points[3], points[0]);

      let c = calcSideSize(points[2], points[0]);

      if (
          isRightTriangle(a1, b1, c)
          && isRightTriangle(a2, b2, c)
      ) {
        return alert('Фигура - прямоугольник')
      } else return alert('Не прямоугольник')
    };

    let calcSideSize = (start, end) => {
      let x1 = start[0];
      let y1 = start[1];
      let x2 = end[0];
      let y2 = end[1];
      return (Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    };

    let isRightTriangle = (a, b, c) => {
      return a + b === c;
    };

    isRectangular(coordinates);
  };

  let button = document.querySelector('.js-button');
  button.addEventListener('click', check);
})();
