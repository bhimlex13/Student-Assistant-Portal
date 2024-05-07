// This is the data for the quiz questions, answers, and choices
var quizData = [
  {
    "question": "These are the symbols that represent a specific mathematical or logical processing in programming.",
    "answer": "Operators",
    "choices": [
      "Operators",
      "Variables",
      "Data Types",
      "Keywords"
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "These are the some of the operators used in C# EXCEPT ONE.",
    "answer": "Traffic Operators",
    "choices": [
      "Traffic Operators",
      "Artihmetic Operators",
      "Logical Operators",
      "Relational Operators"
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "These are operators used in performing mathematical operations on numerical values.",
    "answer": "Arithmetic Operators",
    "choices": [
      "Arithmetic Operators",
      "Relational Operators",
      "Logical Operators",
      "Assignment Operators"
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "These are operators that is used to determine the relationship between operands of numeric values and generate a decision on that base. They return either a true or false.",
    "answer": "Relational Operators",
    "choices": [
      "Arithmetic Operators",
      "Relational Operators",
      "Logical Operators",
      "Assignment Operators"
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "These are operators that is used to perform logical operations that operate on logical expressions and return a boolean value.",
    "answer": "Logical Operators",
    "choices": [
      "Arithmetic Operators",
      "Relational Operators",
      "Logical Operators",
      "Assignment Operators"
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "These are operators used to assign a value or the result of an expression to a variable.",
    "answer": "Assignment Operators",
    "choices": [
      "Arithmetic Operators",
      "Relational Operators",
      "Logical Operators",
      "Assignment Operators"
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This is a combination of operands/variables and operators that can be evaluated to a single value.",
    "answer": "Expression",
    "choices": [
      "Expression",
      "Operators",
      "Constants",
      "Variable"
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "If all operands in an expression are integers, the expression evaluates to an integer value.",
    "answer": "THE STATEMENT IS TRUE ",
    "choices": [
      "THE STATEMENT IS TRUE ",
      "THE STATEMENT IS FALSE "
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "If an expression contains a floating-point value, it evaluates to a floating-point value.",
    "answer": "THE STATEMENT IS TRUE ",
    "choices": [
      "THE STATEMENT IS TRUE ",
      "THE STATEMENT IS FALSE "
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Evaluate the following expression: <br> int x = 10 + 5 * 2;",
    "answer": "The answer is 20",
    "choices": [
      "The answer is 20.0",
      "The answer is 20",
      "The answer is twenty",
      "The answer is 20.00"
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Evaluate the following expression: <br> int x = 10 + 5 * 2.0;",
    "answer": "The answer is 20.0",
    "choices": [
      "The answer is 20.0",
      "The answer is 20",
      "The answer is twenty",
      "The answer is 20.00"
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Evaluate the following expression: <br> int b = 5; <br> b++;",
    "answer": "The answer is 6",
    "choices": [
      "The answer is 6",
      "The answer is 6.0",
      "The answer is six",
      "Syntax error"
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Evaluate the following expression: int a = 2, b = 5; <br> b += a;",
    "answer": "The answer is 7",
    "choices": [
      "The answer is 7",
      "The answer is 7.0",
      "The answer is seven",
      "Syntax error"
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Evaluate the following expression: <br> bool A = true, B = false; <br> A && B;",
    "answer": "The answer is false",
    "choices": [
      "The answer is false",
      "The answer is true",
      "The answer is neither",
      "Syntax error"
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Evaluate the following expression: <br> bool A = true, B = false; <br> A || !B;",
    "answer": "The answer is true",
    "choices": [
      "The answer is false",
      "The answer is true",
      "The answer is neither",
      "Syntax error"
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Evaluate the following expression: <br> int a = 11, b = 5; <br> a < b;",
    "answer": "The answer is false",
    "choices": [
      "The answer is false",
      "The answer is true",
      "The answer is neither",
      "Syntax error"
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Evaluate the following expression: <br> int a = 11, b = 5; <br> a & b;",
    "answer": "Syntax error",
    "choices": [
      "The answer is false",
      "The answer is true",
      "The answer is neither",
      "Syntax error"
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Evaluate the following expression: <br> int age = 20; <br> bool aboveAge; <br> aboveAge = (age > 18) && ((10 + 2) != age);",
    "answer": "The answer is true",
    "choices": [
      "The answer is false",
      "The answer is true",
      "The answer is neither",
      "Syntax error"
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Evaluate the following expression: int a = 20, b = 5; <br> a = b;",
    "answer": "The answer is 5",
    "choices": [
      "The answer is 5",
      "The answer is 20",
      "The answer is 25",
      "Syntax error"
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Evaluate the following expression: int a = 2, b = 5; <br> b /= a;",
    "answer": "The answer is 2",
    "choices": [
      "The answer is 2",
      "The answer is 2.5",
      "The answer is 10",
      "Syntax error"
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Evaluate the following expression: int a = 11, b = 5; <br> a % b;",
    "answer": "The answer is 1",
    "choices": [
      "The answer is 1",
      "The answer is 0",
      "The answer is 16",
      "Syntax error"
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This is the class that includes several methods that perform a variety of calculations that can be used in a program.",
    "answer": "System.Math",
    "choices": [
      "System.Math",
      "System.Class.Math",
      "System.Util",
      "Math"
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This Math class method raises a number to the given power.",
    "answer": "Pow()",
    "choices": [
      "Pow()",
      "Exp()",
      "Log()",
      "Sqrt()"
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This Math class method raises the constant e to the given power.",
    "answer": "Exp()",
    "choices": [
      "Pow()",
      "Exp()",
      "Log()",
      "Sqrt()"
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This Math class method returns the natural and 10-based logarithm respectively.",
    "answer": "Log()",
    "choices": [
      "Pow()",
      "Exp()",
      "Log()",
      "Sqrt()"
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This Math class method returns the square root of the given number.",
    "answer": "Sqrt()",
    "choices": [
      "Pow()",
      "Exp()",
      "Log()",
      "Sqrt()"
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This Math class method returns the sign of the specified number.",
    "answer": "Sign()",
    "choices": [
      "Sign()",
      "Abs()",
      "Ceiling()",
      "Floor()"
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This Math class method returns the absolute value of a given number.",
    "answer": "Abs()",
    "choices": [
      "Sign()",
      "Abs()",
      "Ceiling()",
      "Floor()"
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This Math class method returns the smallest integral value larger than or equal to a fractional number.",
    "answer": "Ceiling()",
    "choices": [
      "Sign()",
      "Abs()",
      "Ceiling()",
      "Floor()"
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This Math class method returns the largest integral value smaller than or equal to the given fractional number.",
    "answer": "Floor()",
    "choices": [
      "Sign()",
      "Abs()",
      "Ceiling()",
      "Floor()"
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This Math class method returns the number after rounding it to the nearest integral value.",
    "answer": "Round()",
    "choices": [
      "Round()",
      "Truncate()",
      "Sin()",
      "Cos()"
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This Math class method returns the number after removing its fractional part.",
    "answer": "Truncate()",
    "choices": [
      "Round()",
      "Truncate()",
      "Sin()",
      "Cos()"
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This Math class method returns the sine of the specified angle.",
    "answer": "Sin()",
    "choices": [
      "Round()",
      "Truncate()",
      "Sin()",
      "Cos()"
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This Math class method returns the cosine of the specified angle.",
    "answer": "Cos()",
    "choices": [
      "Round()",
      "Truncate()",
      "Sin()",
      "Cos()"
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This Math class method returns the tangent of the specified angle.",
    "answer": "Tan()",
    "choices": [
      "Round()",
      "Sin()",
      "Cos()",
      "Tan()"
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "The Math class methods are static methods, which means they are used with the class name without instantiating an object.",
    "answer": "THE STATEMENT IS TRUE ",
    "choices": [
      "THE STATEMENT IS TRUE ",
      "THE STATEMENT IS FALSE "
    ],
    "reference": "03 Handout 1",
    "term": "Prelim"
  }
]