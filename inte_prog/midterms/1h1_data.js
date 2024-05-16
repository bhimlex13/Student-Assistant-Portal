// This is the data for the quiz questions, answers, and choices
var quizData = [
  {
    "question": "What are used to execute particular statements whether the value of the condition evaluates to true or false?",
    "answer": "Selection statements",
    "choices": [
      "Selection statements",
      "Looping statements",
      "String statements",
      "Array statements"
    ],
    "reference": "04 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What are used to alter the flow of the program where a certain block of statements is executed based on the evaluation of the condition set?",
    "answer": "Selection statements",
    "choices": [
      "Selection statements",
      "Looping statements",
      "String statements",
      "Array statements"
    ],
    "reference": "04 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "Which of the selection statements execute a block of code based on the variable tested for equality against a list of values?",
    "answer": "Switch statement",
    "choices": [
      "Switch statement",
      "If statement",
      "If... else statement"
    ],
    "reference": "04 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "Which of the selection statements execute a block of code based on a logical expression and provide a one-way selection?",
    "answer": "If statement",
    "choices": [
      "Switch statement",
      "If statement",
      "If... else statement"
    ],
    "reference": "04 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "Which of the selection statements execute a block of ode based on a logical expression and provide a two- or more ways of selection?",
    "answer": "If... else statement",
    "choices": [
      "Switch statement",
      "If statement",
      "If... else statement"
    ],
    "reference": "04 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What statement instructs the program to execute a certain block of statements only if a particular evaluates to true?",
    "answer": "If",
    "choices": [
      "If",
      "Else",
      "Else if"
    ],
    "reference": "04 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What statement instructs the program to execute the block of statements inside it only if the condition in the if statement returns false?",
    "answer": "Else",
    "choices": [
      "If",
      "Else",
      "Else if"
    ],
    "reference": "04 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What statement is used to combine multiple conditions into a single selection structure?",
    "answer": "Else if",
    "choices": [
      "If",
      "Else",
      "Else if"
    ],
    "reference": "04 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What statement is used to execute the block of statements inside it only if the condition in the if statement returns false, but the condition inside it returns true?",
    "answer": "Else if",
    "choices": [
      "If",
      "Else",
      "Else if"
    ],
    "reference": "04 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What is the output of the following code:<pre><br>int exam_score = 75;<br>if(exam_score >= 60){<br> Console.WriteLine(\"Pasado ka!\");<br>} else {<br> Console.WriteLine(\"Bagsak ka!\");<br>}</pre>",
    "answer": "Pasado ka!",
    "choices": [
      "Pasado ka!",
      "Bagsak ka!"
    ],
    "reference": "04 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What is the output of the following code: <pre><br> int exam_score = 75;<br>if (exam_score >= 90) {<br> Console.WriteLine(\"Congrats! Di ka papaluin ni mamshie!\");<br>} else if (exam_score >= 80) { <br> Console.WriteLine(\"Congrats! Do your best to improve better! Pero wala kang baon kay mamshie!\");<br>} else if (exam_score >= 70) {<br> Console.WriteLine(\"Congrats! Dahil sa kakaselpon mo meron kang freebie na sapak kay mamshie!\");<br>} else if (exam_score >= 60) { <br> Console.WriteLine(\"Congrats! Isinabuhay mo ang kasabihang from the top, make it drop--out ka na daw sabi ni mamshie!\");<br>} else {<br> Console.WriteLine(\"Congrats! Grado mo daw is F, as in Falagi ka nalang bagsak what if ibagsak ka daw mula second floor sabi ni mamshie!\");<br>}</pre>",
    "answer": "Congrats! Dahil sa kakaselpon mo meron kang freebie na sapak kay mamshie!",
    "choices": [
      "Congrats! Dahil sa kakaselpon mo meron kang freebie na sapak kay mamshie!",
      "Congrats! Isinabuhay mo ang kasabihang from the top, make it drop--out ka na daw sabi ni mamshie!",
      "\"Congrats! Grado mo daw is F, as in Falagi ka nalang bagsak what if ibagsak ka daw mula second floor sabi ni mamshie!\"",
      "Congrats! Do your best to improve better! Pero wala kang baon kay mamshie!"
    ],
    "reference": "04 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What is the output of the following code: <pre><br>int exam_score = 75;<br>if(exam_score > 95){ <br> Console.WriteLine(\"Wow! You're an amazing student! Edi ikaw na magaling\");<br>} else if (exam_score < 95 && exam_score > 50) {<br> Console.WriteLine(\"Average man tayong tao at least wala tayong tinatapakang tao\");<br>} else if (exam_score < 50) {<br> Console.WriteLine(\"Ano? Keri pa ba besh?\");<br>}</pre>",
    "answer": "Average man tayong tao at least wala tayong tinatapakang tao",
    "choices": [
      "Average man tayong tao at least wala tayong tinatapakang tao",
      "Wow! You're an amazing student! Edi ikaw na magaling",
      "Ano? Keri pa ba besh?"
    ],
    "reference": "04 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "The value of the case labels must be the same data type as the variable being tested in the switch statement.",
    "answer": "The statement is TRUE .",
    "choices": [
      "The statement is TRUE .",
      "The statement is FALSE ."
    ],
    "reference": "04 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "Each case label must contain the break statement to stop the flow control of the switch statement if the specified value of the variable matches the value in the case label?",
    "answer": "The statement is TRUE .",
    "choices": [
      "The statement is TRUE .",
      "The statement is FALSE ."
    ],
    "reference": "04 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "The break statement can only terminate the process of a switch statement or any repetition structure or looping statements in which it appears.",
    "answer": "The statement is TRUE .",
    "choices": [
      "The statement is TRUE .",
      "The statement is FALSE ."
    ],
    "reference": "04 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "The switch statement is required to have a default statement that appears at the end of the switch statement.",
    "answer": "The statement is FALSE .",
    "choices": [
      "The statement is TRUE .",
      "The statement is FALSE ."
    ],
    "reference": "04 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "The default may or may not contain a break statement.",
    "answer": "The statement is FALSE .",
    "choices": [
      "The statement is TRUE .",
      "The statement is FALSE ."
    ],
    "reference": "04 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "The default statement execute the block of code inside it when none of the cases specifie above matches the value of the specified variable.",
    "answer": "The statement is TRUE .",
    "choices": [
      "The statement is TRUE .",
      "The statement is FALSE ."
    ],
    "reference": "04 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What is the output of the following code: <pre><br>int weekNumber = 8;<br>switch (weekNumber){<br> case 1:<br> Console.WriteLine(\"Monday\");<br> break;<br> case 2:<br> Console.WriteLine(\"Tuesday\");<br> break;<br> case 3:<br> Console.WriteLine(\"Wednesday\");<br> break;<br> case 4:<br> Console.WriteLine(\"Thursday\");<br> break;<br> case 5:<br> Console.WriteLine(\"Friday\");<br> break;<br> case 6:<br> Console.WriteLine(\"Saturday\");<br> break;<br> case 7:<br> Console.WriteLine(\"Sunday\");<br> break;<br> default:<br> Console.WriteLine(\"Invalid number of day.\");<br> break;<br>}</pre>",
    "answer": "Invalid number of day.",
    "choices": [
      "Invalid number of day.",
      "Sunday",
      "Saturday",
      "Holiday"
    ],
    "reference": "04 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What is the other term for a conditional operator?",
    "answer": "Ternary operator",
    "choices": [
      "Ternary operator",
      "Decisional operator",
      "Alternative operator",
      "Truth operator"
    ],
    "reference": "04 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "It is a special type of decision-making oeprator used to perform an operation that evaluates a logical expression then selects betwen 2 siingle statements depending on the truth value of the evaluated variable.",
    "answer": "Ternary operator",
    "choices": [
      "Ternary operator",
      "Decisional operator",
      "Alternative operator",
      "Truth operator"
    ],
    "reference": "04 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What is the general syntax of a ternary operator?",
    "answer": "condition ? consequence : alternative",
    "choices": [
      "condition ? consequence : alternative",
      "consequence : alternative ? condition",
      "alternative : consequence ? condition",
      "condition ? alternative : consequence"
    ],
    "reference": "04 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "The ternary operator doesn't execute a statement but returns a value that can be assigned to a variable.",
    "answer": "The statement is TRUE .",
    "choices": [
      "The statement is TRUE .",
      "The statement is FALSE ."
    ],
    "reference": "04 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What is the output of the following code:<br>int sum = 4 > 2 ? 4 + 2 : 4 - 2;",
    "answer": 6,
    "choices": [
      6,
      2,
      3,
      4
    ],
    "reference": "04 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "The data types of the values in consequence and alternative of a ternary operator must match the data type of the variable it is assigned to.",
    "answer": "The statement is TRUE .",
    "choices": [
      "The statement is TRUE .",
      "The statement is FALSE ."
    ],
    "reference": "04 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What is the output of the following code:<br>int exam_score = 75;<br>string result = exam_score > = 60 ? \"Pasado!\" : \"Bagsak!\";<br>Console.WriteLine(result);",
    "answer": "Pasado!",
    "choices": [
      "Pasado!",
      "Bagsak!"
    ],
    "reference": "04 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "The ternary operator is used as an alternative to if... else statements that contains a single statement body.",
    "answer": "The statement is TRUE .",
    "choices": [
      "The statement is TRUE .",
      "The statement is FALSE ."
    ],
    "reference": "04 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What is the general syntax of an if... else statement?",
    "answer": "<pre> \r\nif (condition){<br> // Code block<br>} \r\n</pre>",
    "choices": [
      "<pre> \r\nif (condition){<br> // Code block<br>} else {<br> //Code block<br>} \r\n</pre>",
      "<pre> \r\nif (condition){<br> // Code block<br>} else if (condition) {<br> //Code block<br>} \r\n</pre>",
      "switch (variable_to_be_evaluated) {<br> \r\ncase value_1:<br> \r\n// Code block<br> \r\nbreak;<br> \r\n.<br> \r\n.<br> \r\n.<br> \r\ndefault:<br> \r\n// Code block<br> \r\nbreak;<br> \r\n}<br>",
      "condition ? consequence : alternative"
    ],
    "reference": "04 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What is the general syntax of an if... else if... statement?",
    "answer": "<pre> \r\nif (condition){<br> // Code block<br>} else if (condition) {<br> //Code block<br>} \r\n</pre>",
    "choices": [
      "<pre> \r\nif (condition){<br> // Code block<br>} else {<br> //Code block<br>} \r\n</pre>",
      "<pre> \r\nif (condition){<br> // Code block<br>} else if (condition) {<br> //Code block<br>} \r\n</pre>",
      "switch (variable_to_be_evaluated) {<br> \r\ncase value_1:<br> \r\n// Code block<br> \r\nbreak;<br> \r\n.<br> \r\n.<br> \r\n.<br> \r\ndefault:<br> \r\n// Code block<br> \r\nbreak;<br> \r\n}<br>",
      "condition ? consequence : alternative"
    ],
    "reference": "04 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What is the general syntax of a switch statement?",
    "answer": "switch (variable_to_be_evaluated) {<br> \r\ncase value_1:<br> \r\n// Code block<br> \r\nbreak;<br> \r\n.<br> \r\n.<br> \r\n.<br> \r\ndefault:<br> \r\n// Code block<br> \r\nbreak;<br> \r\n}<br>",
    "choices": [
      "<pre> \r\nif (condition){<br> // Code block<br>} else {<br> //Code block<br>} \r\n</pre>",
      "<pre> \r\nif (condition){<br> // Code block<br>} else if (condition) {<br> //Code block<br>} \r\n</pre>",
      "switch (variable_to_be_evaluated) {<br> \r\ncase value_1:<br> \r\n// Code block<br> \r\nbreak;<br> \r\n.<br> \r\n.<br> \r\n.<br> \r\ndefault:<br> \r\n// Code block<br> \r\nbreak;<br> \r\n}<br>",
      "condition ? consequence : alternative"
    ],
    "reference": "04 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What is a construct that enables a program to execute a code block or a body repetititvely as long as the defined conditions returns true.",
    "answer": "Looping statements",
    "choices": [
      "Selection statements",
      "Looping statements",
      "String statements",
      "Array statements"
    ],
    "reference": "05 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "Which of the looping structures evaluates the condition first, before executing the loop body (given that the condition is true)?",
    "answer": "While loop",
    "choices": [
      "While loop",
      "Do... while loop",
      "For loop"
    ],
    "reference": "05 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "Which of the looping structures executes the loop body first, before evaluating the condition?",
    "answer": "Do... while loop",
    "choices": [
      "While loop",
      "Do... while loop",
      "For loop"
    ],
    "reference": "05 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "Which of the looping structures executes the loop body a specific number of times?",
    "answer": "For loop",
    "choices": [
      "While loop",
      "Do... while loop",
      "For loop"
    ],
    "reference": "05 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "Which of the looping structure has a counter-controlled-repetition statement combined in one line?",
    "answer": "For loop",
    "choices": [
      "While loop",
      "Do... while loop",
      "For loop"
    ],
    "reference": "05 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What is the general syntax of a while loop?",
    "answer": "<pre>while (condition){<br>\r\n// Code block<br>\r\n}\r\n</pre>",
    "choices": [
      "<pre>while (condition){<br> // Code block<br> } </pre>",
      "<pre> \r\ndo{<br> \r\n// Code block<br> \r\n} while (condition); \r\n</pre>",
      "<pre> \r\nfor(initialization; condition; update){<br> \r\n// Code block<br> \r\n} \r\n</pre>"
    ],
    "reference": "05 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What is the general syntax of a do... while loop?",
    "answer": "<pre> \r\ndo{<br> \r\n// Code block<br> \r\n} while (condition); \r\n</pre>",
    "choices": [
      "<pre>while (condition){<br> // Code block<br> } </pre>",
      "<pre> \r\ndo{<br> \r\n// Code block<br> \r\n} while (condition); \r\n</pre>",
      "<pre> \r\nfor(initialization; condition; update){<br> \r\n// Code block<br> \r\n} \r\n</pre>"
    ],
    "reference": "05 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What is the general syntax of a for loop?",
    "answer": "<pre> \r\nfor(initialization; condition; update){<br> \r\n// Code block<br> \r\n} \r\n</pre>",
    "choices": [
      "<pre>while (condition){<br> // Code block<br> } </pre>",
      "<pre> \r\ndo{<br> \r\n// Code block<br> \r\n} while (condition); \r\n</pre>",
      "<pre> \r\nfor(initialization; condition; update){<br> \r\n// Code block<br> \r\n} \r\n</pre>"
    ],
    "reference": "05 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What is the output of the following code:<br> \r\n<pre> \r\nint start = 1;<br> \r\nwhile (start <= 10){<br> \r\nConsole.WriteLine(start);<br> \r\nstart++;<br> \r\n} \r\n</pre>",
    "answer": "1<br>2<br>3<br>4<br>5<br>6<br>7<r>8<br>9<br>10",
    "choices": [
      "1<br>2<br>3<br>4<br>5<br>6<br>7<r>8<br>9<br>10",
      "2<br>3<br>4<br>5<br>6<br>7<r>8<br>9<br>10",
      "1<br>2<br>3<br>4<br>5<br>6<br>7<r>8<br>9",
      "2<br>3<br>4<br>5<br>6<br>7<r>8<br>9"
    ],
    "reference": "05 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What is the output of the following code:<br>\r\n<pre>\r\nConsole.WriteLine(\"Amerika-ya!\");<br>\r\nfor(int a = 1; a != 10; a++){<br>\r\nConsole.WriteLine(\"Hallo!\");<br>\r\n}<br></pre>",
    "answer": "Amerika-ya!<br> \r\nHallo!<br> \r\nHallo!<br> \r\nHallo!<br> \r\nHallo!<br> \r\nHallo!<br> \r\nHallo!<br> \r\nHallo!<br> \r\nHallo!<br> \r\nHallo!<br>",
    "choices": [
      "Amerika-ya!<br> \r\nHallo!<br> \r\nHallo!<br> \r\nHallo!<br> \r\nHallo!<br> \r\nHallo!<br> \r\nHallo!<br> \r\nHallo!<br> \r\nHallo!<br> \r\nHallo!<br>",
      "Amerika-ya!<br>\r\nHallo!<br>\r\nHallo!<br>\r\nHallo!<br>\r\nHallo!<br>\r\nHallo!<br>\r\nHallo!<br>\r\nHallo!<br>\r\nHallo!<br>\r\nHallo!<br>\r\nHallo!<br>",
      "Amerika-ya!<br>\r\nHallo!<br>\r\nHallo!<br>\r\nHallo!<br>\r\nHallo!<br>\r\nHallo!<br>\r\nHallo!<br>\r\nHallo!<br>\r\nHallo!<br>",
      "Compilation error"
    ],
    "reference": "05 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What are statements that is used to change the flow of control of a looping structure?",
    "answer": "Jump statements",
    "choices": [
      "Jump statements",
      "Looping statements",
      "Decision statements",
      "Variable statements"
    ],
    "reference": "05 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "Which of the following is not an example of a jump statement?",
    "answer": "stop",
    "choices": [
      "stop",
      "break",
      "continue"
    ],
    "reference": "05 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "Which of the following jump statement terminates a loop or switch statement and transfers the flow of program executions to the statement following the enclosing loop or switch statement.",
    "answer": "break",
    "choices": [
      "break",
      "continue"
    ],
    "reference": "05 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "Which of the following statement is used to skip the remaining statements in the loop body and immediately reevaluates the condition if it's a while or do-whle loop; or it jumps to the update step if it's a for loop.",
    "answer": "continue",
    "choices": [
      "break",
      "continue"
    ],
    "reference": "05 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What is the output of the following code:<br> \r\n<pre> \r\nfor (int num = 1; num <= 10; num++){<br> if(num == 5){<br> break;<br> }<br> Console,Write(num + \" \");<br>} \r\n</pre>",
    "answer": "1 2 3 4",
    "choices": [
      "1 2 3 4",
      "1 2 3 4 5",
      "1 2 3 4 5 6 7 8 9 10",
      "Compilation error"
    ],
    "reference": "05 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What is the output of the following code:<br> \r\n<pre> \r\nfor (int num = 1; num <= 10; num++){<br> if(num == 5 || num == 6){<br> continue;<br> }<br> Console.Write(numm + \"\");<br>} \r\n</pre>",
    "answer": "1 2 3 4 7 8 9 10",
    "choices": [
      "1 2 3 4 7 8 9 10",
      "1 2 3 4 5 6 7 8 9 10",
      "1 2 3 4 7 8 9 10",
      "Compilation error"
    ],
    "reference": "05 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "When implementing break or continue statements, they must be within a conditional statement, such as an if... else statement.",
    "answer": "The statement is TRUE .",
    "choices": [
      "The statement is TRUE .",
      "The statement is FALSE ."
    ],
    "reference": "05 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What is a set of fixed number of values called elements that can be accessed using integer index?",
    "answer": "Arrays",
    "choices": [
      "Arrays",
      "Lists",
      "ArrayLists",
      "Banana"
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "Elements on an array can differ on data types.",
    "answer": "The statement is FALSE .",
    "choices": [
      "The statement is TRUE .",
      "The statement is FALSE ."
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What is an array in which all elements are arranged like a list?",
    "answer": "One-Dimensional Array",
    "choices": [
      "One-Dimensional Array",
      "Two-Diimensional Array"
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "Arrays are implemented as objects in C#.",
    "answer": "The statement is TRUE .",
    "choices": [
      "The statement is TRUE .",
      "The statement is FALSE ."
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What is the general syntax for implementing a one-dimensional array?",
    "answer": "data_type[] array_name = new data_type[array_size];",
    "choices": [
      "data_type[] array_name = new data_type[array_size];",
      "data_type array_name[] = new data_type[array_size];",
      "data_type array_name[array_size] = new data_type();",
      "data_type[array_size] array_name = new data_type();"
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "The client wants you to initialize an array named Grades with double data type with the following values:<br>2.50, 2.75, 1.25, 5.0, 1.50<br><br>How do you initialize the array upon declaration?",
    "answer": "double[] Grades = {2.50, 2.75, 1.25, 5.0, 1.50};",
    "choices": [
      "double[] Grades = {2.50, 2.75, 1.25, 5.0, 1.50};",
      "double[] grades = {2.50, 2.75, 1.25, 5.0, 1.50};",
      "double Grades ={};",
      "double[] Grades = new double[5];"
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "The following array is initialized:<br>double[] Grades = {2.50, 2.75, 1.25, 5.0, 1.50};<br><br>The client wants you to print 1.25 in the console.<br>How will you do this?",
    "answer": "Console.Write(Grades[2]);",
    "choices": [
      "Console.Write(Grades[2]);",
      "Console.Write(Grades[1]);",
      "Console.Write(Grades[0]);",
      "Console.Write(Grades[1.25]);"
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What is the statement that is used to process the elements of an array starting with index 0 to the ending index?<br>This iterates through each item of the array.",
    "answer": "foreach statement",
    "choices": [
      "foreach statement",
      "for statement",
      "iterate statement",
      "Looping statement"
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "The following array is initialized:<br>double[] Grades = {2.50, 2.75, 1.25, 5.0, 1.50};<br><br>The client wants you to iterate through all the array elements and print them in the console.<br>How will you do this?",
    "answer": "<pre> \r\nforeach(double grade in grades){<br> Console.Write(grade);<br>} \r\n</pre>",
    "choices": [
      "<pre> \r\nforeach(double grade in grades){<br> Console.Write(grade);<br>} \r\n</pre>",
      "<pre> \r\nforeach(double grade of grades){<br> Console.Write(grade);<br>} \r\n</pre>",
      "<pre> \r\nforeach(double grade in grades){<br> Console.Write(grade[grades]);<br>} \r\n</pre>",
      "<pre> \r\nforeach(double grades in grade){<br> Console.Write(grade);<br>} \r\n</pre>"
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What is an array where its elements are arranged in rows and columns?",
    "answer": "Two-Diimensional Array",
    "choices": [
      "One-Dimensional Array",
      "Two-Diimensional Array"
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What is the general syntax for implementing a two-dimensional array?",
    "answer": "data_type[,] array_name = new data_type[row_size, col_size];",
    "choices": [
      "data_type[,] array_name = new data_type[row_size, col_size];",
      "data_type array_name[,] = new data_type[row_size, col_size];",
      "data_type array_name[row_size, col_size]= new data_type();",
      "data_type[row_size, col_size] array_name = new data_type();"
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "The client wants you to initialize a two-dimensional array named Taburu with data type int and 2 rows and 4 columns.<br>How will you do this?",
    "answer": "int[,] Taburu = new int[2, 4];",
    "choices": [
      "int[,] Taburu = new int[2, 4];",
      "int[,] taburu = new int[2, 4];",
      "int[2,4] Taburu = new int[,];",
      "int[2,4] taburu = new int[,];"
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "The client wants you to initialize a two-dimensional array named Taburu with data type int with 2 columns, 4 rows. <br>Column 1 has values 2, 12, 3, 18. Column 2 has values 3, 5 8, 3.<br><br>How will you initialize the array upon declaration?",
    "answer": "<pre> \r\nint[,] Taburu = {<br> {2, 3},<br> {12, 5},<br> {3, 8},<br> {18, 3},<br>}; \r\n</pre>",
    "choices": [
      "<pre> \r\nint[,] Taburu = {<br> {2, 3},<br> {12, 5},<br> {3, 8},<br> {18, 3},<br>}; \r\n</pre>",
      "<pre> \r\nint[,] Taburu = {<br> 2, 3, 12, 5, 3, 8, 18, 3<br>}; \r\n</pre>",
      "int[,] Taburu = new int[{2, 12, 3, 18}, {3, 5, 8, 3}];",
      "<pre> \r\nint[,] Taburu = {}; \r\n</pre>"
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "The following array is initialized:<br><pre> \r\nint[,] Taburu = {<br> {2, 3},<br> {12, 5},<br> {3, 8},<br> {18, 3},<br>}; \r\n</pre><br><br>The client wants you to print 18 from the array.<br>How will you do this?",
    "answer": "Console.WriteLine(Taburu[3,0]);",
    "choices": [
      "Console.WriteLine(Taburu[3,0]);",
      "Console.WriteLine(Taburu[18]);",
      "Console.WriteLine(Taburu[7]);",
      "Console.WriteLine(Taburu[4,1]);"
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What is the class that is a collection that behaves as a dynamic array where the array size can dynamicaly increase as required?",
    "answer": "ArrayList",
    "choices": [
      "ArrayList",
      "HashSet",
      "ArraySet",
      "✨Special List✨"
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "The ArrayList class is defined in the System.Collections namespace.",
    "answer": "The statement is TRUE .",
    "choices": [
      "The statement is TRUE .",
      "The statement is FALSE ."
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What is the general syntax for implementing an ArrayList?",
    "answer": "ArrayList name_of_list = new ArrayList();",
    "choices": [
      "ArrayList name_of_list = new ArrayList();",
      "ArrayList data_type name_of_list = new ArrayList{};",
      "ArrayList name_of_list = new ArrayList{};",
      "ArrayList name_of_list = new ArrayList{array_size};"
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "The namespace System.Collections must be declared first in order to use ArrayList.",
    "answer": "The statement is TRUE .",
    "choices": [
      "The statement is TRUE .",
      "The statement is FALSE ."
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "The client wants you to initialize an array whose size can dynamically increase named Foods.<br>How will you do this?",
    "answer": "ArrayList Foods = new ArrayList();",
    "choices": [
      "ArrayList Foods = new ArrayList();",
      "ArrayList Foods = new String();",
      "ArrayList Foods = {};",
      "ArrayList[] Foods = new ArrayList()[];"
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "The following array list is initialized:<br>ArrayList Foods = new ArrayList();<br><br>The client wants you to add the following on the ArrayList: DQ, Icecream, Banana, Chickenjoy<br>How will you do this?",
    "answer": "Foods.Add(\"DQ\");<br>Foods.Add(\"Icecream\");<br>Foods.Add(\"Banana\");<br>Foods.Add(\"Chickenjoy\");",
    "choices": [
      "Foods.Add(\"DQ\");<br>Foods.Add(\"Icecream\");<br>Foods.Add(\"Banana\");<br>Foods.Add(\"Chickenjoy\");",
      "Foods.Add(\"DQ\", \"Icecream\", \"Banana\", \"Chickenjoy\");",
      "Foods.Push(\"DQ\");<br>Foods.Push(\"Icecream\");<br>Foods.Push(\"Banana\");<br>Foods.Push(\"Chickenjoy\")/",
      "foods.Add(\"DQ\");<br>foods.Add(\"Icecream\");<br>foods.Add(\"Banana\");<br>foods.Add(\"Chickenjoy\");"
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "The following array list is initialized:<br>ArrayList Foods = new ArrayList();<br>Foods.Add(\"DQ\");<br>Foods.Add(\"Icecream\");<br>Foods.Add(\"Banana\");<br>Foods.Add(\"Chickenjoy\");<br><br>The client wants you to print \"Icecream\" from the ArrayList into the console. <br>How will you do this?",
    "answer": "Console.WriteLine(Foods[1]);",
    "choices": [
      "Console.WriteLine(Foods[1]);",
      "Console.WriteLine(Foods[2]);",
      "Console.WriteLine(Foods[Icecream]);",
      "Console.WriteLine(Foods[4]);"
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "The following array list is initialized:<br>ArrayList Foods = new ArrayList();<br>Foods.Add(\"DQ\");<br>Foods.Add(\"Icecream\");<br>Foods.Add(\"Banana\");<br>Foods.Add(\"Chickenjoy\");<br><br><br>The client wants you to print each element in the array list.<br>How will you do this?",
    "answer": "<pre> \r\nforeach (string Food in Foods){<br> Console.WriteLine(Food);<br>} \r\n</pre",
    "choices": [
      "<pre> \r\nforeach (string Food in Foods){<br> Console.WriteLine(Food);<br>} \r\n</pre",
      "<pre> \r\nforeach (string Foods in Food){<br> Console.WriteLine(Foods);<br>} \r\n</pre>",
      "<pre> \r\nforeach (string Foods in Foods){<br> Console.WriteLine(Foods);<br>} \r\n</pre>",
      "<pre> \r\nforeach (string Foods in Foods){<br> Console.WriteLine(in);<br>} \r\n</pre>"
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What is a sequential collection of characters that is used to represent text?",
    "answer": "String",
    "choices": [
      "String",
      "Words",
      "Array",
      "Word"
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "A string is an object of class string in the System namespace.",
    "answer": "The statement is TRUE .",
    "choices": [
      "The statement is TRUE .",
      "The statement is FALSE ."
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "A string variable can be initialized by directly asigning a string literal.",
    "answer": "The statement is TRUE .",
    "choices": [
      "The statement is TRUE .",
      "The statement is FALSE ."
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "A string variable can be initialized using the new keyword and calling the String class constructor.",
    "answer": "The statement is TRUE .",
    "choices": [
      "The statement is TRUE .",
      "The statement is FALSE ."
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What is the general syntax for implementing a string?",
    "answer": "string variable_name = string_literal",
    "choices": [
      "string variable_name = string_literal",
      "string string_name = string_name;",
      "string variable_name = string(string_variable);"
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "Given this code:<br>string strPath = @\"C:\\Documents\\Report.docx\";<br><br>What symbol is used to ignore the special use of backslashes in a string literal?",
    "answer": "@",
    "choices": [
      "@",
      "\\",
      "\"",
      "C:"
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "Given this code:<br>string strPath = @\"C:\\Documents\\Report.docx\";<br><br>What symbol is used to escape characters with special use?",
    "answer": "\\",
    "choices": [
      "@",
      "\\",
      "\"",
      "C:"
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "The client wants you to create a string out of this array:<br>char[] word = {'H', 'i', '!'};<br><br>How will you do this?",
    "answer": "string word_full = new string(word);",
    "choices": [
      "string word_full = new string(word);",
      "string word_full = word;",
      "string word_full = new string(words);",
      "string word = new string(word);"
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What is the output of the following code:<br>string word = \"Computer\";<br>char letter = word[2];<br>Console.Write(letter);",
    "answer": "m",
    "choices": [
      "m",
      "o",
      "C",
      "p"
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What is the output of the following code:<br>string word = \"Computer\";<br>int length = word.Length;<br>Console.Write(length);",
    "answer": 8,
    "choices": [
      8,
      7,
      9,
      10
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What String method returns a boolean value based on whether the string contains a specified substring?",
    "answer": "Contains()",
    "choices": [
      "Contains()",
      "IndexOf()",
      "Replace()",
      "Content()"
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What String method return a boolean value based on whether a specified substring has the same value with the string?",
    "answer": "Equals()",
    "choices": [
      "Equals()",
      "Contains(",
      "EqualTo()",
      "Same()"
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What String method returns the index position value of the first occurence of the specified character within the string object?",
    "answer": "IndexOf()",
    "choices": [
      "Contains()",
      "IndexOf()",
      "Replace()",
      "Same()"
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What String method returns a copy of the string object where all occurences of an old character are replaced with a new character?",
    "answer": "Replace()",
    "choices": [
      "Contains()",
      "IndexOf()",
      "Replace()",
      "Same()"
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What String method returns a converted copy of an object as a string?",
    "answer": "ToString()",
    "choices": [
      "ToString()",
      "ToLower()",
      "Replace()",
      "Convert()"
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What String method returns a copy of the string object converted to lowercase?",
    "answer": "ToLower()",
    "choices": [
      "ToString()",
      "ToLower()",
      "ToUpper()",
      "Convert()"
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What String method returns a copy of the string objected converted to uppercase?",
    "answer": "ToUpper()",
    "choices": [
      "ToString()",
      "ToLower()",
      "ToUpper()",
      "Convert()"
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "The client wants you to replace all the letter 'L' with 'O's in the string named Word with the value of \"HELLO\". <br>How will you do this?",
    "answer": "Word.Replace('L', 'O');",
    "choices": [
      "Word.Replace('L', 'O');",
      "Word.Replace('O', 'L');",
      "Word.Replace(\"L\", \"O\");",
      "Word.Replace(\"O\", \"L\");"
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "The client wants you to print the boolean value on comparing the string named Word with the value of \"HELLO\" with the string \"HELLO!\".<br>How will you do this?",
    "answer": "Console.WriteLine(Word.Equals(\"HELLO!\"));",
    "choices": [
      "Console.WriteLine(Word.Equals(\"HELLO!\"));",
      "Console.WriteLine(Word.Equals(\"Hello!\"));",
      "Console.WriteLine(Word.IsEquals(\"HELLO!\"));",
      "Console.WriteLine(Word.IsEquals(\"Hello!\"));"
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "Strings are immutable, which means that when a string object is created, its contents can't be changed.",
    "answer": "The statement is TRUE .",
    "choices": [
      "The statement is TRUE .",
      "The statement is FALSE ."
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "Every instance of a string that has been modified actually creates a new string in the computer's memory.",
    "answer": "The statement is TRUE .",
    "choices": [
      "The statement is TRUE .",
      "The statement is FALSE ."
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  },
  {
    "question": "What is the class that represents a mutable string of characters that allows the user to expand the number of characters in the string object without allocating additional memory space?",
    "answer": "StringBuilder",
    "choices": [
      "StringBuilder",
      "Stringer",
      "String Actuator",
      "StringList"
    ],
    "reference": "06 Handout 1",
    "term": "Midterm"
  }
]