class Person {

    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }

    getGreetings(){
        return (`I am ${this.name}.`);
    }
}

// const other = new Person();
// console.log(other.getGreetings());

class Traveller extends Person {
 constructor(name, age, homeLocation){
     super(name, age);
     this.homeLocation = homeLocation;
 }

 hasHomeLocation(){
     return !!this.homeLocation;
 }
    getGreetings(){
        let description = super.getGreetings();

        if(this.hasHomeLocation()){
            description += ` I'm visiting from ${this.homeLocation}.; `
        }

        return description;
    }
}

const me = new Traveller('umesh', 24, 'GPB');
console.log(me.getGreetings());

const other = new Traveller(undefined, undefined, 'Nowhere');
console.log(other.getGreetings());