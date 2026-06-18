enum Role{
admin="ADMIN",
use="USER"

}
let myRole = Role.admin;
console.log(Role.admin);
console.log(myRole);

//myRole="SuperAdmin";
//EEnum is a TypeScript feature used to define a fixed set of constant values. It improves code readability and type safety.






/*
Traffic Signal:

enum Signal {
  Red,
  Yellow,
  Green
}

आता फक्त ह्याच 3 values वापरू शकतो.

let current = Signal.Red; // ✅

पण

current = "Blue"; // ❌ Error

कारण Blue enum मध्ये नाही.

Real Example

User Role:

enum Role {
  Admin,
  User,
  Manager
}
let myRole = Role.Admin;

यामुळे चुकून

myRole = "SuperAdmin";

असं लिहिलं तर TypeScript Error देईल.

String Enum
enum Role {
  Admin = "ADMIN",
  User = "USER"
}

console.log(Role.Admin);

Output:

ADMIN
Interview Answer (2 lines)

Enum is a TypeScript feature used to define a fixed set of constant values. It improves code readability and type safety. */