// This is the data for the quiz questions, answers, and choices
var quizData = [
  {
    "question": "It consists of two insulated strands of copper wire that are arranged in a regular spiral pattern.",
    "answer": "Twisted-Pair",
    "choices": [
      "Twisted-Pair",
      "Serial",
      "Coaxial",
      "Fiber Optic"
    ],
    "reference": "1 eLMS Activity 1 - ARG",
    "term": "Prelim"
  },
  {
    "question": "It is a connection wherein data flows in one (1) direction only (unidirectional).",
    "answer": "Simplex",
    "choices": [
      "Simplex",
      "Half-duplex",
      "Full-duplex",
      "Complex"
    ],
    "reference": "1 eLMS Activity 1 - ARG",
    "term": "Prelim"
  },
  {
    "question": "It describes the position of the waveform relative to time zero.",
    "answer": "Phase",
    "choices": [
      "Phase",
      "Frequency",
      "Period",
      "Wavelength"
    ],
    "reference": "1 eLMS Activity 1 - ARG",
    "term": "Prelim"
  },
  {
    "question": "Which of the following is NOT a definition of a signal?",
    "answer": "A metallic structure that acts as a transducer.",
    "choices": [
      "A metallic structure that acts as a transducer.",
      "Means of communication.",
      "Communicated information.",
      "Electronics transmitted information."
    ],
    "reference": "1 eLMS Activity 1 - ARG",
    "term": "Prelim"
  },
  {
    "question": "It refers to a vertical distance from a given point on the wave from the horizontal axis.",
    "answer": "Amplitude",
    "choices": [
      "Amplitude",
      "Wave",
      "Wavelength",
      "Phase"
    ],
    "reference": "1 eLMS Activity 1 - ARG",
    "term": "Prelim"
  },
  {
    "question": "It is a connection wherein data simultaneously flows in both directions.",
    "answer": "Full-duplex",
    "choices": [
      "Full-duplex",
      "Simplex",
      "Half-duplex",
      "Complex"
    ],
    "reference": "1 eLMS Activity 1 - ARG",
    "term": "Prelim"
  },
  {
    "question": "It refers to the number of waves made per second or as cycles per second.",
    "answer": "Frequency",
    "choices": [
      "Frequency",
      "Phase",
      "Period",
      "Wavelength"
    ],
    "reference": "1 eLMS Activity 1 - ARG",
    "term": "Prelim"
  },
  {
    "question": "It operates over distances up to 50 feet and has a communication speed equal to 20Kbps.",
    "answer": "Serial",
    "choices": [
      "Serial",
      "Twisted-Pair",
      "Coaxial",
      "Fiber Optic"
    ],
    "reference": "1 eLMS Activity 1 - ARG",
    "term": "Prelim"
  },
  {
    "question": "It is a connection wherein data can flow in both directions, but not simultaneously over a shared physical medium.",
    "answer": "Half-duplex",
    "choices": [
      "Half-duplex",
      "Simplex",
      "Full-duplex",
      "Complex"
    ],
    "reference": "1 eLMS Activity 1 - ARG",
    "term": "Prelim"
  },
  {
    "question": "It refers to the horizontal distance of a wave from a point to the corresponding point on the next wave.",
    "answer": "Wavelength",
    "choices": [
      "Wavelength",
      "Amplitude",
      "Phase",
      "Period"
    ],
    "reference": "1 eLMS Activity 1 - ARG",
    "term": "Prelim"
  },
  {
    "question": "It is the act of transmitting and exchanging information between people",
    "answer": "Communication",
    "choices": [
      "Communication",
      "WIFI",
      "Data",
      "Router"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Refers to communication between terminal devices through a computer network",
    "answer": "Network Communication",
    "choices": [
      "Communication",
      "Internet",
      "Network Communication",
      "Data"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "It's, the Advanced Research Projects Agency Network (ARPAnet), started in 1969.",
    "answer": "Internet",
    "choices": [
      "Network Communication",
      "Data",
      "Internet",
      "WIFI"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Files are transferred between two compters (terminnals) trough a ________________",
    "answer": "Network Cable",
    "choices": [
      "Network Cable",
      "Star topology",
      "Tree topology",
      "Frequency"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Files are transferred among multiple computers (terminnals) trough a ________________",
    "answer": "Router",
    "choices": [
      "Switch",
      "Hub",
      "Router",
      "modem"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "A computer (terminal) downloads files through the_______________",
    "answer": "Internet",
    "choices": [
      "www.",
      "OSI model",
      "Data packets",
      "Internet"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This refers to an event or act, which shows that something exists or that gives information about something.",
    "answer": "Communicated information",
    "choices": [
      "Means of communication",
      "Electronics transmited information",
      "Comunicated inforamtion",
      "Conveyed data information"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This refers to a detectable physical quantity or impulse",
    "answer": "Electronics trasmitted information",
    "choices": [
      "Comunicated inforamtion",
      "Conveyed data information",
      "Means of communication",
      "Electronics transmited information"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This refers to a sign or indication that conveys information about something or that tells someone to do something.",
    "answer": "Means of communication",
    "choices": [
      "Means of communication",
      "Electronics transmited information",
      "Conveyed data information",
      "Comunicated inforamtion"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "The main purpose of the signal is to ensure that the synchronization between the sender and receiver over a physical medium is maintained",
    "answer": "THIS STATEMENT IS TRUE ",
    "choices": [
      "THIS STATEMENT IS TRUE ",
      "THIS STATEMENT IS FALSE "
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Which medium is not included in the signal transmission?",
    "answer": "Haptic",
    "choices": [
      "Acoustic Signals",
      "Haptic",
      "Biological Signals",
      "Noise"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Which is the example based of electrical signal?",
    "answer": "voltages and currents in a circuit",
    "choices": [
      "interference – unwanted and undesired form of signal",
      "audio or speech signals",
      "sequence of bases in a gene",
      "voltages and currents in a circuit"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Which is the example based of acoustic signals?",
    "answer": "audio or speech signals",
    "choices": [
      "interference – unwanted and undesired form of signal",
      "intensity variations in an image",
      "audio or speech signals",
      "intensity variations in an image"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Which is the example based of video signals?",
    "answer": "intensity variations in an image",
    "choices": [
      "sequence of bases in a gene",
      "intensity variations in an image",
      "voltages and currents in a circuit",
      "audio or speech signals"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Which is the example based of noise?",
    "answer": "interference – unwanted and undesired form of signal",
    "choices": [
      "sequence of bases in a gene",
      "interference – unwanted and undesired form of signal",
      "intensity variations in an image",
      "voltages and currents in a circuit"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Which is the example based of biological signals?",
    "answer": "sequence of bases in a gene",
    "choices": [
      "sequence of bases in a gene",
      "intensity variations in an image",
      "interference – unwanted and undesired form of signal",
      "Noise"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "It refers to disturbances in that energy to travel through a medium from one location to another.",
    "answer": "Waves",
    "choices": [
      "Amplitude",
      "Phase",
      "Frequency",
      "Waves"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "It refers to the horizontal distance of a wave from a point to the corresponding point on the next wave. This is measured in meters (m) in SI.",
    "answer": "Wavelength",
    "choices": [
      "Frequency",
      "Wavelength",
      "Waves",
      "Amplitude"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "It refers to a vertical distance from a given point on the wave from the horizontal axis. In layman’s terms, it is the height above and below the x-axis. This is measured in volts, amperes, or watts, depending on the\r\ntype of signal.\r\n",
    "answer": "Amplitude",
    "choices": [
      "Waves",
      "Phase",
      "Amplitude",
      "Frequency"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "It describes the position of the waveform relative to time zero; it is a measurement of the delay of the wave relative to some fixed reference point or another sine wave.",
    "answer": "Phase",
    "choices": [
      "Phase",
      "Frequency",
      "Wavelength",
      "Analog Wave"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "It refers to the number of waves made per second or as cycles per second. It is the reciprocal of the period to complete one (1) wave cycle. The unit for frequency is in Hertz (Hz); 1 Hz means 1 cycle per second (cps).",
    "answer": "Frequency",
    "choices": [
      "Digital Wave",
      "Analog Wave",
      "Frequency",
      "Period"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "This refers to the amount of time (expressed in seconds) required to complete one (1) full cycle.",
    "answer": "Period",
    "choices": [
      "Phase",
      "Amplitude",
      "Period",
      "Frequency"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "It is a wave in which both the amplitude and time continuously vary over their respective intervals that results in a wavy characteristic.",
    "answer": "Analog Wave",
    "choices": [
      "Analog Wave",
      "Digital Wave",
      "Period",
      "Wavelength"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "It is a wave with several discrete (jumpy) states, such as high or low, and on or off. It has fixed amplitude, but its pulse width and frequency can be changed.",
    "answer": "Digital Wave",
    "choices": [
      "Digital Wave",
      "Waves",
      "Wavelength",
      "Period"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Which is are the following is TRUE  about network media",
    "answer": "Computers facilitate information exchange and resource sharing from one location to another through some sort of wiring/cabling or waves that act as a physical path",
    "choices": [
      "Computers facilitate information exchange and resource sharing from one location to another through some sort of wiring/cabling or waves that act as a physical path",
      "to help people communicate more efficiently and create better lives from it",
      "transmission in which data with each bit lining up in a series as the bits are sent over a single wire at a time",
      "to ensure that the synchronization between the sender and receiver over a physical medium is maintained"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Wired or Bounded Media utilize radio waves to convey data",
    "answer": "THIS STATEMENT IS FALSE ",
    "choices": [
      "THIS STATEMENT IS TRUE ",
      "THIS STATEMENT IS FALSE "
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Wired or bounded Media are limited by physical geography",
    "answer": "THIS STATEMENT IS TRUE ",
    "choices": [
      "THIS STATEMENT IS TRUE ",
      "THIS STATEMENT IS FALSE "
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Wirless or Unbounded media do not use any cables in transmitting data",
    "answer": "THIS STATEMENT IS TRUE ",
    "choices": [
      "THIS STATEMENT IS TRUE ",
      "THIS STATEMENT IS FALSE "
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Which is not a transmission mode",
    "answer": "Serial transmission",
    "choices": [
      "Serial transmission",
      "Simplex",
      "Half-duplex",
      "Full-duplex"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What transmission type wherein a group of bits is sent simultaneously, but each uses a different channel",
    "answer": "Parallel transmission",
    "choices": [
      "Serial transmission",
      "Parallel transmission",
      "Full-duplex",
      "Simplex"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What transmission type in which data with each bit lining up in a series as the bits are sent over a single wire at a time",
    "answer": "Serial transmission",
    "choices": [
      "Parallel transmission",
      "Serial transmission",
      "half-duplex",
      "Simplex"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What transmission mode where in data flows in one direction",
    "answer": "Simplex",
    "choices": [
      "Simplex",
      "half-duplex",
      "Parallel transmission",
      "Serial transmission"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What transmission mode either transmit-only or recieve-only",
    "answer": "Simplex",
    "choices": [
      "half-duplex",
      "Full-duplex",
      "Simplex",
      "Parallel transmission"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "It is a connection wherein data can flow in both directions, but not at the same time",
    "answer": "half-duplex",
    "choices": [
      "Serial transmission",
      "half-duplex",
      "Full-duplex",
      "Simplex"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What transmission mode wherein data simutaneously flows in both directions",
    "answer": "Full-duplex",
    "choices": [
      "Serial transmission",
      "Simplex",
      "half-duplex",
      "Full-duplex"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Serial Cable The most widely used standard for serial data communications",
    "answer": "THIS STATEMENT IS TRUE ",
    "choices": [
      "THIS STATEMENT IS TRUE ",
      "THIS STATEMENT IS FALSE "
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Serial Cable is intend to operate in what parameters",
    "answer": "Distances of up to 50 feet and has a communication speed that is equal to or less than 20Kbps",
    "choices": [
      "Distances of up to 100 meters and has a communication speed that is equal to or less than 20Mps",
      "Distances of up to 50 feet and has a communication speed that is equal to or less than 20Kbps",
      "Distances of up to 120 feet and has a communication speed that is equal to or less than 40Kbps",
      "Distances of up to 50 meters and has a communication speed that is equal to or less than 20kps"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is a coaxial cable",
    "answer": "conductors enclosed by an insulating protective coating",
    "choices": [
      "optic cable type allows light waves to travel into numerous paths through",
      "wireless medium that is used for multicast communications",
      "two (2)conductors enclosed by an insulating protective coating",
      "eight (8) individual copper wires that is twisted"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "It is type coacial calble that is flexable about 0.25 inches thick.",
    "answer": "Thinnet",
    "choices": [
      "UTP",
      "STP",
      "Thinnet",
      "Thicknet"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "It is a type of coaxial cable relatively rigid about 0.5 inches in diameter",
    "answer": "Thicknet",
    "choices": [
      "Thicknet",
      "Thinnet",
      "STP",
      "UTP"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Thin (Thinnet) Cable uses British Naval Connector (BNC)-T cable conWhat is nector attached to LAN Card (NIC)",
    "answer": "THIS STATEMENT IS TRUE ",
    "choices": [
      "THIS STATEMENT IS TRUE ",
      "THIS STATEMENT IS FALSE "
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Thick (Thicknet) Cable uses vampire tap or piercing tap as connectors",
    "answer": "THIS STATEMENT IS TRUE ",
    "choices": [
      "THIS STATEMENT IS TRUE ",
      "THIS STATEMENT IS FALSE "
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Fiber Optic Cable refers to a bundle of thick and oval shaped glass",
    "answer": "THIS STATEMENT IS FALSE ",
    "choices": [
      "THIS STATEMENT IS TRUE ",
      "THIS STATEMENT IS FALSE "
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Fiber Optic Cable can conduct modulated light transmissions",
    "answer": "THIS STATEMENT IS TRUE ",
    "choices": [
      "THIS STATEMENT IS TRUE ",
      "THIS STATEMENT IS FALSE "
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Fiber Optic Cable is a bundle of extremely thin and cylindrically shaped glass fibers surrounded by a concentric layer of glass coating",
    "answer": "THIS STATEMENT IS TRUE ",
    "choices": [
      "THIS STATEMENT IS TRUE ",
      "THIS STATEMENT IS FALSE "
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is twisted pair cable",
    "answer": "Consists of two insulated strands of copper wire that are arranged in a regular spiral pattern",
    "choices": [
      "wireless medium that is used for multicast communications",
      "Aminiature quick connect / disconnect radio frequency connector used for coaxial cable",
      "Consists of two insulated strands of copper wire that are arranged in a regular spiral pattern",
      "It involve narrow columns of stockinette stitches twisting or crossing over each other every couple of row"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Which of the following statements best describes the key difference between Unshielded Twisted-Pair (UTP) and Shielded Twisted-Pair (STP) cables?",
    "answer": "UTP cables contain no shielding, while STP cables incorporate metallic foil wrapping to reduce electromagnetic interference.",
    "choices": [
      "UTP cables have a metallic foil wrapping around each pair of copper wires, while STP cables do not.",
      "UTP cables utilize cancellation techniques to minimize signal degradation, while STP cables rely solely on shielding.",
      "UTP cables contain no shielding, while STP cables incorporate metallic foil wrapping to reduce electromagnetic interference.",
      "UTP cables have a greater number of individual copper wires compared to STP cables."
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Which best describe Shielded Twisted pair(STP) Cable",
    "answer": "twisted pair cable that combines the techniques of twisting wires, cancellation, and shielding",
    "choices": [
      "It ensure stability by reducing magnetic interference",
      "It protects the four paired signal carrying wires",
      "two conductors of a single circuit are twisted together",
      "twisted pair cable that combines the techniques of twisting wires, cancellation, and shielding"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Which part of the fiber optic cable refers to the innermost section that consists of one (1) or more very thin strands",
    "answer": "Core",
    "choices": [
      "Cable Jacket (Sheath)",
      "Cladding",
      "Coating",
      "Core"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "It's a part of the fiber optic cable that surrounds and traps the light in the core by the principle of total internal reflection.",
    "answer": "Cladding",
    "choices": [
      "Coating",
      "Core",
      "Cladding",
      "Cable Jacket (Sheath)"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "A plastic that helps to shield the core and cladding from damage.",
    "answer": "Coating",
    "choices": [
      "Coating",
      "Cable Jacket (Sheath)",
      "Strengthening Fibers",
      "Cladding"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "It stands as protection for the core against compressive forces or crushing and tension or excessive pulling.",
    "answer": "Strengthening Fibers",
    "choices": [
      "Cable Jacket (Sheath)",
      "Strengthening Fibers",
      "Cladding",
      "Core"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "it is outermost layer that protects a buffer or a bundle of buffer- coated fibers against moisture, abrasion, crushing, and other environmental dangers.",
    "answer": "Cable Jacket (Sheath)",
    "choices": [
      "Strengthening Fibers",
      "Cladding",
      "Cable Jacket (Sheath)",
      "Core"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "It refers to a wireless medium that is used for multicast communications",
    "answer": "Radio wave",
    "choices": [
      "Transmitting cable",
      "Radio wave",
      "Access points",
      "antenna"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "It is a metallic structure that acts as a transducer that converts electrical energy to electromagnetic energy, it also known as aerial",
    "answer": "antenna",
    "choices": [
      "Radio wave",
      "Access points",
      "antenna",
      "Transmitting cable"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "The word attenuation refers the stregtg of a signal brodcast(dBmV/m)",
    "answer": "THIS STATEMENT IS FALSE ",
    "choices": [
      "THIS STATEMENT IS TRUE ",
      "THIS STATEMENT IS FALSE "
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "Crosstalk refers to the twisted-wire pairs producing a magnetic field cancellation effect, which limits signal degradation.",
    "answer": "THIS STATEMENT IS TRUE ",
    "choices": [
      "THIS STATEMENT IS TRUE ",
      "THIS STATEMENT IS FALSE "
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is a method by which radio waves travel from the transmitting antenna to the receiving antenna?",
    "answer": "Line of Sight",
    "choices": [
      "Line of Sight",
      "Ground Wave",
      "SkyWave",
      "Space Wave"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is a method by which radio waves are radiated directly towards the earth’s surface?",
    "answer": "Ground Wave",
    "choices": [
      "Line of Sight",
      "Ground Wave",
      "SkyWave",
      "Space Wave"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is a worldwide communications with a frequency that ranges from 3 to 30 kHz and 30 to 300 kHz?",
    "answer": "Ground Wave",
    "choices": [
      "Line of Sight",
      "Ground Wave",
      "SkyWave",
      "Space Wave"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is a broadcasting with a frequency that ranges from 300 kHz to 3 MHz?",
    "answer": "Ground Wave",
    "choices": [
      "Line of Sight",
      "Ground Wave",
      "SkyWave",
      "Space Wave"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is a method by which radio waves radiate upwards from the transmitting antenna of the earth into a direction towards the ionosphere?",
    "answer": "SkyWave",
    "choices": [
      "Line of Sight",
      "Ground Wave",
      "SkyWave",
      "Space Wave"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is used for long-distance radiotelephony and sound broadcasting with a frequency that ranges from 3 MHz to 30 MHz?",
    "answer": "SkyWave",
    "choices": [
      "Line of Sight",
      "Ground Wave",
      "SkyWave",
      "Space Wave"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is a method by which radio waves radiation exceeds 30 MHz up to 300 GHz?",
    "answer": "Space Wave",
    "choices": [
      "Line of Sight",
      "Ground Wave",
      "SkyWave",
      "Space Wave"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is used for sound/television broadcasting for radio-relay systems and for various mobile systems that operate at a frequency that ranges from 30 to 300 MHz, 300 MHz to 3 GHz, and 3 to 30 GHz?",
    "answer": "Space Wave",
    "choices": [
      "Line of Sight",
      "Ground Wave",
      "SkyWave",
      "Space Wave"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What refers to a wireless medium that is used for short-range communication?<BR>Examples: remote control devices, intruder alarms, infra-red photography, and radiant heaters",
    "answer": "Infrared",
    "choices": [
      "Infrared",
      "Microwave",
      "Bluetooth",
      "ShareIt"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is achieved using transmitters/receivers (transceivers) that modulate non-coherent ______ light.",
    "answer": "Infrared",
    "choices": [
      "Infrared",
      "Microwave",
      "Bluetooth",
      "Wifi"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What refers to a wireless medium that is used for unicast communication such as wireless PAN (Bluetooth), broadband wireless access or wireless MAN (WiMAX), wireless WAN (2G/3G cellular networks), satellite networks and radar, and wireless LANs (Wi-Fi)?",
    "answer": "Microwave",
    "choices": [
      "Infrared",
      "Microwave",
      "Bluetooth",
      "Wifi"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What is a short-range wireless communication technology that allows devices such as mobile phones, computers, and peripherals to transmit data or voice wirelessly over a short distance?",
    "answer": "Bluetooth",
    "choices": [
      "Infrared",
      "Microwave",
      "Bluetooth",
      "Radiowave"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  },
  {
    "question": "What uses the same 2.4GHz frequency as some other wireless technologies in the home or office?",
    "answer": "Bluetooth",
    "choices": [
      "Infrared",
      "Microwave",
      "Bluetooth",
      "Radiowave"
    ],
    "reference": "01 Handout 1",
    "term": "Prelim"
  }
]