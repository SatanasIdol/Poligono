// 1. object declaration
let polygon;

// 2. object initialization
polygon = {
    // 1. Data
    // position is defined in the cartesian plane
    // x and y should be between the (-100, 100) range
    position: [0, 0],
    // initial rotation in radians should be kepts as PI / 12 multiples
    rotation: 0,
    // polygon edge size should
    edge: 8,
    // color to fill the shape
    color: 'red',
    // number of sides
    n: 6,

    randomize: function () {
      this.position = [-100 + 200 * Math.random(), -100 + 200 * Math.random()];
      // implement the color and rotation parts of this function
      // remember the rotation should be kept as a PI / 12 multiple
    }
}

// https://www.w3schools.com/jsref/met_win_alert.asp
alert('hello js template! Check you console');

// 3. object usage
function calcApotema(){
  edge = polygon.edge;
  half = edge/2;
  return Math.sqrt((edge*edge)-(half*half));
}

function calcPolyg(){
  lados = polygon.n;
  edge = polygon.edge;
  perimetro = lados*edge;
  area = (perimetro*calcApotema())/2;
  return "Area: "+ area + ", Perimetro: "+ perimetro;
}

console.log('polygon position: ' + polygon.position);
polygon.randomize();
console.log('polygon position: ' + polygon.position);
console.log(calcPolyg())