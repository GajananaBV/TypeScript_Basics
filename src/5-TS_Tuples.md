Array vs Tuple
Array
const data: string[] = ["Gajanan", "Rahul", "Amit"];

सगळे elements string.

Length बदलू शकते.

Tuple
let user: [number, string];

म्हणजे:

Index 0 → number
Index 1 → string

फिक्स.

Simple Example
let user: [number, string];

user = [101, "Gajanan"];

console.log(user);

Output:

[101, "Gajanan"]
Wrong Order
let user: [number, string];

user = ["Gajanan", 101];

❌ Error

कारण:

पहिला number पाहिजे
दुसरा string पाहिजे
Real QA Example

समजा API response मधून:

UserId = 101
Status = Active

Tuple:

let apiData: [number, string];

apiData = [101, "Active"];
Readonly Tuple
const user: readonly [number, string] =
[101, "Gajanan"];
Wrong
user.push("Tester");

❌ Error

कारण readonly.

Named Tuple

Normal:

const point: [number, number] =
[10, 20];

कळत नाही 10 काय आहे, 20 काय आहे.

Named Tuple:

const point: [x:number, y:number] =
[10,20];

आता समजतं:

x = 10
y = 20
Destructuring

Tuple:

const user: [number, string] =
[101, "Gajanan"];

Without Destructuring

console.log(user[0]);
console.log(user[1]);

Output:

101
Gajanan

With Destructuring

const [id, name] = user;

console.log(id);
console.log(name);

Output:

101
Gajanan

हे Playwright मध्ये खूप दिसेल.

Interview Questions
What is Tuple?

Answer:

A tuple is a fixed-length array where each index has a predefined type.

Difference Between Array and Tuple
Array	Tuple
Same type usually	Different types allowed
Dynamic length	Fixed structure
string[]	[number,string]
Example

Array:

const arr:string[] =
["A","B","C"];

Tuple:

const user:[number,string] =
[101,"Gajanan"];