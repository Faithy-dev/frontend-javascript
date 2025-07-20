// Define Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  }
  
  // Extend Teacher with Directors
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  // Interface for printTeacher function
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  // Implement the printTeacher function
  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };
  
  // Create a Teacher instance
  const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log('Teacher:', teacher3);
  console.log('Printed Teacher Name:', printTeacher(teacher3.firstName, teacher3.lastName));
  
  // Create a Director instance
  const director1: Directors = {
    firstName: 'Alice',
    lastName: 'Smith',
    location: 'New York',
    fullTimeEmployee: true,
    numberOfReports: 12,
  };
  
  console.log('Director:', director1);
  console.log('Printed Director Name:', printTeacher(director1.firstName, director1.lastName));
  
  
  // === StudentClass integration ===
  
  // Interface describing the constructor
  interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
  }
  
  // Interface describing the Student class
  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  // Class implementing the StudentClassInterface
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
  
  // Create and test a Student instance
  const student1 = new StudentClass('Jane', 'Doe');
  console.log('Student Display Name:', student1.displayName());
  console.log('Student Work:', student1.workOnHomework());
  
