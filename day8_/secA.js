// Section A - Implementing Inheritance with Prototypes

// Constructor function for Person
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add greet method to Person prototype
Person.prototype.greet = function() {
    return "Hello, I'm " + this.name + "!";
};

// Constructor function for Student that inherits from Person
function Student(name, age, subject) {
    // Call the parent constructor
    Person.call(this, name, age);
    this.subject = subject;
}

// Set up prototype inheritance
Student.prototype = Object.create(Person.prototype);

// Restore the constructor property
Student.prototype.constructor = Student;

// Add study method to Student prototype
Student.prototype.study = function() {
    return this.name + " is studying " + this.subject + ".";
};

// Testing the implementation
console.log("=== Testing Prototype Inheritance ===");

// Create a Person instance
const person1 = new Person("Alice", 30);
console.log("Person:", person1.greet()); // "Hello, I'm Alice!"

// Create a Student instance
const student1 = new Student("Bob", 20, "Mathematics");
console.log("Student greeting:", student1.greet()); // "Hello, I'm Bob!" (inherited)
console.log("Student studying:", student1.study()); // "Bob is studying Mathematics."

// Verify inheritance
console.log("Is student1 an instance of Student?", student1 instanceof Student); // true
console.log("Is student1 an instance of Person?", student1 instanceof Person); // true
console.log("Student constructor:", Student.prototype.constructor === Student); // true

// Test another student
const student2 = new Student("Charlie", 19, "Physics");
console.log("Another student:", student2.greet());
console.log("Another student studying:", student2.study());