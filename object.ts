// Define a student object with an optional property 'address'
// Optional properties are marked with '?'
let student: { 
  name: string; 
  age: number; 
  dept: string; 
  address?: string; // optional property
} = {
  name: "Fahim",
  age: 22,
  dept: "CSE",
  // address is optional, can add or skip
  address: "Mirpur, Dhaka"
};

console.log(student);
console.log(student.name);
