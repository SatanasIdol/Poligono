// 1. object declaration
let cuadrado;

// 2. object initialization
cuadrado = {
    // 1. Data
    // position is defined in the cartesian plane
    // x and y should be between the (-100, 100) range
    position: [0, 0],
    // initial rotation in radians should be kepts as PI / 12 multiples
    rotation: 0,
    // cuadrado edge size should
    edge: 40,
    // color to fill the shape
    color: 'red',

    randomize: function () {
      this.position = [-100 + 200 * Math.random(), -100 + 200 * Math.random()];
      // implement the color and rotation parts of this function
      // remember the rotation should be kept as a PI / 12 multiple
    }
}

// 3. object usage
console.log(cuadrado.position);
cuadrado.randomize();
console.log(cuadrado.position);