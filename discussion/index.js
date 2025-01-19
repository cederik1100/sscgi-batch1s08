// Function expression

// 	* A function can also be stored in a variable. This is called a function expression
// 	* A function expression is an anonymous function assigned to the variableFunction
// 	* Anonymous function - A function withtou name, it canfnot be hoisted	


// Parameters and Arguments

// 	* "name" is called a parameter
// 	* A parameter acts as a named variable container that exists only inside of a function
// 	* it is used t store information that is provided to a function when it is called/invoke
// 	* An argument is a value passed when invoking a function, this argument is then stored as the parameters within the function

// OOP(Object Oriented Programming)
	
// 	* Programming style based on classes and objects, group data(properties) and methods(action)
// 	* Class - blueprint, template for an object
// 	* Object - instance of a class.
// 	* Instance - refers to an object created from a class or a constructor function
// 	* Constructor - is a special method used in a class to intialize objects.
// 	* Encapsulation - refers to the bundling of data(properties) and the methods (function) that 	
// 	* Abstraction it involves simplify the complex systems by exposing only the essentialfeatures
// 	* Inheritance extends class into specific type of pokemon
// 		-each subclass will inherit properties and methods from the base Pokemon class but can also have its own specific behavior
// 	* polymorphism the ability of different classes to respond to the same method call in a way that's specific to their type. It allows one interfaces(method) to be used for a general class of action with each subclass implement the method in its own way
// 		- method overriding - the sub classes can provide their own specific implementation of a method that is already defined in the parent class
// 		- method overloading - multiple method with the same name can be define woth defferent parameters
// 		- dynamic method resolution - the method that gets called depends on the object's type(not the reference type) which determined runtime



//Functions
    // Function in javascript are lines/
    // block of codes that tell out device
    // application to perform a certain task
    // when called/Invoked
//Function declarations
    // (function)

    // function sampleName(){
    //     console.log("awit");
    // }
    // printName();

    // let variableFunction = function(){
    //     console.log("...")
    // }
    
    // variableFunction();

    // const constFunc = function(){
    //     console.log("initialize")
    // }

    // constFunc();

    // constFunc = function(){
    //     console.log("re-assign")
    // }

    // constFunc();

// Parameters and Arguments
    function printName(name){
        console.log("name: " + name);
    }

    printName("ced");

    function argumentFunction(){
        console.log("This function was passed as an argument before the message was printed");
    }

    function invokeFunction(
        argumentFunction){
            argumentFunction();
        }

        invokeFunction(argumentFunction);
        //invokeFunction() //undefined
        //console.log(argumentFunction) 

//OOP

const person = {
    name: "ewan",
    age: 24,
    greet: function(){
        //this refers to the object(person)
        console.log(`hi my name is ${this.name} and I am ${this.age} years old `)
    }
}

person.greet();

class Person{
    constructor(name,age){
        //initalize the name and age property
        this.name = name
        this.age = age
    }
    introduce(){
        console.log(`hi my name is ${this.name} and I am ${this.age} years old `)
    }
}

const person1 = new Person("test", 20);
const person2 = new Person("sample", 19);

person1.introduce();
person2.introduce();

class Car{
    constructor(model){
        this.model= model
    }
    start(){
        console.log(`${this.model} is 
        starting . . .`);
    }
}
const car1 =  new Car("toyota");
 
car1.start();

class Pokemon{
    constructor(name, type, level, hp){
        this.name = name
        this.type = type
        this.level = level
        this.hp = hp
    }
    attack(opponent){
        console.log(`${this.name} attack
            ${opponent.name}!`)
            let damage = this.level* 2;
        console.log(`Pokemon has level up ${damage}`);
    }
    receiveDamage(damage){
      this.hp -= damage;
        if(this.hp <= 0){
            console.log(`${this.name} has fainted`);
        }
        else{
            console.log(`${this.name} has ${this.hp} hp left.`);
        }
    }
    heal(){
        this.hp + 10;
        console.log(`${this.name} used heal, Current hp is ${this.hp}`)
    }
}

let pikachu = new Pokemon ("Pikachu", "Electric", 5, 100);
let charmander = new Pokemon("Charmander", "Fire", 5, 100 );

pikachu.attack(charmander);
charmander.attack(pikachu);
pikachu.heal(pikachu);


// mini - activity
// create a function for 
// receivedDamage() and heal()
// create trainers and pokemon to be used in battle ground

class Trainer{
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
        this.pokemonList = [];
    }
    
    ChosePokemon(pokemonName){
        this.pokemonList.push(pokemonName)
    }
    selectPokemon(index){
        return this.pokemonList[index]
    }
}

let ash = new Trainer ("Ash", "Male");
ash.ChosePokemon(pikachu);
let gary = new Trainer("Gary", "Male");
gary.ChosePokemon(charmander);

let ashPokemon = ash.ChosePokemon(0);
let garyPokemon = gary.ChosePokemon(0);

ashPokemon.attack(garyPokemon);
garyPokemon.receiveDamage(25);

class Battle{
    constructor(pokemon1, pokemon2){
        this.pokemon1 = pokemon1
        this.pokemon2 = pokemon2
    }

    startBattle(){
        console.log(`the battle between ${this.pokemon1.name} and ${this.pokemon2} has begun!`)
        while(this.pokemon1.hp > 0 && this.pokemon2.hp > 0){
            this.pokemon1.attack(this.pokemon2);
            if(this.pokemon2.hp > 0){
                this.pokemonw.attack(this.pokemon1)
            }
        }
      if(this.pokemn2.hp <= 0 ){
        console.log(`${this.pokemon1.name} has lost the battle`); 
      }
      else{
        console.log(`${this.pokemon2.name} has lost the battle`); 

      }
    }
}


class ElectricPokemon extends Pokemon{
    constructor(name, level, hp){
        super(name, "Electric", level, hp);
    }
    attack(opponent){
        console.log(`${this.name} uses Thuderbolt on ${opponent.name}!`);
        let damage = this.level*3;
        opponent.receiveDamage(damage)
    }
}

class FirePokemon extends Pokemon{
    constructor(name, level, hp){
        super(name, "Fire", level, hp);
    }
    attack(opponent){
        console.log(`${this.name} uses FlameThrower in ${opponent.name}!`)
        let damage = this.level*3;
        opponent.receiveDamage(damage)
    }
}


let pikachu1 = new ElectricPokemon("Pikachu", 10, 100);
let charmander1 = new FirePokemon("Charmander", 10, 100)

pikachu1.attack(charmander1);
charmander1.attack(pikachu1);