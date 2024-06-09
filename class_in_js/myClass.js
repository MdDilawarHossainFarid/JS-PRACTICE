class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

const Audi = new Car("A8", 2020);
console.log(Audi.name);

//Function constructor using creat object
function Car1(name,year){
    this.name = name;
    this.year = year;
}

const BMW = new Car1("X7", 2024);
console.log(BMW.name);