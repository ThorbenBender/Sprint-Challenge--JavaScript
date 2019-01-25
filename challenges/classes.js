// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker2{
    constructor(length, width, height){
        this.width = width;
        this.height = height;
        this.length = length;
      }
    volume(){
        return this.length * this.width * this.height;
    }
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}
const cuboid2 = new CuboidMaker2(4, 5, 5);
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume(), 'classes'); // 100
console.log(cuboid2.surfaceArea(), 'classes'); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker2{
    constructor(widht, height, length){
        super(widht, height, length);
    }
}

const Cube = new CubeMaker(3, 3, 3);

console.log(Cube.volume(), '<-- Volume');
console.log(Cube.surfaceArea(), '<-- surface area');