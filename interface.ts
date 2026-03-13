/**
 * Define an interface 'User' to enforce the structure of a user object
 * Optional properties can be marked with '?' (like address)
 */
interface User {
  name: string;
  age: number;
  address?: string; // optional property
}

// Create a user object following the 'User' interface
const user: User = {
  name: "Fahim",
  age: 22,
  // address is optional, can add or skip
  address: "Mirpur, Dhaka"
};

console.log(user);

// In JavaScript, interfaces don't exist, so objects are free-form
// const user = { name: "Fahim", age: 22, address: "Mirpur, Dhaka" };