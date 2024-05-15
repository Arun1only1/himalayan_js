// object copy

// let x = 15;

// let y = x;

// console.log(y);

// const firstName = "Alina";

// let anotherStudentName = firstName;
// console.log(anotherStudentName);

//  if we use "=" => it copies reference(address) to another object
// = is also shallow copy
// const student1 = {
//   name: "Elisha",
//   roll: 5,
//   address: {
//     permanent: "A",
//     temporary: "B",
//   },
// };

// const student2 = student1;

// student2.name = "Sandhya";
// console.log(student1);

// ? spread operator ... (shallow copy)

// const student2 = { ...student1 };
// student2.address.permanent = "Z";
// console.log(student1);

// ? structuredClone (deep copy)
// const student1 = {
//   name: "Elisha",
//   roll: 5,
//   address: {
//     permanent: "A",
//     temporary: "B",
//   },
// };

// let student2 = structuredClone(student1);
// student2.address.permanent = "Z";
// console.log(student1);

// let studentList1 = ["Deepesh", "Amrit", "John", "Sangam", "Kriti"];

// let studentList2 = studentList1;

// studentList1.push("A");
// console.log(studentList2);

// spread
// let studentList2 = [...studentList1];
// studentList1.push("A");
// console.log(studentList2);
