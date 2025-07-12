// Step 1: Teacher Interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allows for extra properties
}

// Step 2: Directors Interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Step 3: Test object for Directors
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Step 1: Define the function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Step 2: Create the function using the interface
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Step 3: Test it
console.log(printTeacher("John", "Doe")); // Output: J. Doe

