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
    edge: 1,
    // color to fill the shape
    color: 'red',
    // number of sides
    sides: 4,

    randomize: function () {
      this.position = [-100 + 200 * Math.random(), -100 + 200 * Math.random()];
      // implement the color and rotation parts of this function
      // remember the rotation should be kept as a PI / 12 multiple
    }
}

// https://www.w3schools.com/jsref/met_win_alert.asp
alert('hello js template! Check you console');

// 3. object usage

polygon.perimeter = function() {
  return this.sides * this.edge;
}

polygon.edge = 100;

console.log(polygon.perimeter());

  lados = polygon.sides;
  edge = polygon.edge;

function calcApotema(){
  ang = 2 * Math.PI/(2*lados);
  //rad = (ang*Math.PI)/180;
  //grad = Math.tan();
  // console.log(grad);
  return (edge/(2*(Math.tan(ang))));
}

function calcPolyg(){
  perimetro = lados*edge;
  area = (perimetro*calcApotema())/2;
  return "Area: "+ area + ", Perimetro: "+ perimetro;
}

console.log('polygon position: ' + polygon.position);
polygon.randomize();
console.log('polygon position: ' + polygon.position);
console.log(calcApotema())
console.log(calcPolyg())