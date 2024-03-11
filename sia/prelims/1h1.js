// This is the data for the quiz questions, answers, and choices
var quizData = [
  {
    "question": "What does SAP stand for?",
    "answer": "System Applications and Products",
    "choices": [
      "System Applications and Products",
      "Student Assistant Portal",
      "Social Amelioration Program",
      "System Architecture and Products"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "What is the full name of SAP?",
    "answer": "System Applications and Products in Data Processing",
    "choices": [
      "System Applications and Products in Data Processing",
      "System Architecture and Products in Business Processing",
      "System Applications and Products in Data Encoding",
      "System Architecture and Products in Database Processing"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "SAP is the market leader in enterprise application software.",
    "answer": "THE STATEMENT IS TRUE .",
    "choices": [
      "THE STATEMENT IS TRUE .",
      "THE STATEMENT IS FALSE ."
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "SAP is a Swedish multinational company that pioneered the use of ERP in businesses.",
    "answer": "THE STATEMENT IS FALSE .",
    "choices": [
      "THE STATEMENT IS TRUE .",
      "THE STATEMENT IS FALSE ."
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "SAP lets companies streamline processes, use live data, predict customer trends, and connect entire businesses.",
    "answer": "THE STATEMENT IS TRUE .",
    "choices": [
      "THE STATEMENT IS TRUE .",
      "THE STATEMENT IS FALSE ."
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "What year was SAP founded for development of real-time data application software?",
    "answer": "1972",
    "choices": [
      "1972",
      "1981",
      "1986",
      "1982"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "What year was SAP R/2 introduced?",
    "answer": "1981 - 1982",
    "choices": [
      "1981 - 1982",
      "1986 - 1989",
      "1993 - 1994",
      "1995 - 1996"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "What year was SAP R/3 developed and presented at the CeBIT Hanover?",
    "answer": "1986 - 1989",
    "choices": [
      "1981 - 1982",
      "1986 - 1989",
      "1993 - 1994",
      "1995 - 1996"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "What year did Microsoft and IBM started using SAP R/3 into their systems?",
    "answer": "1993 - 1994",
    "choices": [
      "1981 - 1982",
      "1986 - 1989",
      "1993 - 1994",
      "1995 - 1996"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "What year did SAP joined the internet with SAP R/3 becoming usable online?",
    "answer": "1995 - 1996",
    "choices": [
      "1981 - 1982",
      "1986 - 1989",
      "1993 - 1994",
      "1995 - 1996"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "What year did SAP celebrated their 30th anniversary and became the third largest software provider?",
    "answer": "2002",
    "choices": [
      "2002",
      "2009",
      "2011",
      "2013"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "What year did SAP announced the release of SAP ERP?",
    "answer": "2005 - 2006",
    "choices": [
      "1981 - 1982",
      "1986 - 1989",
      "2005 - 2006",
      "1995 - 1996"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "What year did SAP Business Suite 7 release, aiming to optimize performance and reduce IT costs?",
    "answer": "2009",
    "choices": [
      "2002",
      "2009",
      "2011",
      "2013"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "What year did SAP HANA release, a result from the implementation of the first SAP in-memory computing product?",
    "answer": "2011",
    "choices": [
      "2002",
      "2009",
      "2011",
      "2013"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "What year did SAP Business Suite moved to SAP HANA, making it the fastest-growing product in the history of enterprise software?",
    "answer": "2013",
    "choices": [
      "2002",
      "2009",
      "2011",
      "2013"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "What year was SAP S/4 HANA introduced?",
    "answer": "2015",
    "choices": [
      "2016",
      "2013",
      "2011",
      "2015"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "SAP ERP is the standard ERP solution for companies around the world.",
    "answer": "THE STATEMENT IS TRUE .",
    "choices": [
      "THE STATEMENT IS TRUE .",
      "THE STATEMENT IS FALSE ."
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "Which of the following statements are true? <br> I. SAP ERP enables a company to support and optimize its business processes. <br> II. SAP's strategic goal is to develop the next-generation ERP package.",
    "answer": "Both statements are true.",
    "choices": [
      "Both statements are true.",
      "Both statements are false.",
      "I is true, II is false.",
      "I is false, II is true."
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "Which of the following statements are true? <br> I. SAP R/3 is the next-generation business suite. <br> II. It is a result of SAP's strategic goal to develop the next-generation ERP package.",
    "answer": "I is false, II is true.",
    "choices": [
      "Both statements are true.",
      "Both statements are false.",
      "I is true, II is false.",
      "I is false, II is true."
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "Which of the following statements are true? <br> I. SAP S/4 HANA uses real-time simplification that compresses multiple tables into a less cluttered one. <br> II. SAP S/4 HANA uses the traditional database architecture.",
    "answer": "I is true, II is false.",
    "choices": [
      "Both statements are true.",
      "Both statements are false.",
      "I is true, II is false.",
      "I is false, II is true."
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "Which of the following statements are true? <br> I. SAP S/4 HANA uses its own data model called the S/4 HANA Data Model. <br> II. This allwos data storage in denormalized form, have a single data source, remove data storage, and process aggregation and analytics on the fly.",
    "answer": "Both statements are true.",
    "choices": [
      "Both statements are true.",
      "Both statements are false.",
      "I is true, II is false.",
      "I is false, II is true."
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "What term in this statement makes it FALSE ? <br> The traditional database structure uses redundant data to increase data retrieval performance.",
    "answer": "Retrieval; it should be aggregation",
    "choices": [
      "Retrieval; it should be aggregation",
      "Traditional; it should be relational",
      "Redundant; it should be repetitive",
      "Architecture; it should be system"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "Which of the following statements are true? <br> I. SAP ERP is designed to strengthen companies in various industries. <br> II. SAP S/4 HANA caters more to a large, enterprise-level organizations.",
    "answer": "Both statements are true.",
    "choices": [
      "Both statements are true.",
      "Both statements are false.",
      "I is true, II is false.",
      "I is false, II is true."
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "This is a design system and a UX layer that allows business app creation with a consumer-grade user experience.",
    "answer": "SAP Fiori",
    "choices": [
      "SAP HANA",
      "SAP UX",
      "SAP Fiori",
      "SAP Foiri"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "SAP Fiori makes casual users into SAP experts with simple screens that is viewable in every device.",
    "answer": "THE STATEMENT IS TRUE .",
    "choices": [
      "THE STATEMENT IS TRUE .",
      "THE STATEMENT IS FALSE ."
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "The following are the three application types in SAP Fiori EXCEPT ONE.",
    "answer": "Navigational Apps",
    "choices": [
      "Navigational Apps",
      "Transactional Apps",
      "Analytical Apps",
      "Factsheet"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "This application type of SAP Fiori is used to access tasks like Create, Change, or Display process with guided navigation.",
    "answer": "Transactional Apps",
    "choices": [
      "Navigational Apps",
      "Transactional Apps",
      "Analytical Apps",
      "Factsheet"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "This application type of SAP Fiori gives a visual overview of the business data.",
    "answer": "Analytical Apps",
    "choices": [
      "Navigational Apps",
      "Transactional Apps",
      "Analytical Apps",
      "Factsheet"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "This application type of SAP Fiori gives a view of the essential information about objects and contextual navigation between related objects.",
    "answer": "Factsheet",
    "choices": [
      "Navigational Apps",
      "Transactional Apps",
      "Analytical Apps",
      "Factsheet"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "The following are the three data types included in ERP systems EXCEPT ONE.",
    "answer": "User Data",
    "choices": [
      "User Data",
      "Organizational Data",
      "Master Data",
      "Transaction Data"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "The examples of this ERP data type is company codes, plant, storage location, and distribution channel.",
    "answer": "Organizational Data",
    "choices": [
      "User Data",
      "Organizational Data",
      "Master Data",
      "Transaction Data"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "The examples of this ERP data type is persons, materials, customers, and vendors.",
    "answer": "Master Data",
    "choices": [
      "User Data",
      "Organizational Data",
      "Master Data",
      "Transaction Data"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "This ERP data type can be stored for a long time and rarely changed.",
    "answer": "Master Data",
    "choices": [
      "User Data",
      "Organizational Data",
      "Master Data",
      "Transaction Data"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "This ERP data type represents logically grouped data such as customer, material, vendor masters and general ledger accouunts.",
    "answer": "Master Data",
    "choices": [
      "User Data",
      "Organizational Data",
      "Master Data",
      "Transaction Data"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "This ERP data type is the system record of the business event wherein, depending on the business event, different master data and organization data will be referenced.",
    "answer": "Transaction Data",
    "choices": [
      "User Data",
      "Organizational Data",
      "Master Data",
      "Transaction Data"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "It is the data sets generated if a business transaction is executed.",
    "answer": "Transactions",
    "choices": [
      "Business Transactions",
      "Transactions",
      "Transactional Transaction",
      "Transaction of the Transactional Transactions made during a Transaction"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "It is the record of the business transaction.",
    "answer": "Document",
    "choices": [
      "Document",
      "Receipt",
      "Record",
      "Transaction record"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "An example of a document are sales, purchasing, material, and account documents.",
    "answer": "THE STATEMENT IS TRUE .",
    "choices": [
      "THE STATEMENT IS TRUE .",
      "THE STATEMENT IS FALSE ."
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "Which of the following statements are true? <br> I. The document flow and the order status allows the setting of the status at any point in time. <br> II. SAP revises the status every time a change in a document takes place.",
    "answer": "Both statements are true.",
    "choices": [
      "Both statements are true.",
      "Both statements are false.",
      "I is true, II is false.",
      "I is false, II is true."
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "What makes the statement wrong? <br> SAP S/4 HANA can be accessed on the Cloud and Physically.",
    "answer": "Physically; it should be On-Premise",
    "choices": [
      "Physically; it should be On-Premise",
      "Cloud; it should be Mentally",
      "SAP S/4 HANA; it should be My heart",
      "Accessed; it should be Loaded"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "This edition of SAP S/4 HANA has a subscription licensing deployed in the systems provided and maintained by SAP.",
    "answer": "Cloud edition",
    "choices": [
      "Cloud edition",
      "On-premise edition",
      "Real edition",
      "Exclusive edition"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "This edition of SAP S/4 HANA allows automatic participation in quarterly innovation upgrades and has current release cycles.",
    "answer": "Cloud edition",
    "choices": [
      "Cloud edition",
      "On-premise edition",
      "Real edition",
      "Exclusive edition"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "This edition of SAP S/4 HANA is under traditional licensing where the customer is in charge of its deployment and maintenance.",
    "answer": "On-premise edition",
    "choices": [
      "Cloud edition",
      "On-premise edition",
      "Real edition",
      "Exclusive edition"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "This edition of SAP S/4 HANA has its data privately controlled and has fewer release cycles.",
    "answer": "On-premise edition",
    "choices": [
      "Cloud edition",
      "On-premise edition",
      "Real edition",
      "Exclusive edition"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "The following are the three optimization levers considered in SAP S/4 HANA EXCEPT ONE.",
    "answer": "Velocity",
    "choices": [
      "Efficiency",
      "Effectiveness",
      "Agility",
      "Velocity"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "This optimization lever of SAP S/4 HANA focuses on accelerated execution, automated process steps, and digital out-tasking.",
    "answer": "Efficiency",
    "choices": [
      "Efficiency",
      "Effectiveness",
      "Agility",
      "Velocity"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "This optimization lever of SAP S/4 HANA focuses on speeding up actions, delayering of processes, and raising process intelligence.",
    "answer": "Effectiveness",
    "choices": [
      "Efficiency",
      "Effectiveness",
      "Agility",
      "Velocity"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "This optimization lever of SAP S/4 HANA focuses on process flexibility, organizational flexibility, and assimilating process innovation.",
    "answer": "Agility",
    "choices": [
      "Efficiency",
      "Effectiveness",
      "Agility",
      "Velocity"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "Identify if the application of optimization levers apply to business or IT: <br> Real-time inventory management",
    "answer": "Business",
    "choices": [
      "Business",
      "IT"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "Identify if the application of optimization levers apply to business or IT: <br> No separation of data entities from different tables.",
    "answer": "IT",
    "choices": [
      "Business",
      "IT"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "Identify if the application of optimization levers apply to business or IT: <br> Real-time product availability.",
    "answer": "Business",
    "choices": [
      "Business",
      "IT"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "Identify if the application of optimization levers apply to business or IT: <br> Parallel postings and processes.",
    "answer": "IT",
    "choices": [
      "Business",
      "IT"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "Identify if the application of optimization levers apply to business or IT: <br> Increased inventory turnover.",
    "answer": "Business",
    "choices": [
      "Business",
      "IT"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "Identify if the application of optimization levers apply to business or IT: <br> Frequent updates.",
    "answer": "IT",
    "choices": [
      "Business",
      "IT"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "Identify if the application of optimization levers apply to business or IT: <br> Faster operational reporting",
    "answer": "Business",
    "choices": [
      "Business",
      "IT"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "Identify if the application of optimization levers apply to business or IT: <br> 1 document table instead of 26 aggregate tables.",
    "answer": "IT",
    "choices": [
      "Business",
      "IT"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "Identify if the application of optimization levers apply to business or IT: <br> Fewer stockouts",
    "answer": "Business",
    "choices": [
      "Business",
      "IT"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "Identify if the application of optimization levers apply to business or IT: <br> Reduced memory footprint",
    "answer": "IT",
    "choices": [
      "Business",
      "IT"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "Refers to the new implementation of SAP S/4 HANA for customers migrating a legacy system.",
    "answer": "Greenfield approach",
    "choices": [
      "Greenfield approach",
      "All new approach",
      "Implementary approach",
      "Migratory approach"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "This scenario refers to the conversion of a legacy system into the SAP S/4 HANA system.",
    "answer": "New implementation",
    "choices": [
      "New implementation",
      "System conversion",
      "Landscape transformation",
      "Legacy transformation"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "What makes the statement wrong? <br> Reengineering the process aggregation based on ready-to-run business processes.",
    "answer": "Aggregation; it should be Simplification",
    "choices": [
      "Aggregation; it should be Simplification",
      "Ready-to-run; it should be Legacy",
      "Reengineering; it should be Updating",
      "Process; it should be Data"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "What makes the statement wrong? <br> Predefined migration objects and best practices are available without guided configuration.",
    "answer": "Without; it should be With",
    "choices": [
      "Without; it should be With",
      "Predefined; it should be Prebuilt",
      "Practices; it should be Systems",
      "Migration; it should be Update"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "Which of the following statements are true? <br> I. The greenfield approach reduces time to value and customer total cost of ownership (TCO) <br> The greenfield approach rapidly adopts innovations.",
    "answer": "Both statements are true.",
    "choices": [
      "Both statements are true.",
      "Both statements are false.",
      "I is true, II is false.",
      "I is false, II is true."
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "This type of transition require project duration parameters such as the number of data migration objects and volume and complexity per data migration object.",
    "answer": "New implementation",
    "choices": [
      "New implementation",
      "System conversion",
      "Landscape transformation",
      "Legacy transformation"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "Which of the following statements are true? <br> I. The greenfield approach process beings with the installation of SAP S/4 HANA and an initial data load from the source system. <br> II. Tools used are SAP Data Services (SAP DS) for On-Premise and SAP Landscape Transformation (SAP LT) for Cloud.",
    "answer": "Both statements are true.",
    "choices": [
      "Both statements are true.",
      "Both statements are false.",
      "I is true, II is false.",
      "I is false, II is true."
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "This scenario refers to the conversion of their current system into the SAP S/4 HANA system that shows the database, SAP NetWeaver, and application transition in a single step.",
    "answer": "System conversion",
    "choices": [
      "New implementation",
      "System conversion",
      "Landscape transformation",
      "Legacy transformation"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "System conversion doesn't require reimplementation in migration.",
    "answer": "THE STATEMENT IS TRUE .",
    "choices": [
      "THE STATEMENT IS TRUE .",
      "THE STATEMENT IS FALSE ."
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "System conversion will disrupt the existing business process.",
    "answer": "THE STATEMENT IS FALSE .",
    "choices": [
      "THE STATEMENT IS TRUE .",
      "THE STATEMENT IS FALSE ."
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "System conversion involves the reevaluation of customization and existing process flows, where certain processes can be adapted to SAP S/4 HANA.",
    "answer": "THE STATEMENT IS TRUE .",
    "choices": [
      "THE STATEMENT IS TRUE .",
      "THE STATEMENT IS FALSE ."
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "This type of transition requires the number of systems and source data base size and the number of company codes, ledgers, and operating concerns as its project duration parameters.",
    "answer": "System conversion",
    "choices": [
      "New implementation",
      "System conversion",
      "Landscape transformation",
      "Legacy transformation"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "System conversion must involve making sure that add-ons and other solutions are compatible, and that components and customer code to validate further prerequisites must be checked.",
    "answer": "THE STATEMENT IS TRUE .",
    "choices": [
      "THE STATEMENT IS TRUE .",
      "THE STATEMENT IS FALSE ."
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "This scenario refers to the consolidation of the user's data or selectively transform it into an SAP S/4 HANA system.",
    "answer": "Landscape transformation",
    "choices": [
      "New implementation",
      "System conversion",
      "Landscape transformation",
      "Legacy transformation"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "Which of the following statements are true? <br> I. Selective data transformation allows a phased approach, focusing on parts of the business with the highest return of investment and lower TCO. <br> II. System and landscape consolidation with harmonized/simplified processes and unified master data leads to lower TCO.",
    "answer": "Both statements are true.",
    "choices": [
      "Both statements are true.",
      "Both statements are false.",
      "I is true, II is false.",
      "I is false, II is true."
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "This type of transition depends on the selected sub-scenario, such as system consolidation, selective migration, and central finance as its general project duration parameters.",
    "answer": "Landscape transformation",
    "choices": [
      "New implementation",
      "System conversion",
      "Landscape transformation",
      "Legacy transformation"
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "In landscape transformation, the specified parameters include the number of systems to be consolidated, including the volume of the selected data for its general project duration.",
    "answer": "THE STATEMENT IS TRUE .",
    "choices": [
      "THE STATEMENT IS TRUE .",
      "THE STATEMENT IS FALSE ."
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  },
  {
    "question": "Which of the following statements are true? <br> I. Consolidation involves clients being consolidated from different source systems into 1 new or existing SAP S/4 HANA system using the SAP LT (Landscape Transformation) Tool. <br> II. Selective Data Transformation involves all SAP applications, such as central finance, being migrated using the SAP LT Tool.",
    "answer": "I is false, II is true.",
    "choices": [
      "Both statements are true.",
      "Both statements are false.",
      "I is true, II is false.",
      "I is false, II is true."
    ],
    "reference": "01_Handout_1",
    "term": "Prelim"
  }
]