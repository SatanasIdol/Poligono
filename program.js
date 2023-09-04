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
    edge: 32,
    // number of sides
    sides: 6,
    // color to fill the shape
    color: 'red',

    randomize: function () {
      this.position = [-100 + 200 * Math.random(), -100 + 200 * Math.random()];
      // implement the color and rotation parts of this function
      // remember the rotation should be kept as a PI / 12 multiple
    },

    get getter() {
      return {"Posicion: ":this.position,
             "Rotacion: ":this.rotation,
             "Longitud: ":this.edge,
             "Lados: ": this.sides,
             "Color: ": this.color};
    },

    set setter(values){
      this.position = values[0];
      this.rotation = values[1];
      this.edge = values[2];
      this.sides = values[3];
      this.color = values[4];
    }
}

// https://www.w3schools.com/jsref/met_win_alert.asp
alert('hello js template! Check you console');

// 3. object usage

polygon.caclPolyg = function() {
  perimetro = this.sides*this.edge;
  area = (perimetro*polygon.calcApotema())/2;
  return "Area: "+ area + " cm^2, Perimetro: "+ perimetro+" cm";
}

polygon.calcApotema = function(){
  ang = (360/(2*this.sides))*(Math.PI/180);
  return (this.edge/(2*(Math.tan(ang)))).toFixed(2);
}

// console.log('polygon position: ' + polygon.position);
// polygon.randomize();
// console.log('polygon position: ' + polygon.position);
polygon.setter = [[2,5],5,1,4,"green"];
console.log(polygon.getter);
console.log(polygon.caclPolyg());
// console.log(Object.values(polygon));
// Object.assign()
// console.log(polygon.calcApotema())