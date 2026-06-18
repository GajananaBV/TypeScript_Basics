1. unknown
Meaning

"माझ्याकडे value आहे, पण type माहित नाही."

let data: unknown = "Gajanan";

हे चालेल.

Wrong
let data: unknown = "Gajanan";

console.log(data.toUpperCase());

❌ Error

कारण TypeScript म्हणतो:

आधी type check कर.

Correct
let data: unknown = "Gajanan";

if (typeof data === "string") {
    console.log(data.toUpperCase());
}

Output:

GAJANAN
Interview One-Liner

unknown = use before type checking.

2. never
Meaning

"हे कधीच होऊ शकत नाही."

Simple Example
function showError(): never {
    throw new Error("Something went wrong");
}

हे function value return करत नाही.

ते direct error फेकतं.

म्हणून return type:

never
Another Example
let x: never = true;

❌ Error

कारण:

never

मध्ये काहीच assign करू शकत नाही.

Interview One-Liner

never means a value that never occurs.

3. undefined
Meaning

Variable create केली पण value दिली नाही.

let name;

Output:

undefined
Example
let city: undefined = undefined;

console.log(city);

Output:

undefined
4. null
Meaning

मी स्वतः सांगतो की value नाही.

let data = null;

Output:

null
Difference
let a;
console.log(a);

Output:

undefined
let b = null;
console.log(b);

Output:

null
Interview Perspective

आत्ता तुझ्यासाठी फक्त हे types लक्षात ठेव:

✅ string

let name: string = "Gajanan";

✅ number

let age: number = 25;

✅ boolean

let isTester: boolean = true;

✅ any

let data: any = "abc";

✅ unknown

let data: unknown = "abc";

बाकी never, null, undefined फक्त concept level वर समजलं तरी पुरेसं आहे.

Easy Memory Trick
Type	Meaning
string	Text
number	Number
boolean	true/false
any	Anything allowed
unknown	Anything, but check first
null	Intentionally empty
undefined	Not assigned yet
never	Never happens




1. any vs unknown
any	unknown
काहीही चालतं	आधी type check करावं लागतं
Type safety नाही	Type safety आहे
Runtime bugs वाढू शकतात	Safer आहे
Example
let a: any = "Gajanan";
console.log(a.toUpperCase()); // OK
let b: unknown = "Gajanan";
console.log(b.toUpperCase()); // Error

Interview Answer:

unknown is a type-safe version of any.

2. null vs undefined
undefined
let name;
console.log(name);

Output:

undefined

Value assign केलेली नाही.

null
let name = null;

Developer ने स्वतः no value assign केली.

Interview Answer:

undefined means not assigned, null means intentionally empty.

3. let vs const
let
let city = "Pune";
city = "Mumbai";

✅ चालेल

const
const city = "Pune";
city = "Mumbai";

❌ Error

Interview Answer:

let can be reassigned, const cannot be reassigned.

4. var vs let
var
var x = 10;
var x = 20;

✅ चालेल

let
let x = 10;
let x = 20;

❌ Error

Interview Answer:

let is block scoped, var is function scoped.

आजकाल var जवळजवळ वापरत नाहीत.

5. == vs ===
Double Equal
console.log(5 == "5");

Output:

true

Type check करत नाही.

Triple Equal
console.log(5 === "5");

Output:

false

Value + Type दोन्ही check करतो.

Interview Answer:

=== checks both value and type, == checks only value after type conversion.

6. unknown vs never
unknown
let data: unknown = "abc";

Type माहित नाही.

never
function error(): never {
    throw new Error();
}