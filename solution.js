"use strict";
/* 
# Advanced Test - Programming Basics
## Task 1 - Key Value Pairs
* Create an object called `profileData` that represents a user
* The object should have 4 keys: `firstName`, `lastName`, `age` and `city`
* Use values of your choice for each key
 */
console.log(`******01******`);
const profileData = {
  firstName: "Jess",
  lastName: "Smith",
  age: 30,
  city: "Berlin",
  details() {
    return `${this.firstName} ${this.lastName} is ${this.age} years old and lives in ${this.city}`;
  },
};

/* 
## Task 2 - Object method
* Add a new property to the `profileData` object called `details`. This property is a method that returns a string describing the user like in the example below:
    ```javascript
    console.log(profileData.details());
    ```
    **Expected Output**: 
    ```plaintext
    Jess Smith is 30 year old and lives in Berlin
    ``` */
console.log(`******02******`);
console.log(profileData.details());
/* 
## Task 3 - Word Converter
* Create a function called `wordConverter`
* The function has two parameters:
   * `words`: an array of words 
   * `suffix`: a string
* Inside the function, use an array method to add the `suffix` to the end of all the words in the array
* **Important**: Do **not** use a a `for` loop to complete this task
* Look at the expected output below. 

    **Example**
    ```javascript
    let adjectives = ["smart", "kind", "sweet", "small", "clear"];
    ```
    Call your function and print the returned value to the console.

    **Expected output**
    ```javascript
    > console.log(wordConverter(adjectives, "er"));
    [ 'smarter', 'kinder', 'sweeter', 'smaller', 'clearer' ]
    ``` */
console.log(`******3******`);
let adjectives = ["smart", "kind", "sweet", "small", "clear"];
const wordConverter = function (words, suffix) {
  const newArr = words.map((el) => el + suffix);
  return newArr;
};
console.log(wordConverter(adjectives, "er"));
/* 
## Task 4 - Hour Calculation
* Create a function called `calculateHours`
* the function has one parameter:
   * `hours`: an array of objects containing a day, start and end hour, describing the working hours of a single person (see example below)
* the function calculates and returns how many hours (total) this person worked in the week based on the items in the given array
* **Note**: Assume that start is always morning time, end is always afternoon. (No overnight shifts to be expected) 

    **Example array of Working Hours**
    ```javascript
    const hourTracking = [
        { day: 'Monday', start: 8, end: 17},
        { day: 'Tuesday', start: 9, end: 15},
        { day: 'Wednesday', start: 10, end: 18},
        { day: 'Thursday', start: 7, end: 14},
        { day: 'Friday', start: 6, end: 12},
    ];
    ```
    Call your function and print the return value to the console.

    **Expected Output**
    ```javascript
    > console.log(calculateHours(hourTracking));
    36
    ``` */
console.log(`******4******`);
const hourTracking = [
  { day: "Monday", start: 8, end: 17 },
  { day: "Tuesday", start: 9, end: 15 },
  { day: "Wednesday", start: 10, end: 18 },
  { day: "Thursday", start: 7, end: 14 },
  { day: "Friday", start: 6, end: 12 },
];
const calculateHours = function (hours) {
  const result = hours
    .map((el) => el.end - el.start)
    .reduce((acc, entry) => acc + entry);
  return result;
};
console.log(calculateHours(hourTracking));
/* 
## Task 5 - Classes
* Create a class called `Course` to represent a course at DCI
* Add a constructor to initialize the properties in the given order.
* Class properties: 
    * `teacher`: a string with the name of the teacher
    * `type`: a string to specify the type of the course. For example, `"web development"`
    * `number`: a number to specify how many students are taking the course
* Class methods:
    * `spaceNeeded()`: calculates and returns a number how big a classroom should be depending on the number of students taking the course and returns that value. Assume that for each student `2m²` are necessary.
      * For example:
         * for a class of 10 students the return value would be `20`
         * for a class of 25 students, the return value would be `50`    
    * `details()`: returns a string describing the course, for example: `"This is a web development course taught by John Smith. There are 10 students taking the course."` 
        * fill in the `teacher`, `type` and `number` from your class properties. 

* Create an instance of your class, and test the different methods printing their result to the console

    **Example: for an instance with teacher John, type web development and a number of 22 students**
    ```plaintext
    > console.log(course.spaceNeeded());
    44

    > console.log(course.details());
    This is a web development course taught by John. There are 22 students taking the course.
    ``` */
console.log(`******5******`);
class Course {
  constructor(teacher, type, number) {
    this.teacher = teacher;
    this.type = type;
    this.number = number;
  }
  spaceNeeded() {
    return this.number * 2;
  }
  details() {
    return `This is a ${this.type} course taught by ${this.teacher}. There are ${this.number} students taking the course.`;
  }
}

const course = new Course("John", "web development", 22);
console.log(course.spaceNeeded());
console.log(course.details());
/* 
## Task 6 - Input validation
* A PIN is a **P**ersonal **I**dentification **N**umber (as you are used with bank cards and unlocking your mobile phone)
* Create the function `validPin`
* The function should return `true` or `false` if the PIN satisfies all the requirements below or not: 

    **Requirements**:
    * The pin code must consist of only numerical digits
    * The pin code must be 4 digits long
    * The pin code's last digit should be even (0, 2, 4, 6, 8)
    * The first digit of the pin code should be different from the last one

* The function should return:
   * `true`: if the PIN code satisfies all the requirements
   * `false`: if even a single requirement is not satisfied

* Call your function with some examples, and print the return values to the console

    **Examples**
    ```javascript
    > console.log(validPin("1234"));
    true
    > console.log(validPin("1235"));// last number should be even
    false 
    > console.log(validPin("12ww"));// should only consist of numbers
    false 
    > console.log(validPin("12345"));// should be 4 digits, not 5
    false 
    > console.log(validPin("2222"));// first and last digits should be different
    false 
    > console.log(validPin("2224"));
    true 
    ``` */
console.log(`******6******`);

const validPin = function (str) {
  if (
    !isNaN(str) &&
    str.length == 4 &&
    str.slice(-1) % 2 === 0 &&
    str.charAt(0) !== str.slice(-1)
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(validPin("1234"));
console.log(validPin("1235"));
console.log(validPin("12ww"));
console.log(validPin("12345"));
console.log(validPin("2222"));
console.log(validPin("2224"));
