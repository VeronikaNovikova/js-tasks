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
      length = this.getLength;
      return `Vector {X: ${this.x}; Y: ${this.y}; Z: ${this.z}} has length ${length}`
    }
    valueOf() {
      return this.getLength;
    }
  }

  let a = new Vector(3, 5, 1);
  let b = new Vector(2, 3, 2);

  console.log(Vector.plus(a, b));
  console.log(Vector.scalar(a, b));
  console.log(a.getLength);
  alert(a)
  alert(a + 5)
  console.log(3*a)
  // a + b = {ax + bx; ay + by; az + bz} = {3 + 2; 5 + 3; 1 + 2} = {5; 8; 3}
  // a · b = ax · bx + ay · by + az · bz = 3 · 2 + 5 · 3 + 1 · 2 = 6 + 15 + 2 = 23
})();
