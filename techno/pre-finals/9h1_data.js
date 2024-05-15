// This is the data for the quiz questions, answers, and choices
var quizData = [
    {
      "question": "What is the primary goal of operations management?",
      "answer": "To ensure the highest degree of efficiency within an enterprise",
      "choices": [
        "To ensure the highest degree of efficiency within an enterprise",
        "To maximize profits",
        "To minimize costs",
        "To increase sales"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "What does capacity planning involve in operations management?",
      "answer": "Evaluating the number of products a business can sell in a given time frame",
      "choices": [
        "Evaluating the number of products a business can sell in a given time frame",
        "Checking for potential problems in services or products",
        "Controlling the sourcing of supplies",
        "Developing new product concepts"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "What is the role of quality control in operations management?",
      "answer": "To check for potential problems or errors in services or products at every stage of the production process",
      "choices": [
        "To generate new product concepts",
        "To check for potential problems or errors in services or products at every stage of the production process",
        "To control the sourcing of supplies",
        "To evaluate the number of products a business can sell in a given time frame"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "What does process improvement and optimization involve in operations management?",
      "answer": "Evaluating the steps in a process and rearranging them to work best",
      "choices": [
        "Evaluating the steps in a process and rearranging them to work best",
        "Checking for potential problems in services or products",
        "Controlling the sourcing of supplies",
        "Developing new product concepts"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "What is the role of supply chain management in operations management?",
      "answer": "To control the sourcing of supplies, the production process, inventory management, sales, and distribution",
      "choices": [
        "To generate new product concepts",
        "To check for potential problems in services or products",
        "To control the sourcing of supplies, the production process, inventory management, sales, and distribution",
        "To evaluate the number of products a business can sell in a given time frame"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "What involves evaluating the number of products or services a business can sell or distribute in a given time frame?",
      "answer": "Capacity Planning",
      "choices": [
        "Quality Control",
        "Capacity Planning",
        "Supply Chain Management",
        "Product Design and Service Design"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "What ensures that customer requirements and expectations are met, new concepts are generated, and a service or product is developed?",
      "answer": "Product Design and Service Design",
      "choices": [
        "Quality Control",
        "Product Design and Service Design",
        "Capacity Planning",
        "Supply Chain Management"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "What involves checking for potential problems or errors in services or products at every stage of the production process or during service operations?",
      "answer": "Quality Control",
      "choices": [
        "Quality Control",
        "Product Design and Service Design",
        "Capacity Planning",
        "Supply Chain Management"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "What involves evaluating the steps in a process, either completely rewriting it or rearranging the steps to work best?",
      "answer": "Process Improvement and Optimization",
      "choices": [
        "Process Improvement and Optimization",
        "Quality Control",
        "Product Design and Service Design",
        "Capacity Planning"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "What involves controlling the sourcing of supplies, the production process, inventory management, sales, and distribution at reasonable rates while managing the supply chain process?",
      "answer": "Supply Chain Management",
      "choices": [
        "Supply Chain Management",
        "Quality Control",
        "Product Design and Service Design",
        "Capacity Planning"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which term refers to the integration of people, places, and processes, as well as the handling and care of structures, buildings, equipment, and other physical necessities of a business?",
      "answer": "Facilities Management",
      "choices": [
        "Operations Management",
        "Quality Control",
        "Capacity Planning",
        "Facilities Management"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which category of Facilities Management relates to any physical alterations and adjustments in the building or its structure?",
      "answer": "Hard Services",
      "choices": [
        "Hard Services",
        "Soft Services",
        "Facility Location",
        "Tangible factors"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which category of Facilities Management is responsible for making the workplace bearable and comfortable?",
      "answer": "Soft Services",
      "choices": [
        "Hard Services",
        "Soft Services",
        "Facility Location",
        "Tangible factors"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which term involves learning a geographic site for an enterprise’s operations?",
      "answer": "Facility Location",
      "choices": [
        "Hard Services",
        "Soft Services",
        "Facility Location",
        "Tangible factors"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which factors under Facility Location include delivery or freight rates, production costs, local government tax cuts, and production costs?",
      "answer": "Tangible factors",
      "choices": [
        "Hard Services",
        "Soft Services",
        "Facility Location",
        "Tangible factors"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which factors under Facility Location include the location’s security, quality of work, and culture?",
      "answer": "Non-tangible factors",
      "choices": [
        "Hard Services",
        "Soft Services",
        "Facility Location",
        "Non-tangible factors"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which factors when deciding where to set up the business include proximity to the market, supply of materials, transportation facilities, infrastructure available, and labor wages and the laws that govern it?",
      "answer": "Controllable factors",
      "choices": [
        "Hard Services",
        "Soft Services",
        "Controllable factors",
        "Non-controllable factors"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which factors when deciding where to set up the business include government policies, climate and environmental conditions, and supporting industries?",
      "answer": "Non-controllable factors",
      "choices": [
        "Hard Services",
        "Soft Services",
        "Controllable factors",
        "Non-controllable factors"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which factor is crucial for delivering goods and services to customers promptly?",
      "answer": "Proximity to the market",
      "choices": [
        "Proximity to the market",
        "Supply of materials",
        "Transportation facilities",
        "Infrastructure available"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which factor ensures that the enterprise acquires raw materials in the right qualities, quantities, and time for uninterrupted production?",
      "answer": "Supply of materials",
      "choices": [
        "Proximity to the market",
        "Supply of materials",
        "Transportation facilities",
        "Infrastructure available"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which factor ensures a timely supply of raw materials to the business and finished goods to the customers?",
      "answer": "Transportation facilities",
      "choices": [
        "Proximity to the market",
        "Supply of materials",
        "Transportation facilities",
        "Infrastructure available"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which factor is a prerequisite for the location of the plant, especially for businesses dependent on energy or technology?",
      "answer": "Infrastructure available",
      "choices": [
        "Proximity to the market",
        "Supply of materials",
        "Transportation facilities",
        "Infrastructure available"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which factor should an enterprise always be aware of to avoid administrative and criminal liability?",
      "answer": "Labor wages and the laws that govern it",
      "choices": [
        "Proximity to the market",
        "Supply of materials",
        "Transportation facilities",
        "Labor wages and the laws that govern it"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which factor includes the policies of the government and local bodies concerning labor laws, building codes, safety, taxes, social security, data privacy, and other factors that demand attention?",
      "answer": "Government policies",
      "choices": [
        "Proximity to the market",
        "Supply of materials",
        "Transportation facilities",
        "Government policies"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which factor can significantly affect the delivery of services and products to customers?",
      "answer": "Climate and environmental conditions",
      "choices": [
        "Proximity to the market",
        "Supply of materials",
        "Transportation facilities",
        "Climate and environmental conditions"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which factor becomes very important if the materials are perishable and the cost of transportation is very high?",
      "answer": "Supply of materials",
      "choices": [
        "Proximity to the market",
        "Supply of materials",
        "Transportation facilities",
        "Supporting industries"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which office layout has workstations arranged in various ways, some touching each other and others clustered in work zones of varying sizes?",
      "answer": "Open Office Design",
      "choices": [
        "Open Office Design",
        "Cellular Office Design",
        "Co-Working Office Design",
        "Combination Office Design"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which office layout divides the entire office space into individual spaces or cubicles?",
      "answer": "Cellular Office Design",
      "choices": [
        "Open Office Design",
        "Cellular Office Design",
        "Co-Working Office Design",
        "Combination Office Design"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which office layout is popular with workers without a designated workspace?",
      "answer": "Co-Working Office Design",
      "choices": [
        "Open Office Design",
        "Cellular Office Design",
        "Co-Working Office Design",
        "Combination Office Design"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which office layout might be the best choice to incorporate open and mobile work options?",
      "answer": "Combination Office Design",
      "choices": [
        "Open Office Design",
        "Cellular Office Design",
        "Co-Working Office Design",
        "Combination Office Design"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "In which type of manufacturing layout is only a single product type created in an operating area?",
      "answer": "Product or line layout",
      "choices": [
        "Product or line layout",
        "Process or functional layout",
        "Fixed position layout",
        "Combination type of layout"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which manufacturing layout is helpful if there is a low production need?",
      "answer": "Process or functional layout",
      "choices": [
        "Product or line layout",
        "Process or functional layout",
        "Fixed position layout",
        "Combination type of layout"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "In which manufacturing layout does the major component of a product remain in a fixed position or location?",
      "answer": "Fixed position layout",
      "choices": [
        "Product or line layout",
        "Process or functional layout",
        "Fixed position layout",
        "Combination type of layout"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which manufacturing layout utilizes a combination or a mix of other layouts?",
      "answer": "Combination type of layout",
      "choices": [
        "Product or line layout",
        "Process or functional layout",
        "Fixed position layout",
        "Combination type of layout"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "What is the first step in setting up a virtual office?",
      "answer": "Set up a phone system and office address",
      "choices": [
        "Set up a phone system and office address",
        "Acquire a domain name and e-mail address",
        "Adopt the right tools and equipment",
        "Set up collaboration and communication tools"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "What is the last step in setting up a virtual office?",
      "answer": "Establish the organizational rules and regulations",
      "choices": [
        "Set up a phone system and office address",
        "Acquire a domain name and e-mail address",
        "Adopt the right tools and equipment",
        "Establish the organizational rules and regulations"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which term refers to the arrangement of selections to choose from when designing the production layouts depending on the total size of the equipment, products, and employees used?",
      "answer": "Manufacturing Layout",
      "choices": [
        "Workplace Layout",
        "Virtual Office",
        "Manufacturing Layout",
        "Step 1"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which term defines the architecture of collaboration, cross-functional operations, and elements that focus on maximizing productivity, learning, and employee satisfaction?",
      "answer": "Workplace Layout",
      "choices": [
        "Workplace Layout",
        "Virtual Office",
        "Manufacturing Layout",
        "Step 1"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which term is most commonly used by start-up technopreneurs and considers an expansion in efficiency, a decrease in driving expenses and greater adaptability?",
      "answer": "Virtual Office",
      "choices": [
        "Workplace Layout",
        "Virtual Office",
        "Manufacturing Layout",
        "Step 1"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "In setting up a virtual office, which step involves setting up a phone system and office address?",
      "answer": "Step 1",
      "choices": [
        "Step 1",
        "Step 2",
        "Step 3",
        "Step 4"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "In setting up a virtual office, which step involves acquiring a domain name and e-mail address?",
      "answer": "Step 2",
      "choices": [
        "Step 5",
        "Step 2",
        "Step 3",
        "Step 4"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "In setting up a virtual office, which step involves adopting the right tools and equipment?",
      "answer": "Step 3",
      "choices": [
        "Step 5",
        "Step 2",
        "Step 3",
        "Step 4"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "In setting up a virtual office, which step involves setting up collaboration and communication tools?",
      "answer": "Step 4",
      "choices": [
        "Step 5",
        "Step 2",
        "Step 1",
        "Step 4"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "In setting up a virtual office, which step involves establishing the organizational rules and regulations?",
      "answer": "Step 5",
      "choices": [
        "Step 1",
        "Step 2",
        "Step 3",
        "Step 5"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Who were the pioneers of the 5S methodology?",
      "answer": "Sakichi Toyoda, Kiichiro Toyoda, and Taiichi Ohno",
      "choices": [
        "Sakichi Toyoda, Kiichiro Toyoda, and Taiichi Ohno",
        "Sakichi Toyoda, Kiichiro Toyoda, and Takeru Taniguchi",
        "Sakichi Suzuki, Kiichiro Suzuki, and Takeru Taniguchi",
        "Bill Gates, Paul Allen, and Steve Ballmer"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "After which event did 5S become a methodology in all plants of Toyota worldwide?",
      "answer": "World War II",
      "choices": [
        "World War I",
        "The Great Depression",
        "The Dot-com Bubble",
        "World War II"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "What is the English meaning of ‘Seiri’ in the 5S methodology?",
      "answer": "Sorting",
      "choices": [
        "Sorting",
        "Setting in order",
        "Cleanliness or shine",
        "Standardized"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "What is the English meaning of ‘Seiton’ in the 5S methodology?",
      "answer": "Setting in order",
      "choices": [
        "Sorting",
        "Setting in order",
        "Cleanliness or shine",
        "Standardized"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "What is the English meaning of ‘Seiso’ in the 5S methodology?",
      "answer": "Cleanliness or shine",
      "choices": [
        "Sorting",
        "Setting in order",
        "Cleanliness or shine",
        "Standardized"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "What is the English meaning of ‘Seiketsu’ in the 5S methodology?",
      "answer": "Standardized",
      "choices": [
        "Sorting",
        "Setting in order",
        "Cleanliness or shine",
        "Standardized"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "What is the English meaning of ‘Shitsuke’ in the 5S methodology?",
      "answer": "Discipline or sustain",
      "choices": [
        "Sorting",
        "Setting in order",
        "Cleanliness or shine",
        "Discipline or sustain"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which term in the 5S methodology refers to the principle of organizing the important tools and materials needed for work?",
      "answer": "Seiri",
      "choices": [
        "Seiton",
        "Seiso",
        "Seiketsu",
        "Seiri"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which term in the 5S methodology refers to the principle of arranging tools and materials so that few movements will be needed to locate them?",
      "answer": "Seiton",
      "choices": [
        "Seiri",
        "Seiso",
        "Seiketsu",
        "Seiton"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which term in the 5S methodology emphasizes that cleaning the workplace should be a daily habit?",
      "answer": "Seiso",
      "choices": [
        "Seiri",
        "Seiton",
        "Seiketsu",
        "Seiso"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which term in the 5S methodology teaches the employee their role in maintaining and following the first three “Ss” of the 5S system?",
      "answer": "Seiketsu",
      "choices": [
        "Seiri",
        "Seiton",
        "Seiso",
        "Seiketsu"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which term in the 5S methodology teaches the employee that the 5S method is an ongoing process and a continuing responsibility?",
      "answer": "Shitsuke",
      "choices": [
        "Seiri",
        "Seiton",
        "Seiso",
        "Shitsuke"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which methodology focuses on putting everything where it belongs and keeping workplaces tidy, thus making it easier for workers to do their jobs and protecting them from possible injury?",
      "answer": "5S",
      "choices": [
        "5W",
        "5SS",
        555,
        "5S"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which company’s plants worldwide adopted the 5S methodology?",
      "answer": "Toyota",
      "choices": [
        "Suzuki",
        "Honda",
        "Kawasaki",
        "Toyota"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "What is another name for a plan that outlines a company’s financial goals and explains who your customer base is, how a business provides value to them, and the specifics of financing that go along with it?",
      "answer": "Business Management Canvas",
      "choices": [
        "Business Model Outline",
        "Customer Segment Canvas",
        "Target Market Planning",
        "Business Management Canvas"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "What is a single-page plan that provides information about a company’s target market, the market’s needs, and the role the market offerings will play in satisfying those needs?",
      "answer": "Business Model Canvas",
      "choices": [
        "Business Model Segment",
        "Operations Management",
        "Linking Human Resources",
        "Business Model Canvas"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which component of a business model canvas refers to the various groups of people or organizations that an enterprise aims to reach and serve?",
      "answer": "Customer Segment",
      "choices": [
        "Revenue Streams",
        "Key Activities",
        "Key Resources",
        "Customer Segment"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which component of a business model canvas refers to relationships that can be personal or automated, transactional or long-term?",
      "answer": "Customer Relationship",
      "choices": [
        "Key Partners",
        "Channels",
        "Cost Structure",
        "Customer Relationship"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which component of a business model canvas refers to ways a company reaches out to specific customer groups?",
      "answer": "Channels",
      "choices": [
        "Value Proposition",
        "Key Resources",
        "Cost Structure",
        "Channels"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which component of a business model canvas refers to the profit or loss of the business, which is the difference between the cost and the revenue streams?",
      "answer": "Revenue Streams",
      "choices": [
        "Key Activities",
        "Key Resources",
        "Cost Structure",
        "Revenue Streams"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which component of a business model canvas refers to the most crucial actions a business must take to run smoothly?",
      "answer": "Key Activities",
      "choices": [
        "Revenue Streams",
        "Key Resources",
        "Cost Structure",
        "Key Activities"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which component of a business model canvas refers to the resources necessary for each business model?",
      "answer": "Key Resources",
      "choices": [
        "Key Partners",
        "Channels",
        "Cost Structure",
        "Key Resources"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which component of a business model canvas refers to the relationships a business has with other people or organizations that make the business model work?",
      "answer": "Key Partners",
      "choices": [
        "Key Activities",
        "Key Resources",
        "Cost Structure",
        "Key Partners"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which component of a business model canvas refers to the idea of a cost structure that helps determine how to focus on innovation and develop a value proposition?",
      "answer": "Cost Structure",
      "choices": [
        "Value Proposition",
        "Key Resources",
        "Key Partners",
        "Cost Structure"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    },
    {
      "question": "Which component of a business model canvas refers to the reason customers choose a business over others, which meets their needs or solves their problems?",
      "answer": "Value Proposition",
      "choices": [
        "Key Activities",
        "Key Resources",
        "Cost Structure",
        "Value Proposition"
      ],
      "reference": "09_Handout_1",
      "term": "Pre-Finals"
    }
  ]