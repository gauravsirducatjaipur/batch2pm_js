// x = 5
// console.log("type of x is", typeof x)

// x = 5.1
// console.log("type of x is", typeof x)

// x = "hello world"
// console.log("now type of x is", typeof x)

// x = 'hello world'
// console.log("now type of x is", typeof x)

// x = true
// console.log("now type of x is", typeof x)

// x = false
// console.log("now type of x is", typeof x)


// x = 5
// console.log("now type of x is", typeof x)



// // initialization
// let y = 7


// // declaration
// let x;

// // definition / assignment
// x = 10

// console.log("x is", x)



// let x;
// x = 10
// console.log("x is", x)

// x = 20
// console.log("x is", x)

// x = 5
// console.log("x is", x)

// var x;
// console.log("x is", x)


// const x = 10
// console.log("x is", x);


// const pi = 3.14159265359
// const r = 3

// console.log("area of circle is", pi * r * r)

// //                |                                     |
// //               1km                                   2km
// //  1.5


// let roll_no = 1
// let name = "Abhishek"
// let marks = 70.5
// let is_married = false
// let address = "Noida"


// console.log(roll_no)
// console.log(name)
// console.log(marks)
// console.log(is_married)
// console.log(address)



// let studentDetail = {
//   roll_no: 1,
//   name: "Abhishek",
//   address: "Noida",
//   city: "Ghaziabad",
//   marks: 70.5,
//   is_married: false,
//   dob: {
//     day: 1,
//     month: 1,
//     year: 2000
//   },
// }


// console.log(studentDetail.city)
// console.log(studentDetail['city'])


// console.log(studentDetail.name)
// console.log(studentDetail['name'])


// console.log(studentDetail.dob)
// console.log(studentDetail['dob'])

// console.log(studentDetail.dob.year)
// console.log(studentDetail['dob']['year'])

// console.log(studentDetail["marks"], studentDetail["address"], studentDetail["is_married"])


// let studentData = [1, "Abhishek", 70.5, false, "Noida"]
// console.log(studentData[2], studentData[4])





let student =
{
  roll_no: 1,
  name: "Abhishek",
  address: "Noida",
  city: "Ghaziabad",
  marks: 70.5,
  is_married: false,
  dob: {
    day: 1,
    month: 1,
    year: 2000
  },
  friends: ["Govind", "Jitendra", "Rudra", "Ramgopal", {
    name: "pankaj",
    city: "jaipur",
    age: 26,
    friends: ['vishal', 'vikram', 'mohit']
  }],
  parentDetail: {
    fatherDetail: {
      name: "Mr. Sagar Choudhary",
      age: 42,
      occupation: {
        type: {
          name: "business",
          mode: "online"
        },
        friends: ["Amit Kumar", "Raviprakash", "Radhamohan", "Suresh Kumar"],
        income: 1000000
      }
    },
    motherDetail: {
      name: "Mrs. Santosh Choudhary",
      age: 40
    }
  },
  siblings: ["Sachin"],
  landline: null,
  weight: 75.58,
  height: 5.8
}



console.log("student detail are", student)
console.log("friend of student is", student.friends)
console.log("fast friend of student is", student.friends[4])
console.log("fast friend of student name is", student.friends[4].name, "lives in", student.friends[4].city)
console.log(student.friends[4].friends[2])