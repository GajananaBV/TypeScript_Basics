const teams: string[] = [];

//1. push()

//Array मध्ये शेवटी value add करतो.
teams.push("Mi");
teams.push("RCB");
teams.push("CSK");
console.log(teams);

//2. pop()

//शेवटची value remove करतो.
teams.pop();
console.log(teams);

//3. length

//Array मध्ये किती elements आहेत ते सांगतो.
console.log(teams.length);

//4. for loop

//एक-एक element print करायला.
for (let i = 0; i < teams.length; i++) {
  console.log(teams[i]);
}
  console.log("*********************************");

//forEach
teams.forEach((team) => {
  console.log(team);
});



//Readonly

const name :string []=["Gajanan","Bhange"]
name.push("Vilas");
console.log(name);
const name1 : readonly string []=["Gajanan","Bhange"]
//name1.push("Vilas");  Property 'push' does not exist on type 'readonly string[]'
//The readonly keyword can prevent arrays from being changed.
