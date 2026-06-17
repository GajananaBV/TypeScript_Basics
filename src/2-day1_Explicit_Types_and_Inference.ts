/*Explicit Type Annotations
Explicit typing means you tell TypeScript exactly what type a variable should be: */

let grettings: string = "Gajanan";
let age: number = 29;
let employee: boolean = true;

let company: string[] = ["Infosys", "TCS", "Capgemini"];

console.log(grettings);
console.log(age);
console.log(employee);
console.log(company);

//Function with Explicit Types
function greet(name: string): string {
  return `Hello! , ${name}`;
}

greet("Gajanan Bhange");
//greet(25);  not allowed

console.log(greet("Gajanan"));


//Type Inference

let username="Gajanan QA";
let Score="29";
let status=true;

console.log(username);
console.log(Score);
console.log(status);


function add(a:number,b:number){
return a+b;

}
console.log(add(5,4));  

//console.log(add(5,"4"));  Not allwoed


//Object Literal Inference

const users={

    name:"Gajanan",
    age:29,
    isAdmin:true
}
console.log(users.name,users.age);
//console.log(users.email);   Error: Property 'email' does not exist


//Explicit Type Mismatch
let name:string ="Gajanan";
//name=25;  // Error: Type 'number' is not assignable to type 'string'

//Implicit Type Mismatch
let score=29;
//score="Gajanan"; //Error ; Type 'string' is not assignable to type 'number'.

