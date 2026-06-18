//Normal way
const user: { name: string; id: number } = {
  name: "Gajanan",
  id: 55,
};

//Type Alias

type Api = { Response: string; Status: number };

const Apis: Api = {
  Response: "POST",
  Status: 202,
};

//3. Union Type (|)
//एका variable मध्ये अनेक types किंवा values allow करणे.

type Status = "success" | "error";

let response: Status = "success";

//4. Interface म्हणजे काय?

interface User {
  name: string;
  age: number;
}

const user1: User = {
  name: "Gajanan",
  age: 25,
};

//Interface

//Object चा shape (structure) सांगण्यासाठी वापरतात.

interface Employee1 {
  id: number;
  name: string;
}

const emp: Employee1 = {
  id: 56,
  name: "Gajanan",
};

console.log(emp);

//Type

//Object साठी वापरू शकतो, पण त्याचबरोबर string, number, union वगैरे साठी पण वापरू शकतो.

type Employee2 = {
  id: number;
  name: string;
};

const emp2: Employee2 = { id : 45, name : "gajanan" };
console.log(emp2);

/*    
1. Type Alias म्हणजे काय?

एखाद्या type ला स्वतःचं नाव देणे.

type Name = string;

let userName: Name = "Gajanan";

इथे Name हे string चे alias (nickname) आहे.

2. Object साठी Type
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Gajanan",
  age: 25
};
3. Union Type (|)

एका variable मध्ये अनेक types किंवा values allow करणे.

type Status = "success" | "error";

let response: Status = "success";

फक्त success किंवा error चालेल.

response = "pending"; // Error
4. Interface म्हणजे काय?

Object चा structure define करण्यासाठी.

interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Gajanan",
  age: 25
};
Type vs Interface

दोघेही जवळपास same आहेत.

type User = {
  name: string;
}
interface User {
  name: string;
}

दोन्ही valid.

Interview मध्ये काय सांगायचं?
Type

Type Alias is used to create custom types. It can be used for primitives, objects, unions and intersections.

Interface

Interface is used to define the structure of an object.

एकच Rule लक्षात ठेव

✅ Object Structure → Interface

interface Employee {
  id: number;
  name: string;
}


✅ Union / Primitive → Type

type Status = "success" | "error";
type Id = number;
Interview Question

Type आणि Interface मधला मुख्य फरक?

Answer:

Interface is mainly used for object structures and supports declaration merging, whereas Type can be used for objects, primitives, unions, and intersections.
*/
