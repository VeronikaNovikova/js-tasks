(() => {
  class Vector {
    constructor(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
    }
    get getLength() {
      return this.calcLength();
    }
    calcLength() {
      return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2) + Math.pow(this.z,2));
    }
    // сумма двух векторов
    static plus(a, b) {
      const rx = a.x + b.x;
      const ry = a.y + b.y;
      const rz = a.z + b.z;
      return `{${rx}; ${ry}; ${rz}}`;
    }
    // скалярное произведение двух векторов
    static scalar(a, b) {
      return (a.x * b.x + a.y * b.y + a.z * b.z)
    }
    toString() {
      return `Ваш вектор {X: ${this.x}; Y: ${this.y}; Z: ${this.z}}\nДдлина = ${this.getLength}`
    }
    valueOf() {
      return this.getLength;
    }
  }

  let button = document.querySelector(".js-button");
  button.addEventListener('click', (e)=> {
    e.preventDefault();
    let x1 = +document.getElementById("x1").value,
        y1 = +document.getElementById("y1").value,
        z1 = +document.getElementById("z1").value,
        x2 = +document.getElementById("x2").value,
        y2 = +document.getElementById("y2").value,
        z2 = +document.getElementById("z2").value;

    let a = new Vector(x1, y1, z1);
    let b = new Vector(x2, y2, z2);

    alert(`Первый вектор\n${a}`);
    alert(`Второй вектор\n${b}`);
    alert("Сумма векторов = " + Vector.plus(a, b));
    alert("Скалярное произведение = " + Vector.scalar(a, b));
    alert("valueOf() - " + a.valueOf());
    alert("toString() - " + a.toString());
  });
  // a + b = {ax + bx; ay + by; az + bz} = {3 + 2; 5 + 3; 1 + 2} = {5; 8; 3}
  // a · b = ax · bx + ay · by + az · bz = 3 · 2 + 5 · 3 + 1 · 2 = 6 + 15 + 2 = 23
})();
