# JavaScript Array Complete Roadmap

## Easy Hindi/Hinglish Notes --- Questions, Answers, Examples

> **Basic idea:** Jab humein ek hi jagah par multiple data ko order mein
> store karna ho, tab Array ka use karte hain. Jaise 5 students ke
> marks, products ke names ya daily temperatures.
>
> ``` js
> const marks = [80, 75, 90, 65, 88];
> ```
>
> Ek-ek value ke liye alag variable banane ki jagah hum ek Array mein
> saari values rakh sakte hain.

------------------------------------------------------------------------

# 1. Introduction

## 1.1 Array kya hota hai?

**Answer:** Array ek variable mein multiple values ko order mein store
karne ka tareeqa hai.

``` js
const fruits = ["Apple", "Mango", "Banana"];
```

Yahan teen fruits ek hi array mein store hain.

## 1.2 Array ki pehchan kya hoti hai?

Array ko aam taur par square brackets `[]` se likhte hain.

``` js
const numbers = [10, 20, 30];
```

Array check karne ke liye `Array.isArray()` use karte hain.

``` js
console.log(Array.isArray(numbers)); // true
```

## 1.3 Array kyun banate hain?

Jab multiple values ko ek saath rakhna aur un par kaam karna ho, tab
Array banate hain.

``` js
const scores = [70, 85, 90, 60];
```

Ab poore marks ek hi variable `scores` mein hain.

## 1.4 Array kab banate hain?

Jab data **ek list ki tarah** ho aur humein us list ke items ko add,
remove, search ya loop se read karna ho, tab Array banate hain.

``` js
const shoppingItems = ["Milk", "Bread", "Rice"];
```

## 1.5 Array kahan kaam aata hai?

Array ka use tab hota hai jab ek se zyada values ko ek list mein handle
karna ho.

Examples: - Students ke marks: `[80, 75, 90]` - Fruits ke names:
`["Apple", "Mango"]` - Shopping cart ke products - Website par dikhane
wali users/products ki list

## 1.6 Array aur Object mein kya difference hai?

-   **Array:** Jab values ki list banani ho.
-   **Object:** Jab ek cheez ki details ko name ke saath rakhna ho.

``` js
const marks = [80, 90, 75]; // values ki list

const student = {
  name: "Aman",
  age: 20
}; // ek student ki details
```

## 1.7 Array aur String mein kya difference hai?

-   **String:** Text store karta hai, jaise `"Hello"`.
-   **Array:** Multiple items store karta hai, jaise
    `["H", "e", "l", "l", "o"]`.

``` js
const text = "Hello";
const letters = ["H", "e", "l", "l", "o"];
```

String immutable hoti hai; array ke elements update kiye ja sakte hain.

## 1.8 Array aur Set mein kya difference hai? ⭐

-   **Array:** Same value multiple times rakh sakta hai.
-   **Set:** Duplicate values ko ek hi baar rakhta hai.

``` js
const a = [10, 10, 20, 30];
const b = new Set(a);

console.log(a);       // [10, 10, 20, 30]
console.log([...b]);  // [10, 20, 30]
```

------------------------------------------------------------------------

# 2. Creating Array

## 2.1 Array kaise banate hain?

Square brackets ke andar values likhkar:

``` js
const colors = ["Red", "Green", "Blue"];
```

## 2.2 Array Literal kya hota hai?

Jab hum directly `[]` ke andar values likhkar array banate hain, use
Array Literal kehte hain.

``` js
const nums = [10, 20, 30];
```

Ye array banane ka sabse simple aur common tareeqa hai.

## 2.3 Constructor se Array kaise banate hain?

`new Array()` se bhi array bana sakte hain.

``` js
const colors = new Array("Red", "Green", "Blue");
console.log(colors);
```

## 2.4 Array Literal aur Constructor mein kya difference hai?

``` js
const a = [3];          // ek value: 3
const b = new Array(3); // length 3, lekin abhi elements nahi
```

Isliye normal arrays ke liye `[]` use karna zyada easy aur clear hai.

## 2.5 Empty Array kaise banate hain?

``` js
const items = [];
console.log(items); // []
```

Ab ismein baad mein items add kar sakte hain.

## 2.6 Fixed Length Array kaise banate hain? ⭐

JavaScript array ki length badal sakti hai. `new Array(5)` length 5
banata hai, lekin empty slots hote hain.

``` js
const slots = new Array(5);
console.log(slots.length); // 5
```

Agar 5 jagah par zero rakhna hai:

``` js
const zeros = Array(5).fill(0);
console.log(zeros); // [0, 0, 0, 0, 0]
```

## 2.7 Multi-Dimensional Array kya hota hai?

Jab ek array ke andar doosre arrays hote hain, use nested ya
multi-dimensional array kehte hain.

``` js
const marks = [
  [80, 90],
  [70, 85]
];
```

Yahan do arrays ek bade array ke andar hain.

------------------------------------------------------------------------

# 3. Accessing Elements

## 3.1 Array ko kaise access karte hain?

Index number se element access karte hain. Index `0` se shuru hota hai.

``` js
const fruits = ["Apple", "Mango", "Banana"];
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Mango
```

## 3.2 Index kya hota hai?

Array mein kisi element ki position ko index kehte hain. Pehle element
ka index `0`, doosre ka `1` hota hai.

## 3.3 Positive Index kya hota hai?

Start se counting karne wale index ko yahan positive index keh rahe
hain.

``` js
const a = [10, 20, 30];
console.log(a[0]); // 10
console.log(a[2]); // 30
```

## 3.4 Negative Index kya hota hai?

`arr[-1]` JavaScript mein last element nahi deta. Last se element lene
ke liye `.at(-1)` use karein.

``` js
const a = [10, 20, 30];
console.log(a.at(-1)); // 30
console.log(a.at(-2)); // 20
console.log(a[-1]);    // undefined
```

## 3.5 Last Element kaise access karte hain?

``` js
const a = [10, 20, 30];
console.log(a[a.length - 1]); // 30
console.log(a.at(-1));        // 30
```

## 3.6 Nested Array ko kaise access karte hain?

Pehle outer array ka index, phir inner array ka index dete hain.

``` js
const data = [
  ["A", "B"],
  ["C", "D"]
];

console.log(data[0][1]); // B
console.log(data[1][0]); // C
```

------------------------------------------------------------------------

# 4. Adding Elements

## 4.1 Array ko expand kaise karte hain?

Array mein aur values add karke uski length badha sakte hain. `push()`,
`unshift()` aur `splice()` is kaam mein aate hain.

## 4.2 End mein element kaise add karte hain?

`push()` last mein value add karta hai.

``` js
const a = [10, 20];
a.push(30);
console.log(a); // [10, 20, 30]
```

## 4.3 Start mein element kaise add karte hain?

`unshift()` first position par value add karta hai.

``` js
const a = [20, 30];
a.unshift(10);
console.log(a); // [10, 20, 30]
```

## 4.4 Beech mein element kaise add karte hain?

`splice(index, 0, value)` us position par value add karta hai.

``` js
const a = ["A", "C"];
a.splice(1, 0, "B");
console.log(a); // ["A", "B", "C"]
```

## 4.5 Multiple elements kaise add karte hain?

``` js
const a = [1, 4];
a.splice(1, 0, 2, 3);
console.log(a); // [1, 2, 3, 4]

a.push(5, 6);
console.log(a); // [1, 2, 3, 4, 5, 6]
```

------------------------------------------------------------------------

# 5. Updating Elements

## 5.1 Existing element update kaise karte hain?

Index par nayi value assign kar dein.

``` js
const fruits = ["Apple", "Mango", "Banana"];
fruits[1] = "Orange";
console.log(fruits); // ["Apple", "Orange", "Banana"]
```

## 5.2 Multiple values update kaise karte hain?

`splice()` se ek range replace kar sakte hain.

``` js
const a = [10, 20, 30, 40];
a.splice(1, 2, 99, 100);
console.log(a); // [10, 99, 100, 40]
```

## 5.3 Nested Array update kaise karte hain?

``` js
const a = [[1, 2], [3, 4]];
a[1][0] = 99;
console.log(a); // [[1, 2], [99, 4]]
```

------------------------------------------------------------------------

# 6. Removing Elements

## 6.1 Last element delete kaise karte hain?

`pop()` last element remove karta hai.

``` js
const a = [10, 20, 30];
a.pop();
console.log(a); // [10, 20]
```

## 6.2 First element delete kaise karte hain?

`shift()` first element remove karta hai.

``` js
const a = [10, 20, 30];
a.shift();
console.log(a); // [20, 30]
```

## 6.3 Beech ka element delete kaise karte hain?

`splice(index, deleteCount)` use karein.

``` js
const a = ["A", "B", "C", "D"];
a.splice(1, 1);
console.log(a); // ["A", "C", "D"]
```

## 6.4 Specific value delete kaise karte hain?

Pehle `indexOf()` se position find karein, phir `splice()` se remove
karein.

``` js
const a = [10, 20, 30];
const index = a.indexOf(20);

if (index !== -1) {
  a.splice(index, 1);
}
console.log(a); // [10, 30]
```

## 6.5 Multiple matching values delete kaise karte hain?

`filter()` se unwanted values ke bina naya array banayein.

``` js
const a = [1, 2, 2, 3, 2, 4];
const result = a.filter(n => n !== 2);
console.log(result); // [1, 3, 4]
```

## 6.6 Array ko empty kaise karte hain?

``` js
const a = [1, 2, 3];
a.length = 0;
console.log(a); // []
```

Isse same array empty hota hai. `let a = []` karna alag naya array
assign karta hai; `const` variable ko reassign nahi kar sakte.

------------------------------------------------------------------------

# 7. Array Methods

## 7.1 Array mein kaun-kaun se methods hote hain?

Methods array par kaam karne ke ready-made functions hain. Inse add,
remove, search, copy, sort aur transform kar sakte hain.

## 7.2 Sabse zyada use hone wale methods kaun se hain?

`push()`, `pop()`, `splice()`, `slice()`, `map()`, `filter()`, `find()`,
`includes()`, `reduce()`, `sort()` aur `forEach()` bahut useful hain.

## Important Methods

### `push()`

End mein value add karta hai.

``` js
const a = [1, 2];
a.push(3); // [1, 2, 3]
```

### `pop()`

End ki value remove karke return karta hai.

``` js
const a = [1, 2, 3];
console.log(a.pop()); // 3
console.log(a); // [1, 2]
```

### `shift()`

Start ki value remove karta hai.

``` js
const a = [1, 2, 3];
a.shift();
console.log(a); // [2, 3]
```

### `unshift()`

Start mein value add karta hai.

``` js
const a = [2, 3];
a.unshift(1);
console.log(a); // [1, 2, 3]
```

### `splice()`

Original array mein add/remove/replace karta hai.

``` js
const a = [10, 20, 30];
a.splice(1, 1, 99);
console.log(a); // [10, 99, 30]
```

### `slice()`

Array ka ek portion copy karta hai. Original change nahi hota.

``` js
const a = [10, 20, 30, 40];
console.log(a.slice(1, 3)); // [20, 30]
console.log(a); // [10, 20, 30, 40]
```

End index include nahi hota.

### `concat()`

Do ya zyada arrays ko jodkar naya array banata hai.

``` js
console.log([1, 2].concat([3, 4])); // [1, 2, 3, 4]
```

### `join()`

Array ke items ko ek string mein jodta hai.

``` js
console.log(["HTML", "CSS", "JS"].join(", ")); // HTML, CSS, JS
```

### `reverse()`

Original array ka order ulta karta hai.

``` js
const a = [1, 2, 3];
a.reverse();
console.log(a); // [3, 2, 1]
```

### `sort()`

Items ko sort karta hai. Default sorting string ke order ke hisaab se
hoti hai.

``` js
const a = ["Mango", "Apple", "Banana"];
a.sort();
console.log(a); // ["Apple", "Banana", "Mango"]
```

### `toSorted()` ⭐

Sorted naya array return karta hai; original change nahi hota.

``` js
const a = [30, 5, 100];
console.log(a.toSorted((x, y) => x - y)); // [5, 30, 100]
console.log(a); // [30, 5, 100]
```

### `toReversed()` ⭐

Reverse order ka naya array return karta hai.

``` js
const a = [1, 2, 3];
console.log(a.toReversed()); // [3, 2, 1]
console.log(a); // [1, 2, 3]
```

### `with()` ⭐

Ek index ki value badalkar naya array return karta hai.

``` js
const a = [10, 20, 30];
console.log(a.with(1, 99)); // [10, 99, 30]
console.log(a); // [10, 20, 30]
```

### `fill()`

Array ke selected portion mein ek value bhar deta hai.

``` js
const a = [1, 2, 3, 4];
a.fill(0, 1, 3);
console.log(a); // [1, 0, 0, 4]
```

### `copyWithin()`

Array ke andar hi ek portion ko doosri position par copy karta hai.

``` js
const a = [1, 2, 3, 4, 5];
a.copyWithin(0, 3);
console.log(a); // [4, 5, 3, 4, 5]
```

### `at()`

Index se value deta hai. Negative index last se count karta hai.

``` js
const a = ["A", "B", "C"];
console.log(a.at(-1)); // C
```

------------------------------------------------------------------------

# 8. Searching Methods

### `indexOf()`

Value ka pehla index deta hai; value nahi mile to `-1`.

``` js
console.log([10, 20, 30].indexOf(20)); // 1
```

### `lastIndexOf()`

Value ka last matching index deta hai.

``` js
console.log([10, 20, 10].lastIndexOf(10)); // 2
```

### `includes()`

Batata hai value array mein hai ya nahi.

``` js
console.log(["A", "B"].includes("B")); // true
```

### `find()`

Condition pass karne wala pehla element deta hai.

``` js
console.log([5, 12, 18].find(n => n > 10)); // 12
```

### `findIndex()`

Pehle matching element ka index deta hai.

``` js
console.log([5, 12, 18].findIndex(n => n > 10)); // 1
```

### `findLast()` ⭐

End se search karke last matching value deta hai.

``` js
console.log([2, 5, 8, 9].findLast(n => n % 2 === 0)); // 8
```

### `findLastIndex()` ⭐

End se search karke last matching value ka index deta hai.

``` js
console.log([2, 5, 8, 9].findLastIndex(n => n % 2 === 0)); // 2
```

### `some()`

Agar kam se kam ek value condition pass kare to `true`.

``` js
console.log([2, 4, 5].some(n => n % 2 !== 0)); // true
```

### `every()`

Agar sabhi values condition pass karein to `true`.

``` js
console.log([2, 4, 6].every(n => n % 2 === 0)); // true
```

------------------------------------------------------------------------

# 9. Looping

Example array:

``` js
const numbers = [10, 20, 30];
```

## Array mein loop kaise lagate hain?

Loop se array ki values ko ek-ek karke read kar sakte hain.

### `for` loop

``` js
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

Index chahiye ho ya `break`/`continue` use karna ho to useful.

### `while` loop

``` js
let i = 0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}
```

### `do...while` loop

Ye body ko kam se kam ek baar chalata hai.

``` js
let i = 0;
do {
  console.log(numbers[i]);
  i++;
} while (i < numbers.length);
```

### `for...of` loop

Values ko directly read karta hai.

``` js
for (const n of numbers) {
  console.log(n);
}
```

### `forEach()`

Har value par callback chalata hai. Naya array return nahi karta.

``` js
numbers.forEach(n => console.log(n));
```

### `map()`

Har value ko badalkar naya array deta hai.

``` js
console.log(numbers.map(n => n * 2)); // [20, 40, 60]
```

### `filter()`

Condition pass karne wali values ka naya array deta hai.

``` js
console.log(numbers.filter(n => n >= 20)); // [20, 30]
```

### `reduce()`

Saari values ko combine karke ek result banata hai.

``` js
console.log(numbers.reduce((sum, n) => sum + n, 0)); // 60
```

### `reduceRight()`

`reduce()` ki tarah kaam karta hai, lekin right side se start karta hai.

``` js
console.log(["A", "B", "C"].reduceRight((out, x) => out + x, "")); // CBA
```

### `flatMap()`

Har item ko transform karta hai aur result ko ek level flatten karta
hai.

``` js
console.log([1, 2].flatMap(n => [n, n * 10])); // [1, 10, 2, 20]
```

------------------------------------------------------------------------

# 10. Transformation Methods

Transformation ka matlab existing data se naya result banana.

### `map()`

``` js
[1, 2, 3].map(n => n * 10); // [10, 20, 30]
```

### `filter()`

``` js
[1, 2, 3, 4].filter(n => n > 2); // [3, 4]
```

### `reduce()`

``` js
[10, 20, 30].reduce((sum, n) => sum + n, 0); // 60
```

### `flat()`

Nested array ko ek level tak kholta hai.

``` js
[1, [2, 3], [4]].flat(); // [1, 2, 3, 4]
```

### `flatMap()`

Pehle `map()`, phir ek level `flat()` jaisa kaam karta hai.

``` js
["a b", "c"].flatMap(s => s.split(" ")); // ["a", "b", "c"]
```

### `concat()`

``` js
[1, 2].concat([3, 4]); // [1, 2, 3, 4]
```

------------------------------------------------------------------------

# 11. Sorting

## `sort()` kya karta hai?

Array ke elements ko order mein arrange karta hai. `sort()` original
array ko change karta hai.

## Alphabetical Sorting

``` js
const names = ["Ravi", "Aman", "Neha"];
names.sort();
console.log(names); // ["Aman", "Neha", "Ravi"]
```

## Numeric Sorting

Default sort numbers ko string ki tarah compare karta hai, isliye
comparator dein.

``` js
const nums = [100, 5, 20];
console.log(nums.toSorted((a, b) => a - b)); // [5, 20, 100]
```

## Descending Sorting

``` js
const nums = [100, 5, 20];
console.log(nums.toSorted((a, b) => b - a)); // [100, 20, 5]
```

## Custom Sorting

``` js
const students = [
  { name: "Aman", marks: 80 },
  { name: "Neha", marks: 95 },
  { name: "Ravi", marks: 70 }
];

console.log(students.toSorted((a, b) => b.marks - a.marks));
```

Yahan marks ke basis par high to low sorting hai.

## Stable Sorting ⭐

Stable sorting ka matlab: jin do items ki sorting value same ho, unka
aapas ka purana order same rehta hai. Modern JavaScript ka `sort()`
stable hai.

------------------------------------------------------------------------

# 12. Copy & Merge

## Array copy kaise karte hain?

``` js
const a = [1, 2, 3];
const copy1 = [...a];
const copy2 = a.slice();
```

Ye shallow copies hain.

## Array merge kaise karte hain?

``` js
const a = [1, 2];
const b = [3, 4];

const merged1 = [...a, ...b];
const merged2 = a.concat(b);
console.log(merged1); // [1, 2, 3, 4]
```

## Spread Operator array mein kaise use hota hai?

`...` array ke items ko expand karta hai.

``` js
const a = [1, 2];
const b = [...a, 3, 4];
console.log(b); // [1, 2, 3, 4]
```

## Rest Operator array mein kaise use hota hai?

Rest baaki values ko ek array mein collect karta hai.

``` js
const [first, ...remaining] = [10, 20, 30];
console.log(first); // 10
console.log(remaining); // [20, 30]
```

## Shallow Copy kya hoti hai?

Top-level array ki copy banti hai, lekin nested array/object ka
reference shared reh sakta hai.

``` js
const original = [{ city: "Jaipur" }];
const copy = [...original];
copy[0].city = "Delhi";
console.log(original[0].city); // Delhi
```

## Deep Copy kya hoti hai?

Nested objects/arrays ki bhi alag copy banayi jati hai.

``` js
const original = [{ city: "Jaipur" }];
const copy = structuredClone(original);
copy[0].city = "Delhi";
console.log(original[0].city); // Jaipur
```

`structuredClone()` modern environments mein supported data ke liye use
karein.

------------------------------------------------------------------------

# 13. Nested Arrays

## Array ke andar Array kaise banate hain?

``` js
const data = [[1, 2], [3, 4]];
```

## Array ke andar Object kaise banate hain?

``` js
const students = [
  { name: "Aman", marks: 80 },
  { name: "Neha", marks: 95 }
];
```

## Nested Array ko access kaise karte hain?

``` js
console.log(data[0][1]); // 2
console.log(students[1].name); // Neha
```

## Nested Array update kaise karte hain?

``` js
data[0][1] = 99;
console.log(data); // [[1, 99], [3, 4]]
```

------------------------------------------------------------------------

# 14. Destructuring

## Array Destructuring kya hoti hai?

Array ke elements ko variables mein nikalna.

``` js
const colors = ["Red", "Green", "Blue"];
const [first, second] = colors;
console.log(first, second); // Red Green
```

## Default Value

Agar value `undefined` ho to default value use hoti hai.

``` js
const [name = "Guest"] = [];
console.log(name); // Guest
```

## Skip Values

Comma chhodkar kisi position ko skip kar sakte hain.

``` js
const [first, , third] = [10, 20, 30];
console.log(first, third); // 10 30
```

## Rest Operator

``` js
const [first, ...rest] = [1, 2, 3, 4];
console.log(rest); // [2, 3, 4]
```

## Nested Destructuring

``` js
const data = ["Aman", [80, 90]];
const [name, [math, science]] = data;
console.log(name, math, science); // Aman 80 90
```

## Swap Variables using Destructuring

``` js
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a, b); // 20 10
```

------------------------------------------------------------------------

# 15. Spread & Rest

## Spread Operator kya hota hai?

Array ke items ko expand karta hai.

``` js
const a = [1, 2];
console.log([...a, 3]); // [1, 2, 3]
```

## Rest Operator kya hota hai?

Bachi hui values ko ek array mein collect karta hai.

``` js
const [first, ...rest] = [1, 2, 3];
console.log(rest); // [2, 3]
```

## Spread vs Rest Operator

-   **Spread:** values ko kholta/expand karta hai.
-   **Rest:** remaining values ko collect karta hai.
-   Dono ka syntax `...` hai; use kis jagah hua hai, usse meaning samajh
    aata hai.

## Array Clone

``` js
const a = [1, 2, 3];
const clone = [...a];
```

## Array Merge

``` js
const a = [1, 2];
const b = [3, 4];
const result = [...a, ...b];
```

------------------------------------------------------------------------

# 16. Array Iteration --- Differences

## `map()` vs `forEach()`

-   `map()` transformed values ka naya array deta hai.
-   `forEach()` har value par kaam karta hai aur `undefined` return
    karta hai.

``` js
const a = [1, 2, 3];
const doubled = a.map(n => n * 2); // [2, 4, 6]
a.forEach(n => console.log(n));   // values print hoti hain
```

## `filter()` vs `find()`

-   `filter()` saari matching values ka array deta hai.
-   `find()` pehli matching value deta hai.

``` js
const a = [2, 5, 7, 8];
console.log(a.filter(n => n % 2 !== 0)); // [5, 7]
console.log(a.find(n => n % 2 !== 0));   // 5
```

## `some()` vs `every()`

-   `some()` --- kya kam se kam ek value condition pass karti hai?
-   `every()` --- kya sabhi values condition pass karti hain?

``` js
[1, 2, 3].some(n => n > 2);  // true
[1, 2, 3].every(n => n > 0); // true
```

------------------------------------------------------------------------

# 17. Array Conversion

## String se Array

``` js
console.log("red,green,blue".split(",")); // ["red", "green", "blue"]
console.log(Array.from("cat")); // ["c", "a", "t"]
```

## Array se String

``` js
console.log(["red", "green", "blue"].join(", ")); // red, green, blue
```

## Object se Array

``` js
const user = { name: "Aman", age: 20 };
console.log(Object.keys(user)); // ["name", "age"]
console.log(Object.values(user)); // ["Aman", 20]
console.log(Object.entries(user)); // [["name","Aman"],["age",20]]
```

## Array se Object

``` js
const pairs = [["name", "Aman"], ["age", 20]];
console.log(Object.fromEntries(pairs)); // { name: "Aman", age: 20 }
```

## `Array.from()`

Iterable ya array-like value se array banata hai.

``` js
console.log(Array.from("hello")); // ["h", "e", "l", "l", "o"]
console.log(Array.from([1, 2, 3], n => n * 2)); // [2, 4, 6]
```

## `Array.of()`

Jo arguments diye hain, unko elements banata hai.

``` js
console.log(Array.of(3)); // [3]
console.log(Array.of(1, 2, 3)); // [1, 2, 3]
```

------------------------------------------------------------------------

# 18. Property Checking

## Length kya hoti hai?

`length` array ki length batati hai. Aam dense array mein ye elements ki
count ke barabar hoti hai.

``` js
const a = [10, 20, 30];
console.log(a.length); // 3
```

## Array ka size kaise nikalte hain?

``` js
console.log([10, 20, 30].length); // 3
```

Ye item positions/length batata hai, memory ka size bytes mein nahi.

## Empty Array kaise check karte hain?

``` js
const a = [];
console.log(a.length === 0); // true
```

## Element exist karta hai ya nahi?

``` js
const a = ["A", "B", "C"];
console.log(a.includes("B")); // true
console.log(a.includes("Z")); // false
```

## `Array.isArray()` kya hota hai?

Check karta hai ki value array hai ya nahi.

``` js
console.log(Array.isArray([1, 2])); // true
console.log(Array.isArray({})); // false
```

------------------------------------------------------------------------

# 19. JSON

## Array aur JSON mein difference

Array JavaScript mein data rakhne ka structure hai. JSON data
bhejne/receive karne ka text format hai. JSON text mein array likha ja
sakta hai.

``` js
const arr = [1, "Aman", true];
const jsonText = '[1,"Aman",true]';
```

## `JSON.stringify()`

Array/value ko JSON string mein convert karta hai.

``` js
const arr = [1, "Aman", true];
const text = JSON.stringify(arr);
console.log(text); // [1,"Aman",true]
```

## `JSON.parse()`

Valid JSON text ko JavaScript value mein convert karta hai.

``` js
const arr = JSON.parse('[1,"Aman",true]');
console.log(arr[1]); // Aman
```

------------------------------------------------------------------------

# 20. Equality

## `==` aur `===` Array mein kaise work karte hain?

Arrays compare karte waqt content nahi, reference check hota hai.

``` js
const a = [1, 2];
const b = [1, 2];
const c = a;

console.log(a === b); // false
console.log(a === c); // true
```

## Do arrays compare kaise karein?

Simple primitive values ke liye:

``` js
const a = [1, 2, 3];
const b = [1, 2, 3];

const same = a.length === b.length &&
  a.every((value, index) => value === b[index]);

console.log(same); // true
```

Nested arrays/objects ke liye deeper comparison chahiye.

## Arrays reference type kyun hote hain?

Array ek object hai. Jab ek variable ko doosre mein assign karte hain,
to same array ka reference share ho sakta hai.

``` js
const a = [1, 2];
const b = a;
b.push(3);
console.log(a); // [1, 2, 3]
```

------------------------------------------------------------------------

# 21. Advanced Topics

## Sparse Array kya hota hai?

Aisa array jisme kuch indexes par koi element nahi hota.

``` js
const a = new Array(3);
console.log(a.length); // 3
console.log(0 in a); // false
```

## Dense Array kya hota hai?

Aisa array jisme har expected index par element maujood ho.

``` js
const a = [undefined, undefined, undefined];
console.log(0 in a); // true
```

## Array Holes kya hote hain?

Hole missing index hota hai. Hole aur actual `undefined` value alag
hain.

``` js
const sparse = new Array(2);
const dense = [undefined, undefined];

console.log(0 in sparse); // false
console.log(0 in dense);  // true
```

## Optional Chaining Array mein kaise use hoti hai?

Agar array ya element missing ho to error se bachne mein help karti hai.

``` js
const users = [{ name: "Aman" }];
console.log(users[0]?.name); // Aman
console.log(users[5]?.name); // undefined
```

Agar `users` khud null ho sakta hai: `users?.[0]?.name`.

## Nullish Coalescing (`??`)

Agar value `null` ya `undefined` ho to default value deta hai.

``` js
const a = [];
console.log(a[0] ?? "No item"); // No item
console.log(0 ?? 100); // 0
```

## Chaining Methods

Ek method ke result par doosra method chalana.

``` js
const result = [1, 2, 3, 4, 5, 6]
  .filter(n => n % 2 === 0)
  .map(n => n * 10);

console.log(result); // [20, 40, 60]
```

## Immutable Arrays ⭐

Immutable style mein original array ko change nahi karte, balki naya
array banate hain.

``` js
const a = [10, 20, 30];
const added = [...a, 40];
const changed = a.with(1, 99);
const removed = a.filter(n => n !== 20);

console.log(a); // [10, 20, 30]
console.log(added); // [10, 20, 30, 40]
console.log(changed); // [10, 99, 30]
console.log(removed); // [10, 30]
```

------------------------------------------------------------------------

# 22. Array Reference

## Array Reference kya hota hai?

Do variables ek hi array ko refer kar sakte hain.

``` js
const a = [1, 2];
const b = a;
b[0] = 99;
console.log(a); // [99, 2]
```

## Pass by Value vs Reference

JavaScript arguments ko value se pass karta hai. Array ke case mein us
value mein object ka reference hota hai. Isliye function array ko mutate
kar sakta hai.

``` js
function addItem(arr) {
  arr.push(3);
}
const nums = [1, 2];
addItem(nums);
console.log(nums); // [1, 2, 3]
```

## Memory Representation

Simple samajh: variable array object ko refer karta hai. JavaScript
engine actual memory ko internally optimize kar sakta hai; humein exact
physical layout assume nahi karna chahiye.

## Clone vs Reference

``` js
const a = [1, 2];
const reference = a;
const clone = [...a];

reference.push(3);
console.log(a); // [1, 2, 3]
console.log(clone); // [1, 2]
```

------------------------------------------------------------------------

# 23. Array Performance

## `push()` vs `unshift()`

-   `push()` end mein add karta hai; aam taur par efficient hota hai.
-   `unshift()` start mein add karta hai; baaki elements ke indexes
    adjust ho sakte hain.

## `pop()` vs `shift()`

-   `pop()` end se remove karta hai.
-   `shift()` start se remove karta hai aur baaki items ko shift kar
    sakta hai.

## `slice()` vs `splice()`

-   `slice()` portion ki copy deta hai; original nahi badalta.
-   `splice()` original array mein add/remove/replace karta hai.

## `for` vs `forEach()`

-   `for` mein index aur `break`/`continue` ka control hota hai.
-   `forEach()` callback-based aur readable hai, lekin normal `break`
    nahi kar sakte.
-   Speed ka ek universal rule nahi; actual data par benchmark karna
    chahiye.

## `map()` vs `forEach()`

-   Naya transformed array chahiye: `map()`.
-   Sirf har item par action karna hai: `forEach()`.

------------------------------------------------------------------------

# 24. Array Practice --- Solved Examples

## Duplicate remove kaise karein?

``` js
const a = [1, 2, 2, 3, 1, 4];
const unique = [...new Set(a)];
console.log(unique); // [1, 2, 3, 4]
```

## Maximum Value

``` js
const a = [10, 50, 20, 80, 30];
console.log(Math.max(...a)); // 80
```

## Minimum Value

``` js
const a = [10, 50, 20, 80, 30];
console.log(Math.min(...a)); // 10
```

## Sum

``` js
const a = [10, 20, 30];
console.log(a.reduce((sum, n) => sum + n, 0)); // 60
```

## Average

``` js
const a = [10, 20, 30];
const avg = a.length ? a.reduce((sum, n) => sum + n, 0) / a.length : 0;
console.log(avg); // 20
```

## Second Largest Distinct Value

``` js
const a = [10, 50, 20, 80, 80, 30];
const sorted = [...new Set(a)].toSorted((x, y) => y - x);
console.log(sorted[1]); // 50
```

## Frequency Count

``` js
const fruits = ["apple", "banana", "apple", "mango", "banana", "apple"];
const count = fruits.reduce((obj, fruit) => {
  obj[fruit] = (obj[fruit] ?? 0) + 1;
  return obj;
}, {});
console.log(count); // { apple: 3, banana: 2, mango: 1 }
```

## Reverse Array

``` js
const a = [1, 2, 3];
console.log(a.toReversed()); // [3, 2, 1]
console.log(a); // [1, 2, 3]
```

## Rotate Array Right by One

``` js
const a = [1, 2, 3, 4];
const rotated = a.length ? [a[a.length - 1], ...a.slice(0, -1)] : [];
console.log(rotated); // [4, 1, 2, 3]
```

## Merge Arrays

``` js
console.log([...([1, 2]), ...([3, 4])]); // [1, 2, 3, 4]
```

## Flatten Array

``` js
const a = [1, [2, [3, 4]]];
console.log(a.flat(Infinity)); // [1, 2, 3, 4]
```

## Unique Values

``` js
console.log([...new Set(["A", "B", "A"])]); // ["A", "B"]
```

## Sorting Problems

``` js
const a = [8, 1, 10, 3];
console.log(a.toSorted((x, y) => x - y)); // [1, 3, 8, 10]
console.log(a.toSorted((x, y) => y - x)); // [10, 8, 3, 1]
```

------------------------------------------------------------------------

# 25. Interview Questions --- Easy Answers

## Q1. Array aur Object mein difference?

Array values ki ordered list hai; Object named properties se details
store karta hai.

## Q2. Array aur Set mein difference?

Array duplicate values allow karta hai; Set unique values rakhta hai.

## Q3. Array aur Map mein difference?

Array index ke through values rakhta hai; Map key-value pairs rakhta hai
aur keys kisi bhi type ki ho sakti hain.

## Q4. `map()` vs `forEach()`?

`map()` naya array deta hai; `forEach()` har item par callback chalata
hai aur `undefined` return karta hai.

## Q5. `filter()` vs `find()`?

`filter()` sab matching items deta hai; `find()` pehla matching item
deta hai.

## Q6. `slice()` vs `splice()`?

`slice()` copy banata hai; `splice()` original array ko badalta hai.

## Q7. `push()` vs `concat()`?

`push()` original array mein add karta hai; `concat()` naya array return
karta hai.

## Q8. `some()` vs `every()`?

`some()` mein kam se kam ek item pass hona chahiye; `every()` mein sab
pass hone chahiye.

## Q9. `sort()` numbers ko galat order mein kyu dikha sakta hai?

Default `sort()` values ko string ki tarah compare karta hai. Numbers ke
liye `sort((a, b) => a - b)` use karein.

## Q10. Shallow Copy vs Deep Copy?

Shallow copy nested references share kar sakti hai; deep copy nested
data ko bhi copy karti hai.

## Q11. Spread vs Rest?

Spread items ko expand karta hai; rest remaining items ko collect karta
hai.

## Q12. `Array.isArray()` kyu use karte hain?

Kyunki `typeof []` ka result `"object"` hota hai. `Array.isArray()`
batata hai ki value array hai ya nahi.

## Q13. `Array.from()` aur `Array.of()` mein difference?

`Array.from()` iterable/array-like input se array banata hai;
`Array.of()` arguments ko elements banata hai.

## Q14. `flat()` vs `flatMap()`?

`flat()` nested array ko flatten karta hai; `flatMap()` pehle map karta
hai aur phir ek level flatten karta hai.

## Q15. `reduce()` kab use karna chahiye?

Jab multiple values ko combine karke ek result banana ho, jaise sum,
average ya frequency count.

## Q16. Array ko immutable tarike se update kaise karein?

Spread, `map()`, `filter()`, `slice()`, `concat()`, `toSorted()`,
`toReversed()` ya `with()` use karein.

## Q17. Sparse Array kya hota hai?

Aisa array jisme kuch indexes missing hote hain.

## Q18. Array mein holes kya hote hain?

Missing index ko hole kehte hain. Hole aur actual `undefined` element ek
jaise nahi hain.

## Q19. Arrays reference type kyu hote hain?

Array ek object hai. Assignment mein reference copy ho sakta hai, isliye
dono variables same array ko refer kar sakte hain.

## Q20. Circular Array kya hota hai? ⭐

Circular array ek aisa concept hai jahan last index ke baad next index
phir `0` ho jata hai. JavaScript mein ye alag built-in type nahi; modulo
`%` se implement kar sakte hain.

``` js
const a = ["A", "B", "C"];
let index = 2;
index = (index + 1) % a.length;
console.log(a[index]); // A
```

------------------------------------------------------------------------

# Quick Revision --- Kaun sa Method Original Array Badalta Hai?

  -----------------------------------------------------------------------
  Original array badalta hai          Original array nahi badalta / naya
                                      result deta hai
  ----------------------------------- -----------------------------------
  `push()`                            `map()`

  `pop()`                             `filter()`

  `shift()`                           `slice()`

  `unshift()`                         `concat()`

  `splice()`                          `toSorted()`

  `sort()`                            `toReversed()`

  `reverse()`                         `with()`

  `fill()`                            `[...arr]`

  `copyWithin()`                      `flat()` / `flatMap()`
  -----------------------------------------------------------------------

**Yaad rakhein:** Jab ek hi jagah multiple values ki list store karni
ho, Array use karein. Jab har value ka naam alag ho aur ek entity ki
details rakhni hon, Object use karein.
