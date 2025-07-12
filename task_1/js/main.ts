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

// Interface for the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface for the class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementation
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Testing it
const student = new StudentClass('Fathia', 'Olousegoun');
console.log(student.displayName());      // Output: Faithia
console.log(student.workOnHomework());   // Output: Currently working

