1. String Array
const names: string[] = [];

names.push("Gajanan");
names.push("Rahul");

console.log(names);

Output:

['Gajanan', 'Rahul']
Wrong
const names: string[] = [];

names.push(10);

❌ Error

कारण:

string[]

म्हणजे फक्त string values.

2. Number Array
const marks: number[] = [];

marks.push(80);
marks.push(90);

console.log(marks);

Output:

[80, 90]
Wrong
marks.push("ABC");

❌ Error

3. Readonly Array
Normal Array
const names: string[] = ["Gajanan"];

names.push("Rahul");

✅ चालेल

Readonly Array
const names: readonly string[] = ["Gajanan"];

names.push("Rahul");

❌ Error

कारण readonly म्हणजे बदल करता येत नाही.

Interview Answer:

readonly array cannot be modified after creation.

4. Type Inference
Explicit Type
const numbers: number[] = [1, 2, 3];

आपण type सांगितला.

Inferred Type
const numbers = [1, 2, 3];

TypeScript म्हणतो:

सगळे values number आहेत.

मग हा array number[] आहे.

Internally:

const numbers: number[] = [1, 2, 3];

असं समजतो.

Example
const numbers = [1, 2, 3];

numbers.push(4);

✅ चालेल

Wrong
const numbers = [1, 2, 3];

numbers.push("Hello");

❌ Error

कारण TypeScript ने आधीच number[] infer केलं आहे.

Array Access
const numbers = [10, 20, 30];

console.log(numbers[0]);

Output:

10
QA Automation Example

हे interview मध्ये सांगू शकतोस:

const users: string[] = [
    "admin",
    "tester",
    "manager"
];

console.log(users[0]);

Output:

admin

Playwright मध्ये अशा arrays मधून test data घेतात.

Interview Questions
Difference: Array vs Readonly Array

Array

const arr: string[] = ["A"];
arr.push("B");

✅ Allowed

Readonly Array

const arr: readonly string[] = ["A"];
arr.push("B");

❌ Not Allowed

Difference: Explicit Type vs Type Inference

Explicit

const arr: number[] = [1,2,3];

Type आपण दिला.

Inference

const arr = [1,2,3];

TypeScript स्वतः type ओळखतो.

Practice

day3.ts तयार कर आणि हे स्वतः लिही:

const fruits: string[] = [];

fruits.push("Apple");
fruits.push("Mango");
fruits.push("Orange");

console.log(fruits);
console.log(fruits[1]);


Interview Rapid Fire
push()

➜ Add element at end.

pop()

➜ Remove element from end.

length

➜ Returns total elements.

for loop

➜ Iterate array using index.

forEach()

➜ Iterate array without managing index manually.