const questions = [
  {
    question: 'Which type of JavaScript language is ___',
    choices: ['Object-Oriented', 'Object-Based', 'Assembly-language', 'High-level'],
    correct: 2,
    desc: ' JavaScript is not a pure object oriented programming based languages such as PHP,java or many other languages, although it is an object-based language. It is not based language, because it does not have three basic properties of object-oriented programming languages, such as polymorphism, encapsulation, and inheritance.',
    image: 'None',
  },
  {
    question: 'The "function" and " var" are known as:',
    choices: [
      'Keywords',
      'Data types',
      'Declaration statements',
      'Prototypes',
    ],
    correct: 3,
    desc: 'The "function" and "var" both are the Declaration statements. These both are used for defining, and declaring variable, function in anywhere in the program.',
    image: 'None',
  },
  {
    question: "Which of the following givenfunctions of the Number Object formats a number with a different number of digits to the right of the decimal?",
    choices: ['toExponential()', 'toFixed()', 'toPrecision()', 'toLocaleString()'],
    correct: 2,
    desc:
      'The "tofixed()" method formats the given number with a specific number of digits to the right of the decimal.',
    image: 'None',
  },
  {
    question: 'Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters?',
    choices: ['slice()', 'split()', 'substr()', 'search()'],
    correct: 3,
    desc:
      "The method ' Subtr()'in the javascript is used to return the characters in the string starting at the specified position via the specified number of the characters.",
    image: 'None',
  },
  {
    question: 'Choose the correct snippet from the following to check if the variable "a" is not equal the "NULL"',
    choices: ['if(a!==null)', 'if (a!)', 'if(a!null)', 'if(a!=null)'],
    correct: 1,
    desc: 'The "==" is only true if the type and the content of both operands are the same. The "==" is also one of the common abstracts used for comparing two operands to check whether they are equal or not but it will notcheck the data type of the variables. So, the "! ==" operator is known as "non-equal", which is used in our case, to compare 0 to NULL. It obtains the output either as true or false that totally depends on the given conditions.',
    image: 'None',
  },
  {
    question: 'In JavaScript, what will be used for calling the function definition expression:',
    choices: [
      'Function prototype',
      'Function literal',
      'Function calling',
      'Function declaration',
    ],
    correct: 2,
    desc:
      'A function definition expression is a kind of "function literal" just like as the object initializer is a kind of "object literal". The function definition expression (or we can say a function literal) consists of the keyword Function, followed by the set of identifiers(or parameters names) that are separated by commas inside the parenthesis, and a small block of JavaScript code(which we normally called function body/definition) enclosed in the curly braces.',
    image: 'None',
  },
  {
    question: 'The "new Point(3,2)", is a kind of _______ expression',
    choices: ['Object Creation Expression', 'Primary Expression', 'Invocation Expression', 'Constructor Calling Expression'],
    correct: 1,
    desc:
      ' The object creation expression creates a new object and also invokes a method called constructor in order to initialize the properties of that object. The object creation expressions are just like the invocation expressions except that they prefixed with a keyword commonly known as New.',
    image: 'None',
  },
  {
    question: "Which one of the following operator is used to check weather a specific property exists or not:",
    choices: ['Exists', 'exist', 'within', 'in'],
    correct: 4,
    desc:
      'In JavaScript, the "in" operator is used to check if a specific property exists. The "in" operator is commonly used in looping statements to traverse array and objects as well.',
    image: 'None',
  },
  {
    question: ' Which one of the following is an ternary operator:',
    choices: ['?', ':', '-', '+'],
    correct: 1,
    desc:
      'In JavaScript, only one ternary operator is supported, known as the conditional operator, which combines three different expressions into one expression. However, the conditional operator can also be used in place of the "if else" statements as well.',
    image: 'None',
  },
 
];
export default questions;