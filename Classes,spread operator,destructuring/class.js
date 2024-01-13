/*************** Classes **********/

/*
Methods : function that has to classes

Property : property has variable that classes say.

*/

class Human {
    constructor() {
        this.gender = 'male';
    }


printGender() {
    console.log(this.gender);
  }
}

class Human {
    constructor() {
        this.age = '24';
    }


printAge() {
    console.log(this.age);
  }
}

class Person extends Human {
    constructor() {
        super() ;
        this.name ='Max';
        this.gender = 'female'; // override the extended class

    }


printMyName() {
    console.log(this.name);
  }
}

const Person = new Person();
person.printMyName();
person.printGender();
person.printAge() ;

// classes are used react to create component

/* Classes ,Properties & Methods

Properties are like "variable attached to classes/objects".

 ES6 :  constructor () {
    this.myProperty = 'value
 }

 ES7 :  myProperty = 'value'


Methods are like "function attached to classes /object".

ES6 :   myMethod() {.....}
 
ES7 : myMethod = () => {...}      // Arrow function are like this property
   */


class Human {
    
    gender = 'male';

printGender = () => {
    console.log(this.gender);
  }

}

class Human {
     age = '24';

printAge = () => {
    console.log(this.age);
  }
}

class Person extends Human {
   
        name ='Max';
        gender = 'female'; // override the extended class

    }
printMyName = () =>  {
    console.log(this.name);
  }


const person = new Person();
person.printMyName();
person.printGender();
person.printAge() ;
