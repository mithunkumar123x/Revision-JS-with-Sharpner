/**** Spread & Rest Operator ******/

/*
 Actually just one operator =  ...
 
 Spread : Used to spilit up array elements OR object properties

 const newArray = [...oldArray , 1 ,2]

 const newObject = { ...oldObject , newProp:5 }
  
 Rest : Used to merge a list of function argument into an array

         function sortArgs(...args) {
            return args.sort()
         }
 
ex : -      const filter = (...args) => {
     return args.filter(el => el === 1);
}

console.log(filter(1,2,3));

output :  [1]


Spread oprator : 
     for array : 
      const numbers = [1,2,3];
      const newNumbers = [...numbers,4] // if not take spread op. it did not pull the array

      
      console.log(newNumbers);


      output : [1,2,3,4]

      for objects :   
      const person = {
        name : 'Max'
      };
      const newPerson = {
        ...Person,
        age : 28
      }

      console.log(newPerson);
    
      output : 

      [object,object] {
        age : 28 ,
        name : "Max"
      }

 */

      for array : 
      const strings = ["Chai", "Poha" , "Jalebi"];
      const newStrings = [...strings,"code"] // if not take spread op. it did not pull the array

      
      console.log(newStrings);


      

      for objects :   
      const Hero = {
        name : 'Thor'
      };
      const newPerson = {
        ...Person,
        age : 8000
      }

      console.log(newPerson);