// This is the data for the quiz questions, answers, and choices
var quizData = [
  {
    "question": "An object-oriented programming language developed by Microsoft in the 1990s and is often used to code apps on Windows OS.",
    "answer": "C#",
    "choices": [
      "C#",
      "Java",
      "Python",
      "C++"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "C# allows users to develop mobile applications.",
    "answer": "THE STATEMENT IS FALSE ",
    "choices": [
      "THE STATEMENT IS FALSE ",
      "THE STATEMENT IS TRUE "
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "It is a collection of tools, technologies, and languages that provides an environment to build and deploy applications easily.",
    "answer": ".NET",
    "choices": [
      ".NET",
      ".COM",
      ".NAP",
      ".CS"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This controls the tasks and manage system resources of the computer.",
    "answer": "Operating System",
    "choices": [
      "Operating System",
      "ADO.NET",
      "C++",
      "CLR"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This is a runtime environment of the .NET framework that manages the execution of the .NET code.",
    "answer": "Common Language Runtime",
    "choices": [
      "Common Language Runtime",
      "ADO.NET",
      "Operating System",
      "Base Class Library"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "CLR converts and compiles the source code into this language that is essentially a portable assembly code.",
    "answer": "Microsoft Intermediate Language",
    "choices": [
      "Microsoft Intermediate Language",
      "CLR Just-In-Time",
      ".NET Language",
      "The English Language"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This the name of the compiler that combines MSIL code into a machine-language one before it's executed.",
    "answer": "CLR Just-In-Time",
    "choices": [
      "CLR Just-In-Time",
      "Microsoft Intermediate Language",
      ".NET Language",
      "The English Language"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This is a library that contains the classes and interfaces that is used for building applications. The classes in this library can be used to build and interact with ASP.NET, Windows Forms, and ADO.NET.",
    "answer": ".NET Base Class Library",
    "choices": [
      ".NET Base Class Library",
      "ADO.NET",
      "Microsoft Intermediate Language",
      "Bootstrap Library"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This is a component that provides access to relational databases such as SQL and XML.",
    "answer": "ADO.NET",
    "choices": [
      "ADO.NET",
      "ASP.NET",
      "DB.NET",
      "Common Language Runtime"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This is a unified web development model that includes the services necessary in building enterprise-class web apps.",
    "answer": "ASP.NET",
    "choices": [
      "ASP.NET",
      "Windows Forms",
      "HTML.NET",
      "CSS.NET"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This component of ASP.NET allows the user to build dynamic websites using a familiar drag-and drop event-driven model.",
    "answer": "ASP.NET Web Forms",
    "choices": [
      "ASP.NET Web Forms",
      "ASP.NET Web Services",
      "ADO.NET Web Services",
      "ASP.NET"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This component of ASP.NET extends the web infrastructure to provide the means for software to conenct to other apps.",
    "answer": "ASP.NET Web Services",
    "choices": [
      "ASP.NET Web Services",
      "ASP.NET Web Forms",
      "ADO.NET Web Services",
      "ASP.NET"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This component of ASP.NET component contains graphical representation of any window displayed in the app.",
    "answer": "Windows Forms",
    "choices": [
      "Windows Forms",
      "ASP.NET Web Services",
      "ASP.NET Web Forms",
      "ADO.NET Web Services"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This is a set of basic language features that ensures oeprability between languages in the .NET environment.",
    "answer": "Common Language Specification",
    "choices": [
      "Common Language Specification",
      "Command Line System",
      "Common Link Specification",
      "Common Language Syste"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This is a formal specification that documents how types are declared, used, and managed so that it's subset, the CLR, can use it.",
    "answer": "Common Type System",
    "choices": [
      "Common Type System",
      "Command Type System",
      "Common Type Specification",
      "Command Type Specification"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "The following languages are supported by .NET EXCEPT for one.",
    "answer": "JavaScript",
    "choices": [
      "JavaScript",
      "Visual Basic",
      "C#",
      "JScript"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This feature of the .NET framework states that it includes a large library and supports several programming languages that allow developers to write code in different languages.",
    "answer": "Interoperability",
    "choices": [
      "Interoperability",
      "AJAX",
      "Language Independence",
      "Security"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This is supported by the .NET framework that is used by developers in creating highly responsive web apps with minimal effort.",
    "answer": "AJAX",
    "choices": [
      "AJAX",
      "ADO.NET",
      "CSS.NET",
      "Web Services"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "It is a colelction of types and resources that are built to work together and form a logical unit of functionality.",
    "answer": "Assembly",
    "choices": [
      "Assembly",
      "Framework",
      "Library",
      "Executable"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Applications in .NET are deployed as an assembly.",
    "answer": "THE STATEMENT IS TRUE ",
    "choices": [
      "THE STATEMENT IS TRUE ",
      "THE STATEMENT IS FALSE "
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What word in this statement makes it THE STATEMENT IS FALSE ? : The entire .NET code on execution is converted into an intermediate language code and is stored as an assembly.",
    "answer": "Execution",
    "choices": [
      "Execution",
      "Intermediate",
      "Assembly",
      "Entire"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "A module that contains functions and data that can be used by another module.",
    "answer": "Dynamic Link Library (DLL)",
    "choices": [
      "Dynamic Link Library (DLL)",
      "Executable (EXE)",
      ".NET",
      "Assembly"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This is contained in an assembly that provides information along with a complete list and description of methods, types, and other resources.",
    "answer": "Metadata",
    "choices": [
      "Metadata",
      "Manifest",
      "Source code",
      "Dictionary"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Part of the metadata is a list of identification information, and other assemblies that is used by the current assembly.",
    "answer": "Manifest",
    "choices": [
      "Manifest",
      "Metadata",
      "Source code",
      "Dictionary"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "How many bits does a version number contain in each assembly which is presented as a set of four decimal pieces (Major.Minor.Build.Revision).",
    "answer": "128 bits",
    "choices": [
      "128 bits",
      "64 bits",
      "32 bits",
      "16 bits"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Multiple applications can use a shared assembly, while a private assembly only gives access to one single application.",
    "answer": "THE STATEMENT IS TRUE ",
    "choices": [
      "THE STATEMENT IS TRUE ",
      "THE STATEMENT IS FALSE "
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This stores assemblies specifically designated to be shared by several applications on the computer.",
    "answer": "Global Assembly Cache (GAC)",
    "choices": [
      "Global Assembly Cache (GAC)",
      "Metadata",
      "Manifest",
      "Dynamic Link Library (DLL)"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This type of assembly can have multiple versions that are not backwards compatible with each other.",
    "answer": "Shared Assembly",
    "choices": [
      "Shared Assembly",
      "Private Assembly"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This type of assembly requires a registration in the Global Assembly Cache (GAC).",
    "answer": "Shared Assembly",
    "choices": [
      "Shared Assembly",
      "Private Assembly"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This declaration is a collection of classes.",
    "answer": "Namespace",
    "choices": [
      "Namespace",
      "Main method",
      "Library",
      "Class attributes"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Every C# application can contain multiple Main methods.",
    "answer": "THE STATEMENT IS FALSE ",
    "choices": [
      "THE STATEMENT IS TRUE ",
      "THE STATEMENT IS FALSE "
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Statements and expressions in C# doesn't necessarily need to end in a semicolon.",
    "answer": "THE STATEMENT IS FALSE ",
    "choices": [
      "THE STATEMENT IS TRUE ",
      "THE STATEMENT IS FALSE "
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  }
]