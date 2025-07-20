// DirectorInterface with 3 methods
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  // TeacherInterface with 3 methods
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  // Director class implementing DirectorInterface
  class Director implements DirectorInterface {
    workFromHome(): string {
      return 'Working from home';
    }
  
    getCoffeeBreak(): string {
      return 'Getting a coffee break';
    }
  
    workDirectorTasks(): string {
      return 'Getting to director tasks';
    }
  }
  
  // Teacher class implementing TeacherInterface
  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return 'Cannot work from home';
    }
  
    getCoffeeBreak(): string {
      return 'Cannot have a break';
    }
  
    workTeacherTasks(): string {
      return 'Getting to work';
    }
  }
  
  // createEmployee function
  function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
    }
    if (typeof salary === 'string') {
      // Assume string salaries mean director (like '$500')
      return new Director();
    }
    // salary is number >= 500
    return new Director();
  }
  
  // Type predicate function to check if employee is a Director
  function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
  }
  
  // executeWork function calling correct work method
  function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
      return employee.workDirectorTasks();
    } else {
      return employee.workTeacherTasks();
    }
  }
  
  // === Example usage ===
  const emp1 = createEmployee(200);
  console.log(emp1.constructor.name);  // Teacher
  console.log(executeWork(emp1));       // Getting to work
  
  const emp2 = createEmployee(1000);
  console.log(emp2.constructor.name);  // Director
  console.log(executeWork(emp2));       // Getting to director tasks
  
  const emp3 = createEmployee('$500');
  console.log(emp3.constructor.name);  // Director
  console.log(executeWork(emp3));       // Getting to director tasks
  
