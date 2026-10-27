# JavaScript Objects --- Questions, Answers, Examples & Explanations

> **Purpose:** Ye notes students ko JavaScript Objects ke important
> concepts samjhane ke liye hain. Har topic mein question, explanation
> aur jahan zaroori ho example diya gaya hai.

## 1. Object kya hota hai?

**Answer:** JavaScript object ek data structure hai jo related
information ko **key-value pairs** mein store karta hai. Key ko property
name aur value ko property value kehte hain.

``` js
const student = {
  name: "Aman",
  age: 20,
  course: "MERN"
};
```

-   `name`, `age`, `course` keys/properties hain.
-   `"Aman"`, `20`, `"MERN"` values hain.

**Explanation:** Student ki alag-alag information ko alag variables mein
rakhne ke bajay ek object mein group kar sakte hain.

## 2. Object ki pehchan kya hoti hai?

**Answer:** Object aam taur par curly braces `{}` mein properties ke
saath dikhai deta hai. Properties ko comma se separate kiya jata hai aur
key aur value ke beech colon `:` hota hai.

``` js
const car = {
  brand: "Tata",
  year: 2025
};
```

**Important:** JavaScript mein `null` ko chhodkar objects ka `typeof`
aam taur par `"object"` deta hai. Arrays ka `typeof` bhi `"object"` hota
hai, isliye array check karne ke liye `Array.isArray()` use karein.

``` js
console.log(typeof car); // "object"
console.log(Array.isArray(car)); // false
```

## 3. Object kyun banate hain?

**Answer:** Related data ko ek jagah organize karne, real-world entities
ko represent karne aur data ko functions/components ke beech pass karne
ke liye.

``` js
const product = {
  id: 101,
  title: "Keyboard",
  price: 799,
  inStock: true
};
```

Isse product ka data ek unit mein milta hai aur manage karna aasaan hota
hai.

## 4. Object kab banate hain?

**Answer:** Jab kisi ek entity ki multiple properties ko saath rakhna
ho---jaise student, employee, product, user profile, order ya
configuration.

``` js
const employee = {
  id: 1,
  name: "Neha",
  department: "IT"
};
```

## 5. Object kaise banate hain?

JavaScript mein objects banane ke common tareeqe:

### A. Object literal --- sabse common

``` js
const user = {
  name: "Ravi",
  age: 24
};
```

### B. `new Object()` constructor

``` js
const user = new Object();
user.name = "Ravi";
user.age = 24;
```

### C. Constructor function ya class

``` js
function Student(name, age) {
  this.name = name;
  this.age = age;
}

const s1 = new Student("Ravi", 20);
```

``` js
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const p1 = new Product("Mouse", 500);
```

**Recommendation:** Ek normal object ke liye object literal use karein.
Repeated similar objects banane ke liye class ya constructor function
useful ho sakta hai.

## 6. Object kahan kaam aate hain?

-   API se aane wale user/product data ko represent karna
-   React components ko props dena
-   Form data collect karna
-   Shopping cart/product details rakhna
-   Application settings/configuration
-   Nested data, jaise order ke andar customer aur items

``` js
const order = {
  orderId: 5001,
  customer: { name: "Aman", city: "Jaipur" },
  items: [{ name: "Book", qty: 2 }]
};
```

## 7. Object ko kaise access karte hain?

### Dot notation

``` js
const student = { name: "Aman", age: 20 };
console.log(student.name); // Aman
```

### Bracket notation

``` js
console.log(student["age"]); // 20
```

Dynamic key ke liye bracket notation useful hai:

``` js
const key = "name";
console.log(student[key]); // Aman
```

## 8. Object ko expand karke key-value pair kaise add karein?

Yahan "expand" se murad existing object mein nayi property add karna
hai. JavaScript mein iske liye koi alag expand command nahi hoti.

``` js
const student = { name: "Aman" };
student.age = 20;
student["course"] = "MERN";

console.log(student);
// { name: "Aman", age: 20, course: "MERN" }
```

## 9. Object ko expand kiye bina key-value pair kaise add karein?

Agar "expand" se aapka matlab original object ko mutate kiye bina naya
object banana hai, to spread operator use karein:

``` js
const student = { name: "Aman" };

const updatedStudent = {
  ...student,
  age: 20
};

console.log(updatedStudent); // { name: "Aman", age: 20 }
console.log(student); // { name: "Aman" }
```

Original object unchanged rehta hai. Ye approach React state updates
mein kaafi common hai.

## 10. Existing value update kaise karte hain?

``` js
const student = { name: "Aman", age: 20 };

student.age = 21;
student["name"] = "Aman Sharma";

console.log(student);
// { name: "Aman Sharma", age: 21 }
```

Bracket notation tab bhi use ho sakti hai jab property ka naam variable
mein ho.

## 11. Property delete kaise karte hain?

`delete` operator property ko remove karta hai.

``` js
const student = { name: "Aman", age: 20 };
delete student.age;

console.log(student); // { name: "Aman" }
```

`delete` poore variable ko delete nahi karta; woh object ki property
remove karta hai.

## 12. Object mein kaun-kaun se functions/methods hote hain?

JavaScript mein object-related kaam ke liye built-in methods aur
operators milte hain. Commonly used methods:

  -----------------------------------------------------------------------
  Method                              Kaam
  ----------------------------------- -----------------------------------
  `Object.keys(obj)`                  Enumerable own string keys ka array

  `Object.values(obj)`                Un keys ki values ka array

  `Object.entries(obj)`               `[key, value]` pairs ka array

  `Object.assign(target, source)`     Properties ko target mein copy
                                      karna

  `Object.hasOwn(obj, key)`           Check karna ki property object ki
                                      apni property hai

  `Object.freeze(obj)`                Top-level properties ko
                                      add/remove/update hone se rokna

  `Object.seal(obj)`                  Add/remove rokna, existing writable
                                      values update ho sakti hain

  `Object.create(proto)`              Given prototype se object banana

  `Object.fromEntries(entries)`       Entries se object banana
  -----------------------------------------------------------------------

**Most-used:** `Object.keys()`, `Object.values()`, `Object.entries()`,
`Object.assign()`, `Object.hasOwn()`, spread syntax `{ ...obj }`,
`JSON.stringify()` aur `JSON.parse()`.

## 13. Dot notation aur bracket notation mein kya difference hai?

  -----------------------------------------------------------------------
  Dot notation                        Bracket notation
  ----------------------------------- -----------------------------------
  `obj.name`                          `obj["name"]`

  Property name identifier ki tarah   String ya expression use kar sakte
  likhte hain                         hain

  Dynamic key ke liye suitable nahi   Dynamic key ke liye useful

  Spaces/hyphens wali key ko directly Aisi keys access kar sakte hain
  access nahi kar sakte               
  -----------------------------------------------------------------------

``` js
const user = {
  name: "Neha",
  "home city": "Jaipur",
  "first-name": "Neha"
};

console.log(user.name);
console.log(user["home city"]);
console.log(user["first-name"]);

const key = "name";
console.log(user[key]); // Neha
```

## 14. Spread operator object mein kaise kaam karta hai?

Spread syntax `...` enumerable own properties ko naye object mein copy
karne ke liye use hoti hai.

``` js
const first = { name: "Aman", age: 20 };
const copy = { ...first };

console.log(copy); // { name: "Aman", age: 20 }
```

Merge aur update:

``` js
const user = { name: "Aman", city: "Jaipur" };
const updated = { ...user, city: "Delhi", age: 21 };

console.log(updated);
// { name: "Aman", city: "Delhi", age: 21 }
```

Agar same key multiple sources mein ho, to baad wali value pehle wali ko
overwrite karti hai.

## 15. Rest operator object mein kaise kaam karta hai?

Object destructuring mein rest syntax `...` baaki properties ko ek naye
object mein collect karti hai.

``` js
const user = {
  name: "Aman",
  age: 20,
  city: "Jaipur"
};

const { name, ...otherDetails } = user;

console.log(name); // Aman
console.log(otherDetails); // { age: 20, city: "Jaipur" }
```

**Spread vs Rest:** Spread values/properties ko phailata hai;
destructuring ka rest baaki properties ko collect karta hai. Syntax dono
mein `...` hi hai; context se meaning pata chalta hai.

## 16. Object ke andar object kaise banate hain?

Ise nested object kehte hain.

``` js
const student = {
  name: "Aman",
  address: {
    city: "Jaipur",
    state: "Rajasthan"
  }
};

console.log(student.address.city); // Jaipur
```

## 17. Object ke andar array kaise banate hain?

``` js
const student = {
  name: "Aman",
  skills: ["HTML", "CSS", "JavaScript"]
};

console.log(student.skills[0]); // HTML
student.skills.push("React");
```

Object ke andar arrays aur arrays ke andar objects dono rakh sakte hain.

``` js
const classData = {
  students: [
    { id: 1, name: "Aman" },
    { id: 2, name: "Neha" }
  ]
};

console.log(classData.students[1].name); // Neha
```

## 18. Array aur object mein kya difference hai?

  -----------------------------------------------------------------------
  Object                              Array
  ----------------------------------- -----------------------------------
  Named properties ke liye useful     Ordered list of items ke liye
                                      useful

  `user.name` ya `user["name"]`       `items[0]`

  Literal `{}`                        Literal `[]`

  Common iteration:                   Common iteration: `for...of`,
  `Object.keys/values/entries`,       `forEach`, `map`
  `for...in`                          

  `length` property se property count `length` items ki count/next index
  nahi milta                          position batata hai
  -----------------------------------------------------------------------

``` js
const user = { name: "Aman", age: 20 };
const marks = [80, 90, 75];

console.log(user.name); // Aman
console.log(marks[0]); // 80
console.log(marks.length); // 3
console.log(Array.isArray(marks)); // true
```

## 19. Object literal kya hota hai?

Curly braces ke andar directly object define karne ko object literal
kehte hain.

``` js
const book = {
  title: "JavaScript Basics",
  price: 400
};
```

Ye simple objects banane ka sabse common aur readable tareeqa hai.

## 20. Constructor se object kaise banate hain?

### `new Object()`

``` js
const user = new Object();
user.name = "Neha";
user.age = 22;
```

### Constructor function

``` js
function User(name, age) {
  this.name = name;
  this.age = age;
}

const u1 = new User("Neha", 22);
const u2 = new User("Aman", 20);

console.log(u1.name); // Neha
```

`new` constructor function ko naya object banane ke liye call karta hai.
`this` us naye object ko refer karta hai.

## 21. Object constructor aur object literal mein kya difference hai?

  -----------------------------------------------------------------------------------
  Object literal                      `new Object()`
  ----------------------------------- -----------------------------------------------
  `const obj = { name: "Aman" }`      `const obj = new Object(); obj.name = "Aman"`

  Short aur readable                  Zyada verbose

  Normal objects ke liye preferred    Aam taur par zaroori nahi

  Multiple similar instances banane   Ye bhi apne aap reusable custom template nahi
  ka template nahi                    hai
  -----------------------------------------------------------------------------------

**Note:** Custom constructor function aur `class` repeated similar
objects banane ke liye zyada relevant hain.

## 22. Nested object ko access kaise karte hain?

``` js
const company = {
  name: "ABC Tech",
  address: {
    city: "Jaipur",
    pin: 302001
  }
};

console.log(company.address.city); // Jaipur
console.log(company["address"]["pin"]); // 302001
```

Agar beech ki property missing ya `null` ho, to direct access error de
sakta hai. Aise case mein optional chaining use karein.

## 23. Object copy kaise karte hain?

### Spread syntax

``` js
const original = { name: "Aman", age: 20 };
const copy = { ...original };
```

### `Object.assign()`

``` js
const copy2 = Object.assign({}, original);
```

Dono aam tor par **shallow copy** banate hain. Nested objects/arrays ke
references copy ho sakte hain, unka independent deep copy nahi banta.

## 24. Object merge kaise karte hain?

### Spread syntax

``` js
const personal = { name: "Aman", age: 20 };
const contact = { city: "Jaipur", phone: "9999999999" };

const combined = { ...personal, ...contact };
console.log(combined);
```

### `Object.assign()`

``` js
const combined2 = Object.assign({}, personal, contact);
```

Same key dono objects mein ho to baad wala source value overwrite
karega. Ye merge shallow hota hai; nested objects automatically
deep-merge nahi hote.

## 25. Shallow copy kya hoti hai?

Shallow copy top-level properties copy karti hai, lekin nested
object/array values ka reference share ho sakta hai.

``` js
const original = {
  name: "Aman",
  address: { city: "Jaipur" }
};

const copy = { ...original };
copy.name = "Neha";
copy.address.city = "Delhi";

console.log(original.name); // Aman
console.log(original.address.city); // Delhi
```

`name` alag top-level value hai, lekin `address` ka nested object dono
mein same reference hai.

## 26. Deep copy kya hoti hai?

Deep copy nested objects aur arrays ko bhi recursively copy karti hai,
taaki copied structure ke nested references original se share na hon.

Modern JavaScript environments mein supported data ke liye
`structuredClone()` use kar sakte hain:

``` js
const original = {
  name: "Aman",
  address: { city: "Jaipur" },
  skills: ["JS", "React"]
};

const deepCopy = structuredClone(original);
deepCopy.address.city = "Delhi";
deepCopy.skills.push("Node");

console.log(original.address.city); // Jaipur
console.log(original.skills); // ["JS", "React"]
```

**Limitation:** `structuredClone()` functions aur kuch special values ko
clone nahi karta; custom class instances ke liye bhi behavior samajhna
zaroori hai. JSON method sirf JSON-compatible data ke liye limited
workaround hai.

## 27. Object mein loop kaise lagate hain?

Object ko iterate karne ke common tareeqe `for...in`, `Object.keys()`,
`Object.values()` aur `Object.entries()` hain.

## 28. `for...in` loop kya hota hai?

`for...in` object ki enumerable string keys par iterate karta hai.
Inherited enumerable properties bhi aa sakti hain, isliye apni
properties ke liye `Object.hasOwn()` check useful hai.

``` js
const user = { name: "Aman", age: 20 };

for (const key in user) {
  if (Object.hasOwn(user, key)) {
    console.log(key, user[key]);
  }
}
```

Output:

``` text
name Aman
age 20
```

## 29. `Object.keys()` ke saath loop kaise lagate hain?

``` js
const user = { name: "Aman", age: 20 };

for (const key of Object.keys(user)) {
  console.log(key, user[key]);
}
```

`Object.keys()` object ki own enumerable string keys ka array deta hai.

## 30. `Object.values()` ke saath loop kaise lagate hain?

``` js
const user = { name: "Aman", age: 20 };

for (const value of Object.values(user)) {
  console.log(value);
}
```

Output: `Aman`, `20`

## 31. `Object.entries()` ke saath loop kaise lagate hain?

``` js
const user = { name: "Aman", age: 20 };

for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
```

`Object.entries()` har property ke liye `[key, value]` pair deta hai.
Destructuring se key aur value ko alag variables mein le sakte hain.

## 32. Object destructuring kya hoti hai?

Object ki properties ko variables mein nikalne ka concise tareeqa.

``` js
const user = { name: "Aman", age: 20 };

const { name, age } = user;
console.log(name); // Aman
console.log(age); // 20
```

Variable names default roop se property names se match karte hain.

## 33. Destructuring mein default value kaise dete hain?

Default value tab use hoti hai jab property `undefined` ho. Agar value
`null` hai to default apply nahi hota.

``` js
const user = { name: "Aman" };
const { name, city = "Jaipur" } = user;

console.log(city); // Jaipur
```

## 34. Destructuring mein property rename kaise karte hain?

Syntax `propertyName: newVariableName` hoti hai.

``` js
const user = { name: "Aman", age: 20 };

const { name: userName, age: userAge } = user;

console.log(userName); // Aman
console.log(userAge); // 20
```

Yahan `name` aur `age` object ki properties hain; `userName` aur
`userAge` naye variables hain.

## 35. Nested destructuring kya hoti hai?

Nested object ke andar ki properties ko seedhe extract karna.

``` js
const user = {
  name: "Aman",
  address: { city: "Jaipur", pin: 302001 }
};

const {
  address: { city, pin }
} = user;

console.log(city); // Jaipur
console.log(pin); // 302001
```

Agar `address` missing ho, to ye pattern error de sakta hai. Optional
data ke liye pehle default object ya optional chaining consider karein.

## 36. Optional chaining (`?.`) kya hoti hai?

Optional chaining missing/nullish path par error aane se bachati hai.
Agar left side `null` ya `undefined` ho, expression `undefined` return
karta hai.

``` js
const user = { name: "Aman" };

console.log(user.address?.city); // undefined
console.log(user.address?.pin); // undefined
```

Ye `null`/`undefined` ko handle karta hai, lekin doosre errors ko nahi.
Optional chaining assignment ke left side par use nahi hoti.

## 37. Nullish coalescing (`??`) kya hota hai?

`??` right-side default tab deta hai jab left side sirf `null` ya
`undefined` ho. Ye `0`, `false` aur empty string `""` ko preserve karta
hai.

``` js
const user = { name: "", age: 0 };

console.log(user.city ?? "Jaipur"); // Jaipur
console.log(user.age ?? 18); // 0
console.log(user.name || "Guest"); // Guest
```

**`??` vs `||`:** `||` falsey values (`0`, `false`, `""`, `null`,
`undefined`) par fallback karta hai; `??` sirf `null` aur `undefined`
par.

## 38. Property exist karti hai ya nahi kaise check karein?

### Recommended: `Object.hasOwn()`

``` js
const user = { name: "Aman" };

console.log(Object.hasOwn(user, "name")); // true
console.log(Object.hasOwn(user, "age")); // false
```

Ye check karta hai ki property object ki apni property hai, prototype se
inherited nahi.

## 39. `in` operator kya karta hai?

`in` check karta hai ki property object mein ya uske prototype chain
mein maujood hai ya nahi.

``` js
const user = { name: "Aman" };

console.log("name" in user); // true
console.log("toString" in user); // true (prototype se inherited)
console.log(Object.hasOwn(user, "toString")); // false
```

**Difference:** Own property ke liye `Object.hasOwn()`; prototype chain
samet check karna ho to `in`.

## 40. JSON kya hota hai?

JSON ka full form **JavaScript Object Notation** hai. Ye systems ke
beech data exchange karne ka text format hai. JSON JavaScript object
jaisa dikhta hai, lekin ye text hota hai aur iske rules stricter hote
hain.

``` json
{
  "name": "Aman",
  "age": 20,
  "active": true
}
```

JSON mein keys double quotes mein hoti hain. JSON mein functions,
`undefined` aur comments allowed nahi hote.

## 41. Object aur JSON mein kya difference hai?

  -----------------------------------------------------------------------
  JavaScript object                   JSON
  ----------------------------------- -----------------------------------
  JavaScript runtime ka data          Text-based data format
  structure                           

  Keys quotes ke bina bhi ho sakti    Property names double quotes mein
  hain                                hote hain

  Methods/functions rakh sakta hai    Functions represent nahi kar sakta

  Direct property access possible     Parse karne ke baad access karte
                                      hain

  Example: `obj.name`                 JSON string ko pehle parse karna
                                      hota hai
  -----------------------------------------------------------------------

## 42. `JSON.stringify()` kya karta hai?

JavaScript ke JSON-compatible data ko JSON string mein convert karta
hai.

``` js
const user = { name: "Aman", age: 20 };
const jsonText = JSON.stringify(user);

console.log(jsonText); // {"name":"Aman","age":20}
console.log(typeof jsonText); // string
```

Ye data ko API payload ya storage mein rakhne ke kaam aa sakta hai.
`JSON.stringify()` har JavaScript value ko losslessly preserve nahi
karta; functions aur `undefined` jaise values object properties mein
omit ho sakte hain.

## 43. `JSON.parse()` kya karta hai?

Valid JSON text ko JavaScript value/object mein convert karta hai.

``` js
const jsonText = '{"name":"Aman","age":20}';
const user = JSON.parse(jsonText);

console.log(user.name); // Aman
console.log(typeof user); // object
```

Invalid JSON par `SyntaxError` aata hai. Untrusted JSON parse karna
generally `eval()` use karne se safer hai; JSON ke liye `JSON.parse()`
use karein.

## 44. Object aur Map mein kya difference hai?

  -----------------------------------------------------------------------
  Object                              Map
  ----------------------------------- -----------------------------------
  Keys aam taur par strings ya        Keys kisi bhi type ki ho sakti hain
  symbols                             

  `obj.name` se access possible       `map.get(key)`

  `obj[key] = value` se set           `map.set(key, value)`

  Common object literals mein         Frequent add/delete aur key-value
  methods/data rakh sakte hain        collection ke liye useful

  Keys count ke liye                  Count ke liye `map.size`
  `Object.keys(obj).length`           
  -----------------------------------------------------------------------

``` js
const obj = { name: "Aman" };
console.log(obj.name);

const map = new Map();
map.set("name", "Aman");
map.set(101, "Student ID");

console.log(map.get("name")); // Aman
console.log(map.get(101)); // Student ID
console.log(map.size); // 2
```

## 45. `Object.freeze()` vs `Object.seal()` kya hai?

``` js
const a = { name: "Aman" };
Object.freeze(a);
a.name = "Neha"; // strict mode mein error; otherwise update silently fail ho sakta hai
a.age = 20;      // add nahi hota
delete a.name;   // delete nahi hota
```

`freeze()` top-level object ki properties ko add, delete ya update hone
se rokta hai.

``` js
const b = { name: "Aman" };
Object.seal(b);
b.name = "Neha"; // allowed, agar property writable hai
b.age = 20;      // add nahi hota
delete b.name;   // delete nahi hota
```

`seal()` add/delete rokta hai, lekin existing writable property ki value
update ho sakti hai.

**Important:** Dono shallow hain. Nested object automatically
freeze/seal nahi hota. Dono methods object ko return karte hain aur
top-level par hi protection apply karte hain.

## 46. Objects ke saath `==` aur `===` kaise work karte hain?

Objects compare karte waqt `==` aur `===` aam taur par **reference
identity** compare karte hain, content ko recursively compare nahi
karte.

``` js
const a = { name: "Aman" };
const b = { name: "Aman" };
const c = a;

console.log(a == b);  // false
console.log(a === b); // false
console.log(a === c); // true
```

`a` aur `b` ka content same hai, lekin dono alag objects hain. `c` aur
`a` same object ko refer karte hain.

## 47. Object clone kaise karte hain?

Clone ka matlab copy banana. Shallow clone ke liye:

``` js
const original = { name: "Aman", age: 20 };

const clone1 = { ...original };
const clone2 = Object.assign({}, original);
```

Ye top-level copy hai. Nested objects ke independent copies ke liye deep
cloning ka tareeqa choose karein.

## 48. Deep clone kaise karte hain?

Modern JavaScript mein, jab data `structuredClone()` support karta ho:

``` js
const original = {
  user: { name: "Aman" },
  scores: [80, 90]
};

const cloned = structuredClone(original);
cloned.user.name = "Neha";
cloned.scores.push(100);

console.log(original.user.name); // Aman
console.log(original.scores); // [80, 90]
```

JSON workaround:

``` js
const clone = JSON.parse(JSON.stringify(original));
```

**Caution:** JSON workaround functions, `undefined`, `BigInt`, special
objects aur circular references ko properly preserve nahi karta. General
deep cloning ke liye supported data par `structuredClone()` prefer
karein.

## 49. Object ko empty kaise karein?

### Naya empty object assign karein

``` js
let user = { name: "Aman", age: 20 };
user = {};

console.log(user); // {}
```

Ye variable ko naye empty object se point karata hai; doosre references
mein purana object reh sakta hai.

### Existing object ki properties delete karein

``` js
const user2 = { name: "Aman", age: 20 };

for (const key of Object.keys(user2)) {
  delete user2[key];
}

console.log(user2); // {}
```

Agar object `const` se declared hai, to variable ko `{}` se reassign
nahi kar sakte; properties delete kar sakte hain, agar object
non-configurable/frozen na ho.

## 50. Object ka size kaise nikaalein?

Object ki own enumerable string-keyed properties count karne ke liye:

``` js
const user = {
  name: "Aman",
  age: 20,
  city: "Jaipur"
};

console.log(Object.keys(user).length); // 3
```

Ye memory size in bytes nahi batata. Symbols aur non-enumerable
properties is count mein include nahi hote.

## 51. Object iterate kaise karte hain?

`Object.entries()` ek practical option hai jab key aur value dono
chahiye:

``` js
const marks = { HTML: 80, CSS: 85, JavaScript: 90 };

Object.entries(marks).forEach(([subject, score]) => {
  console.log(`${subject}: ${score}`);
});
```

-   Sirf keys: `Object.keys(obj)`
-   Sirf values: `Object.values(obj)`
-   Keys aur values: `Object.entries(obj)`
-   Enumerable string keys par loop: `for...in` (own properties ke liye
    `Object.hasOwn()` check karein)

## 52. Object merge kaise karte hain? (Quick revision)

Do objects ko merge karne ka most common tareeqa spread syntax hai:

``` js
const defaults = { theme: "light", language: "en" };
const preferences = { theme: "dark" };

const settings = { ...defaults, ...preferences };

console.log(settings);
// { theme: "dark", language: "en" }
```

`preferences.theme` baad mein aaya, isliye `"dark"` final value hai.
`Object.assign({}, defaults, preferences)` bhi shallow merge ke liye use
kar sakte hain.

------------------------------------------------------------------------

## Quick Revision --- Important Patterns

``` js
const obj = { name: "Aman", age: 20 };

// Access
obj.name;
obj["age"];

// Add / update
obj.city = "Jaipur";
obj.age = 21;

// Delete
delete obj.city;

// Keys, values, entries
Object.keys(obj);
Object.values(obj);
Object.entries(obj);

// Copy / merge
const copy = { ...obj };
const merged = { ...obj, active: true };

// Check property
Object.hasOwn(obj, "name");
"name" in obj;

// Destructuring
const { name, age } = obj;

// Optional chaining and fallback
obj.address?.city;
obj.city ?? "Unknown";

// JSON conversion
const text = JSON.stringify(obj);
const parsed = JSON.parse(text);

// Deep clone (supported values)
const deepCopy = structuredClone(obj);

// Count own enumerable string keys
Object.keys(obj).length;
```

## Teaching Notes --- Students ko ye points zaroor samjhayen

1.  Object properties **add/update** karne mein dot aur bracket notation
    dono kaam aate hain.
2.  Dynamic property name ke liye bracket notation use hoti hai:
    `obj[key]`.
3.  Spread aur `Object.assign()` aam taur par **shallow copy/merge**
    karte hain.
4.  Object equality content se nahi, reference se check hoti hai.
5.  `Object.keys(obj).length` property count hai, memory size nahi.
6.  `Object.hasOwn(obj, key)` aur `key in obj` ek jaise nahi hain.
7.  `Object.freeze()` aur `Object.seal()` nested objects ko
    automatically protect nahi karte.
8.  JSON ek string format hai; JavaScript object khud JSON text nahi
    hai.
