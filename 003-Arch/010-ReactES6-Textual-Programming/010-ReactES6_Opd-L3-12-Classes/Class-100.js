class Car {
  constructor(name) {
    this.brand = name;
  }
  
  present() {
    return 'I have a ' + this.brand;
    console.log('hello');
    alert('hell');
  }
}

const mycar = new Car("Ford");
mycar.present();

const add = (a, b) => {
	return a + b
}

console.log(add(4, 6))