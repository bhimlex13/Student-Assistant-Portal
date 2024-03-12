// This is the data for the quiz questions, answers, and choices
var quizData = [
  {
    "question": "Read for reference.",
    "image": "./Screenshot_31.png",
    "answer": "Confirm",
    "choices": [
      "Confirm"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  }
  ,
  {
    "question": "What is a schematic description of a network arrangement, connecting various nodes through lines of connection?",
    "answer": "Network Topologies",
    "choices": [
      "Network Topologies",
      "OSI Model",
      "Terminal Device",
      "Wireless Device"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is a type of topology where the computers are connected to a single hub through a cable?",
    "answer": "Star Topology",
    "choices": [
      "Star Topology",
      "Bus Topology",
      "Ring Topology",
      "Tree Topology"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Which topology best describes the advantage?<BR>Advantage: New nodes can be easily added to the network. Communication data must be forwarded by the central node, which facilitates network monitoring",
    "answer": "Star Topology",
    "choices": [
      "Star Topology",
      "Bus Topology",
      "Ring Topology",
      "Tree Topology"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is a type of topology where a hub is the central node while all other nodes are connected to it.",
    "answer": "Star Topology",
    "choices": [
      "Star Topology",
      "Bus Topology",
      "Ring Topology",
      "Tree Topology"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Which topology best describes the disadvantage?<BR>Disadvantage: Faults on the central node affect the entire network's communication.",
    "answer": "Star Topology",
    "choices": [
      "Star Topology",
      "Mesh Topology",
      "Ring Topology",
      "Tree Topology"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is a type of topology where a network type in which every computer and network device is connected to a single cable?",
    "answer": "Bus Topology",
    "choices": [
      "Star Topology",
      "Bus Topology",
      "Ring Topology",
      "Tree Topology"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is it called when a hub has exactly two endpoints?",
    "answer": "Linear Bus Topology",
    "choices": [
      "Linear Bus Topology",
      "Parallel Bus Topology",
      "Two-way Bus Topology",
      "Bus Topology"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Which topology best describes the advantage?<BR>Advantage: The installation is simple and cable resources are saved.",
    "answer": "Bus Topology",
    "choices": [
      "Star Topology",
      "Bus Topology",
      "Ring Topology",
      "Mesh Topology"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Which topology best describes the disadvantage?<BR>Disadvantages: A cable fault affects the communication of the entire network.",
    "answer": "Bus Topology",
    "choices": [
      "Star Topology",
      "Bus Topology",
      "Ring Topology",
      "Mesh Topology"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Which topology best describes the advantage?<BR>Advantage: Generally, the failure of a node does not affect the communication of the entire network.",
    "answer": "Bus Topology",
    "choices": [
      "Star Topology",
      "Bus Topology",
      "Ring Topology",
      "Mesh Topology"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Which topology best describes the disadvantage?<BR>Disadvantages: The information sent by a node can be received by all other nodes, resulting in low security.",
    "answer": "Bus Topology",
    "choices": [
      "Star Topology",
      "Bus Topology",
      "Ring Topology",
      "Mesh Topology"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is the type of topology where each computer connected to another computer, and the last one connected to the first—exactly two neighbors for each device?",
    "answer": "Ring Topology",
    "choices": [
      "Star Topology",
      "Bus Topology",
      "Ring Topology",
      "Tree Topology"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Which topology best describes the advantage?<BR>Advantage: Cables resources are saved.",
    "answer": "Ring Topology",
    "choices": [
      "Star Topology",
      "Mesh Topology",
      "Ring Topology",
      "Tree Topology"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Which topology best describes the disadvantage?<BR>Disadvantage: It is difficult to add new nodes. The original topology must be interrupted before new nodes are inserted to form a new topology.",
    "answer": "Ring Topology",
    "choices": [
      "Star Topology",
      "Mesh Topology",
      "Ring Topology",
      "Tree Topology"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is the type of topology where it has a root node and all other nodes are connected to it forming a hierarchy?",
    "answer": "Tree Topology",
    "choices": [
      "Star Topology",
      "Mesh Topology",
      "Ring Topology",
      "Tree Topology"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is the type of topology is also called hierarchical topology?",
    "answer": "Tree Topology",
    "choices": [
      "Star Topology",
      "Mesh Topology",
      "Ring Topology",
      "Tree Topology"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "How many levels should a tree topology have at least?",
    "answer": "3 levels",
    "choices": [
      "3 levels",
      "2 levels",
      "1 level",
      "4 levels"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Which topology best describes the advantage?<BR>Advantage: Multiple star networks can be quickly combined, facilitating network expansion.",
    "answer": "Tree Topology",
    "choices": [
      "Hybrid Topology",
      "Mesh Topology",
      "Ring Topology",
      "Tree Topology"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Which topology best describes the disadvantage?<BR>Disadvantage: A fault on a node at a higher layer is more severe.",
    "answer": "Tree Topology",
    "choices": [
      "Hybrid Topology",
      "Mesh Topology",
      "Ring Topology",
      "Tree Topology"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is the type of topology where each node or device has a point-to-point connection to other nodes or devices, ensuring that all network nodes are connected?",
    "answer": "Mesh Topology",
    "choices": [
      "Hybrid Topology",
      "Mesh Topology",
      "Partial Mesh Topology",
      "Star Tolopogy"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is the type of topology where some systems are connected in the same fashion as mesh topology, but other devices are only connected to two or three devices?",
    "answer": "Partial Mesh Topology",
    "choices": [
      "Partial Mesh Topology",
      "Full Mesh Topology",
      "Hybrid Mesh Topology",
      "Linear Mesh Topology"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Which topology best describes the advantage?<BR>Advantage: The cost of this topology is lower than that of a full-mesh network",
    "answer": "Partial Mesh Topology",
    "choices": [
      "Partial Mesh Topology",
      "Full Mesh Topology",
      "Hybrid Mesh Topology",
      "Linear Mesh Topology"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Which topology best describes the disadvantage?<BR>Disadvantage: The reliability of this network is lower than that of a full-mesh network.",
    "answer": "Partial Mesh Topology",
    "choices": [
      "Partial Mesh Topology",
      "Full Mesh Topology",
      "Hybrid Mesh Topology",
      "Linear Mesh Topology"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is the type of topology where each node or device is connected?",
    "answer": "Full Mesh Topology",
    "choices": [
      "Partial Mesh Topology",
      "Full Mesh Topology",
      "Hybrid Mesh Topology",
      "Linear Mesh Topology"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Which topology best describes the advantage?<BR>Advantage: It has high reliability and high communication efficiency.",
    "answer": "Full Mesh Topology",
    "choices": [
      "Partial Mesh Topology",
      "Full Mesh Topology",
      "Hybrid Mesh Topology",
      "Linear Mesh Topology"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Which topology best describes the disadvantage?<BR>Disadvantage: Each node requires a large number of physical ports and interconnection cables. As a result, the cost is high, and it is difficult to expand.",
    "answer": "Full Mesh Topology",
    "choices": [
      "Partial Mesh Topology",
      "Full Mesh Topology",
      "Hybrid Mesh Topology",
      "Linear Mesh Topology"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is the type of topology where it consists of a mix of two (2) different types of topologies merging as one network?",
    "answer": "Hybrid Topology",
    "choices": [
      "Hybrid Topology",
      "Fusion Topology",
      "Mutant Topology",
      "Full Mesh Alchemy Topology"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "In actual networking, multiple types of topologies may be combined based on the cost, communication efficiency, and reliability requirements.",
    "answer": "THE STATEMENT IS TRUE .",
    "choices": [
      "THE STATEMENT IS TRUE .",
      "THE STATEMENT IS FALSE ."
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is an end device in a data communication system?",
    "answer": "Terminal Device",
    "choices": [
      "Network Topologies",
      "OSI Model",
      "Terminal Device",
      "Wireless Device"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What provides the necessary functions required for user access protocol operations?",
    "answer": "Terminal Device",
    "choices": [
      "Network Topologies",
      "OSI Model",
      "Terminal Device",
      "Wireless Device"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Which is not an example of data terminal equipment?",
    "answer": "cables",
    "choices": [
      "phone",
      "printers",
      "handsets",
      "cables"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is a key component that directly connects to a device, enabling access to a network such as the internet or a local network?",
    "answer": "Network interface card",
    "choices": [
      "Network interface card",
      "Data terminal equipment",
      "internet service provider",
      "Access controller"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is the device closest to end-users, used to access the network and switch data frames?",
    "answer": "Switch",
    "choices": [
      "Router",
      "Switch",
      "Firewall",
      "WLAN"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What switches belonging to the access layer are usually Layer 2?",
    "answer": "Ethernet switches",
    "choices": [
      "Ethernet switches",
      "Eternal Switches",
      "External Switches",
      "Broadcast Domain"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is a set of nodes that can receive broadcast packets from a node?",
    "answer": "broadcast domain",
    "choices": [
      "ethernet switches",
      "broadcast domain",
      "internet service provider",
      "fit access point"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Which function cannot be implemented by the Ethernet switch?",
    "answer": "translate signals connected to the local devices",
    "choices": [
      "translate signals connected to the local devices",
      "data frame switching",
      "access to end-user devices",
      "basic security functions"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is a network-layer device that forwards data packets on the Internet?",
    "answer": "Router",
    "choices": [
      "Router",
      "Switch",
      "Firewall",
      "Modem"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is a device that connects a network to the Internet?",
    "answer": "Modem",
    "choices": [
      "Router",
      "Switch",
      "Firewall",
      "Modem"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What takes signals from your Internet service provider and translates them into signals connected to the local devices",
    "answer": "Modem",
    "choices": [
      "Router",
      "Switch",
      "Firewall",
      "Modem"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is a term for a router that provides functions such as protocol conversion, route selection, and data exchange when networks using different architectures or protocols communicate with each other?",
    "answer": "Gateway",
    "choices": [
      "Gateway",
      "Portal",
      "IP Address",
      "Connection"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is a network security device used to ensure secure communication between two networks?",
    "answer": "Firewall",
    "choices": [
      "Firewall",
      "Gateway",
      "Antivirus",
      "Framework"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What monitors, restricts, and modifies data flows passing through it to shield information, structure, and running status of internal networks?",
    "answer": "Firewall",
    "choices": [
      "Firewall",
      "Gateway",
      "Antivirus",
      "Framework"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is located between two (2) networks with different trust levels (for example, between an intranet and the Internet)?",
    "answer": "Firewall",
    "choices": [
      "Firewall",
      "Gateway",
      "Antivirus",
      "Framework"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What controls the communication between the two networks and forcibly implements unified security policies to prevent unauthorized access to important information resources?",
    "answer": "Firewall",
    "choices": [
      "Firewall",
      "Gateway",
      "Antivirus",
      "Framework"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is a network that uses radio waves, laser, and infrared signals to replace some or all transmission media in a wired LAN?",
    "answer": "Wireless Devices",
    "choices": [
      "Wireless Devices",
      "Terminal Devices",
      "Wired Devices",
      "Infrared"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "On what standard is common WiFi, a WLAN technology, based?",
    "answer": "IEEE 802.11 family",
    "choices": [
      "IEEE 802.11 family",
      "Vongola family",
      "IEEE 801.11 family",
      "IP 802.11 family"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What applies to homes, works independently, needs to be configured separately, and has simple functions and low costs?",
    "answer": "Fat Access Point",
    "choices": [
      "Fat Access Point",
      "Fit Access Point",
      "Access Controller",
      "Local Area Network"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What applies to medium- and large-sized enterprises, needs to work with the AC (Access Controller), and is managed and configured by the AC?",
    "answer": "Fit Access Point",
    "choices": [
      "Fat Access Point",
      "Fit Access Point",
      "Internet service provider",
      "Local Area Network"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is generally deployed at the aggregation layer of a network?",
    "answer": "Access Controller",
    "choices": [
      "Fat Access Point",
      "Fit Access Point",
      "Access Controller",
      "Local Area Network"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What provides wireless data control services with large capacity, high performance, high reliability, easy installation, and easy maintenance?",
    "answer": "Access Controller",
    "choices": [
      "Fat Access Point",
      "Fit Access Point",
      "Access Controller",
      "Local Area Network"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What generally covers an area of a few square kilometers?",
    "answer": "Local Area Network",
    "choices": [
      "Local Area Network",
      "Metropolitan Area Network",
      "Wide Area Network",
      "Fat Access Point"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Its main function is to connect several terminals that are close to each other (within a family, within one or more buildings, within a campus, for example).",
    "answer": "Local Area Network",
    "choices": [
      "Local Area Network",
      "Metropolitan Area Network",
      "Wide Area Network",
      "Fat Access Point"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Ethernet and Wi-Fi are examples of which Network?",
    "answer": "Local Area Network",
    "choices": [
      "Local Area Network",
      "Metropolitan Area Network",
      "Wide Area Network",
      "Fat Access Point"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What requires high costs but can provide a higher transmission rate, improves the transmission media in LANs, and expands the access scope of LANs (able to cover a university campus or city)?",
    "answer": "Metropolitan Area Network",
    "choices": [
      "Local Area Network",
      "Metropolitan Area Network",
      "Wide Area Network",
      "Fat Access Point"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is also called a large-sized LAN?",
    "answer": "Metropolitan Area Network",
    "choices": [
      "Local Area Network",
      "Metropolitan Area Network",
      "Wide Area Network",
      "Fat Access Point"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Its main function is to connect hosts, databases, and LANs at different locations in the same city.",
    "answer": "Metropolitan Area Network",
    "choices": [
      "Local Area Network",
      "Metropolitan Area Network",
      "Wide Area Network",
      "Fat Access Point"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Ethernet (10Gbit/s or 100 Gbit/s) and WiMax are examples of which Network?",
    "answer": "Metropolitan Area Network",
    "choices": [
      "Local Area Network",
      "Metropolitan Area Network",
      "Wide Area Network",
      "Fat Access Point"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What generally covers an area of several kilometers or larger (thousands of kilometers for example)?",
    "answer": "Wide Area Network",
    "choices": [
      "Local Area Network",
      "Metropolitan Area Network",
      "Wide Area Network",
      "Fat Access Point"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What mainly used to connect several LANs or MANs that are far from each other (for example, across cities or countries)?",
    "answer": "Wide Area Network",
    "choices": [
      "Local Area Network",
      "Metropolitan Area Network",
      "Wide Area Network",
      "Fat Access Point"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Telecom operators' communication lines use HDLC and PPP.",
    "answer": "THE STATEMENT IS TRUE .",
    "choices": [
      "THE STATEMENT IS TRUE .",
      "THE STATEMENT IS FALSE ."
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is a descriptive network scheme?",
    "answer": "OSI Model",
    "choices": [
      "OSI Model",
      "Terminal Devices",
      "Wireless Devices",
      "TCP/IP Model"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What describes the process of information or data traveling from application programs through a network medium to another application program located on another network?",
    "answer": "OSI Model",
    "choices": [
      "OSI Model",
      "Terminal Devices",
      "Wireless Devices",
      "TCP/IP Model"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is the OSI layer that is closest to the user?",
    "answer": "Application Layer",
    "choices": [
      "Application Layer",
      "Presentation Layer",
      "Session Layer",
      "Physical Layer"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What layer provides network services to the user’s applications such as spreadsheet programs, word processing programs, and bank terminal programs?",
    "answer": "Application Layer",
    "choices": [
      "Application Layer",
      "Presentation Layer",
      "Session Layer",
      "Physical Layer"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What layer establishes the availability of intended communication partners, synchronizes, and establishes agreement on procedures for error recovery and control of data integrity?",
    "answer": "Application Layer",
    "choices": [
      "Application Layer",
      "Presentation Layer",
      "Session Layer",
      "Physical Layer"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What layer ensures that the information that the application layer of one (1) system sends out is readable by the application layer of another system?",
    "answer": "Presentation Layer",
    "choices": [
      "Application Layer",
      "Presentation Layer",
      "Data Link Layer",
      "Physical Layer"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What layer translates between multiple data formats by using a common format. Provides encryption and compression of data.<BR>Examples: JPEG, MPEG, ASCII, HTML?",
    "answer": "Presentation Layer",
    "choices": [
      "Application Layer",
      "Presentation Layer",
      "Data Link Layer",
      "Physical Layer"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What layer defines how to start, control and end conversations between applications, and also synchronizes dialogue between two (2) hosts’ presentation layers and manages their data exchange",
    "answer": "Session Layer",
    "choices": [
      "Transport Layer",
      "Session Layer",
      "Data Link Layer",
      "Physical Layer"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What layer regulates information flow to ensure end-to-end connectivity between host applications reliably and accurately?",
    "answer": "Transport Layer",
    "choices": [
      "Transport Layer",
      "Presentation Layer",
      "Data Link Layer",
      "Physical Layer"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What layer segments data from the sending host’s system and reassembles the data into a data stream on the receiving host’s system?",
    "answer": "Transport Layer",
    "choices": [
      "Transport Layer",
      "Presentation Layer",
      "Data Link Layer",
      "Physical Layer"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What layer defines end-to-end delivery of packets?",
    "answer": "Network Layer",
    "choices": [
      "Transport Layer",
      "Network Layer",
      "Data Link Layer",
      "Physical Layer"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What layer defines how routing works (identifying endpoints) and how routes are learned so that the packets can be delivered?",
    "answer": "Network Layer",
    "choices": [
      "Transport Layer",
      "Network Layer",
      "Data Link Layer",
      "Physical Layer"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What layer defines how to fragment a packet into smaller packets to accommodate different media?<BR>Examples: Routers operate at Layer 3 - IP, IPX, AppleTalk.",
    "answer": "Network Layer",
    "choices": [
      "Transport Layer",
      "Network Layer",
      "Data Link Layer",
      "Physical Layer"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What layer provides access to the networking media and physical transmission across the media and this enables the data to locate its intended destination on a network?",
    "answer": "Data Link Layer",
    "choices": [
      "Transport Layer",
      "Network Layer",
      "Data Link Layer",
      "Session Layer"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What layer provides reliable transit of data across a physical link by using the Media Access Control (MAC) addresses?",
    "answer": "Data Link Layer",
    "choices": [
      "Transport Layer",
      "Network Layer",
      "Data Link Layer",
      "Session Layer"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What layer is concerned with network topology, network access, error notification, ordered delivery of frames, and flow control?<BR>Examples: Ethernet, Frame Relay, FDDI",
    "answer": "Data Link Layer",
    "choices": [
      "Transport Layer",
      "Network Layer",
      "Data Link Layer",
      "Session Layer"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What layer deals with the physical characteristics of the transmission medium?",
    "answer": "Physical Layer",
    "choices": [
      "Application Layer",
      "Presentation Layer",
      "Data Link Layer",
      "Physical Layer"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What layer defines the electrical, mechanical, procedural, and functional specifications for achieving, maintaining, and deactivating the physical link between end systems?",
    "answer": "Physical Layer",
    "choices": [
      "Application Layer",
      "Presentation Layer",
      "Data Link Layer",
      "Physical Layer"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What layer defines such characteristics as voltage levels, the timing of voltage changes, physical data rates, maximum transmission distances, physical connectors, and other similar attributes?<BR>Examples: EIR/TIA-232, RJ45, NRZ.",
    "answer": "Physical Layer",
    "choices": [
      "Application Layer",
      "Presentation Layer",
      "Data Link Layer",
      "Physical Layer"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is a networking model with a set of communication protocols for the Internet and similar networks?",
    "answer": "TCP/IP Model",
    "choices": [
      "OSI Model",
      "Terminal Devices",
      "Wireless Devices",
      "TCP/IP Model"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "OSI Model is commonly known as TCP/IP because its Transmission Control Protocol and Internet Protocol (IP) were the first networking protocols defined in this model?",
    "answer": "THE STATEMENT IS FALSE .",
    "choices": [
      "THE STATEMENT IS TRUE .",
      "THE STATEMENT IS FALSE ."
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What provides basic communication in TCP/IP Model?",
    "answer": "Internet Protocol",
    "choices": [
      "Internet Protocol",
      "Transmission Control Protocol"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What provides key functions that applications need in TCP/IP Model?",
    "answer": "Transmission Control Protocol",
    "choices": [
      "Internet Protocol",
      "Transmission Control Protocol"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What layer in TCP/IP Model represents an interface through a variety of protocols that enable services to be applied to end-user application processes?",
    "answer": "Application Layer",
    "choices": [
      "Application Layer",
      "Transport Layer",
      "Internet Layer",
      "Network Access Layer"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What layer in the TCP/IP model includes services such as handling high-level protocols, issuing representations, encoding, and dialog control?",
    "answer": "Application Layer",
    "choices": [
      "Application Layer",
      "Transport Layer",
      "Internet Layer",
      "Network Access Layer"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What layer in the TCP/IP model is responsible for reliable end-to-end data delivery from the source host to the destination host?",
    "answer": "Transport Layer",
    "choices": [
      "Application Layer",
      "Transport Layer",
      "Internet Layer",
      "Network Access Layer"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What layer in the TCP/IP model is responsible for the delivery of service requests that respond from the transport layer and have them arrive at their destination through the “virtual network” image of the Internet?",
    "answer": "Internet Layer",
    "choices": [
      "Application Layer",
      "Transport Layer",
      "Internet Layer",
      "Network Access Layer"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What layer in the TCP/IP model is also called the host-to-network layer, which is concerned with all of the issues that an IP packet requiresto make a physical link to the network media?",
    "answer": "Network Access Layer",
    "choices": [
      "Application Layer",
      "Transport Layer",
      "Internet Layer",
      "Network Access Layer"
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "The network interface layer functions include mapping the IP addresses to physical hardware addresses and encapsulation of IP packets.",
    "answer": "THE STATEMENT IS TRUE .",
    "choices": [
      "THE STATEMENT IS TRUE .",
      "THE STATEMENT IS FALSE ."
    ],
    "reference": "02 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Which layer in the OSI model is considered Layer 7?",
    "answer": "Application Layer",
    "choices": [
      "Application Layer",
      "Transport Layer",
      "Physical Layer",
      "Session Layer"
    ]
  },
  {
    "question": "Which layer in the OSI model is considered Layer 6?",
    "answer": "Presentation Layer",
    "choices": [
      "Presentation Layer",
      "Session Layer",
      "Transport Layer",
      "Physical Layer"
    ]
  },
  {
    "question": "Which layer in the OSI model is considered Layer 5?",
    "answer": "Session Layer",
    "choices": [
      "Session Layer",
      "Transport Layer",
      "Network Layer",
      "Data Link Layer"
    ]
  },
  {
    "question": "Which layer in the OSI model is considered Layer 4?",
    "answer": "Transport Layer",
    "choices": [
      "Transport Layer",
      "Data Link Layer",
      "Application Layer",
      "Physical Layer"
    ]
  },
  {
    "question": "Which layer in the OSI model is considered Layer 3?",
    "answer": "Network Layer",
    "choices": [
      "Network Layer",
      "Session Layer",
      "Transport Layer",
      "Physical Layer"
    ]
  },
  {
    "question": "Which layer in the OSI model is considered Layer 2?",
    "answer": "Data Link Layer",
    "choices": [
      "Data Link Layer",
      "Transport Layer",
      "Network Layer",
      "Data Link Layer"
    ]
  },
  {
    "question": "Which layer in the OSI model is considered Layer 1?",
    "answer": "Physical Layer",
    "choices": [
      "Physical Layer",
      "Application Layer",
      "Presentation Layer",
      "Transport Layer"
    ]
  }
]