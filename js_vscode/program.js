// 1. object declaration

// let polygon;

// 2. object initialization
const polygon = {
    // 1. Data
    // position is defined in the cartesian plane
    // x and y should be between the (-100, 100) range
    position: [0, 0],
    // initial rotation in radians should be kepts as PI / 12 multiples
    rotation: 0,
    // polygon edge size should
    edge: 0,
    // number of sides
    sides: 0,
    // color to fill the shape
    color: 'red',

    // randomize the position
    randomize: function () {
      this.position = [-100 + 200 * Math.random(), -100 + 200 * Math.random()];
      // implement the color and rotation parts of this function
      // remember the rotation should be kept as a PI / 12 multiple
    },

    // getter accessor
    get getter() {
      return {"Posicion: ":this.position,
             "Rotacion: ":this.rotation,
             "Longitud: ":this.edge,
             "Lados: ": this.sides,
             "Color: ": this.color};
    },

    // setter accessor
    set setter(values){
      this.position = values[0];
      this.rotation = values[1];
      this.edge = values[2];
      this.sides = values[3];
      this.color = values[4];
    },

    // pregunta por los datos y los valida
    ask : function() {
      alert("Hola, este es un programa para calcular el perimetro y el area de un Poligono Regular, a continuacion "+
            "digite los datos del poligono");
      x=true;
      while(x==true){
        let text = prompt("Digite separados por una coma: la longitud y el numero de lados");
        const val = text.split(",");
        (text != null && 
        (val[0] >= '0') && (val[0] <= '9') &&
        (val[1] >= '0') && (val[1] <= '9'))
        ? (this.edge = parseInt(val[0]),this.sides = parseInt(val[1]),x=false) 
        : alert("Porfavor digite un valor valido ");
      }
      
    },

    // calcula el permietro y el area del poligono
    caclPolyg : function() {
      perimetro = this.sides*this.edge;
      area = (perimetro*polygon.calcApotema())/2;
      return "Area: "+ area + " cm^2, Perimetro: "+ perimetro+" cm";
    },
    
    // calcula la apotema del poligono
    calcApotema : function(){
      ang = (360/(2*this.sides))*(Math.PI/180);
      return (this.edge/(2*(Math.tan(ang)))).toFixed(2);
    }
}

// https://www.w3schools.com/jsref/met_win_alert.asp

// 3. object usage

// console.log('polygon position: ' + polygon.position);
// polygon.randomize();
// console.log('polygon position: ' + polygon.position);

polygon.ask();
console.log(polygon.getter);
console.log(polygon.caclPolyg());
// polygon.setter = [[2,5],5,2,5,"green"];
// console.log(polygon.getter);

// console.log(Object.values(polygon));
// Object.assign()
// console.log(polygon.calcApotema())