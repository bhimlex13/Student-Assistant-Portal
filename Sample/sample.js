// This is the data for the quiz questions, answers, and choices
var quizData = [
    {
            "question": "Types of communication channel that use optic cable or light pipe that carries the message on a light wave.",
            "image": "./download.jpg",
            "answer": "Optical Media",
            "choices": [
                "Electrical Conductor",
                "Optical Media",
                "Sonars",
                "Wireless Media"
            ]
        },
        {
            "question": "What way of communication shown above?",
            "answer": "Simplex Communication",
            "choices": [
                "Duplex Communication",
                "Half Duplex Communication",
                "Simplex Communication",
                "Analog Communication"
            ]
        },
        {
            "question": "It is a set of electronic components and circuits that accept transmitted messages from the channel and translate them back, which humans understand.",
            "answer": "Receiver",
            "choices": [
                "Transmitter",
                "Receiver",
                "Amplifier",
                "Decoder"
            ]
        },
        {
            "question": "Type of receiver where resonant circuits, combine an inductor and capacitor to make a circuit responsive to a frequency.",
            "answer": "Tuned Circuits",
            "choices": [
                "Amplifiers",
                "Tuned Circuits",
                "Filters",
                "Oscillators"
            ]
        }
    ];



    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            // Generate a random index between 0 and i (inclusive)
            let j = Math.floor(Math.random() * (i + 1));
            // Swap elements at indices i and j
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }


    function shuffleAndCreateQuiz() {
        shuffleArray(quizData); // Shuffle the questions
        currentQuestionIndex = 0; // Optionally, reset to the first question
        createQuiz(); // Re-render the quiz UI
    }
    