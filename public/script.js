  const questions = {
    round1: [
        {
            question: "Which type of Programming does Python support?",
            answers: [
                "object-oriented programming",
                "structured programming",
                "functional programming",
                "all of the mentioned"
            ],
            correct: "all of the mentioned"
        },
        {
            question: "Which of the following is used to define a block of code in Python language?",
            answers: ["Indentation", "Key", "Brackets", "All of the mentioned"],
            correct: "Indentation"
        },
        {
            question: "Which of the following is the truncation division operator in Python?",
            answers: ["|", "//", "/", "%"],
            correct: "//"
        },
        {
            question: "Which of the following is not a core data type in Python programming?",
            answers: ["Tuples", "Lists", "Class", "Dictionary"],
            correct: "Class"
        },
        {
            question: "Which of the following is the correct syntax of including a user-defined header file in C++?",
            answers: [
                "#include [userdefined]",
                "#include “userdefined”",
                "#include <userdefined.h>",
                "#include <userdefined>"
            ],
            correct: "#include “userdefined”"
        },
        {
            question: "Which of the following is a correct identifier in C++?",
            answers: ["VAR_1234", "$var_name", "7VARNAME", "7var_name"],
            correct: "VAR_1234"
        },
        {
            question: "Which of the following type is provided by C++ but not C?",
            answers: ["double", "float", "int", "bool"],
            correct: "bool"
        },
        {
            question: "Which is more effective while calling the C++ functions?",
            answers: ["call by object", "call by pointer", "call by value", "call by reference"],
            correct: "call by reference"
        },
        {
            question: "Who is the father of C language?",
            answers: ["Steve Jobs", "James Gosling", "Dennis Ritchie", "Rasmus Lerdorf"],
            correct: "Dennis Ritchie"
        },
        {
            question: "Which of the following is not a valid C variable name?",
            answers: ["int number;", "float rate;", "int variable_count;", "int $main;"],
            correct: "int $main;"
        },
        {
            question: "Which of the following cannot be a variable name in C?",
            answers: ["volatile", "true", "friend", "export"],
            correct: "volatile"
        },
        {
            question: "What is an example of iteration in C?",
            answers: ["for", "while", "do-while", "all of the mentioned"],
            correct: "all of the mentioned"
        },
        {
            question: "Which component is used to compile, debug, and execute the Java programs?",
            answers: ["JRE", "JIT", "JDK", "JVM"],
            correct: "JDK"
        },
        {
            question: "Which of the following is a superclass of every class in Java?",
            answers: ["ArrayList", "Abstract class", "Object class", "String"],
            correct: "Object class"
        },
        {
            question: "Which of these keywords are used for the block to be examined for exceptions?",
            answers: ["check", "throw", "catch", "try"],
            correct: "try"
        }
    ],
    round2: [
        {
            question: "What is the maximum possible length of an identifier in Python?",
            answers: ["79 characters", "31 characters", "63 characters", "none of the mentioned"],
            correct: "none of the mentioned"
        },
        {
            question: "Which of the following is a Python tuple?",
            answers: ["{1, 2, 3}", "{}", "[1, 2, 3]", "(1, 2, 3)"],
            correct: "(1, 2, 3)"
        },
        {
            question: "What is the output of print(math.pow(3, 2))?",
            answers: ["9.0", "None", "9", "None of the mentioned"],
            correct: "9.0"
        },
        {
            question: "What will be the output of the following Python expression? round(4.576)",
            answers: ["4", "4.6", "5", "4.5"],
            correct: "5"
        },
        {
            question: "Which keyword is used to define the macros in C++?",
            answers: ["#macro", "#define", "macro", "define"],
            correct: "#define"
        },
        {
            question: "Which of the following symbol is used to declare the preprocessor directives in C++?",
            answers: ["$", "^", "#", "*"],
            correct: "#"
        },
        {
            question: "Which of the following constructors are provided by the C++ compiler if not defined in a class?",
            answers: [
                "Copy constructor",
                "Default constructor",
                "Copy Assignment Operator",
                "All of the mentioned"
            ],
            correct: "All of the mentioned"
        },
        {
            question: "Which exception is thrown by dynamic_cast?",
            answers: ["bad_cast", "bad_typeid", "bad_exception", "bad_alloc"],
            correct: "bad_cast"
        },
        {
            question: "Which of the following is not a valid C variable name?",
            answers: ["int number;", "float rate;", "int variable_count;", "int $main;"],
            correct: "int $main;"
        },
        {
            question: "Which of the following typecasting is accepted by C language?",
            answers: [
                "Widening conversions",
                "Narrowing conversions",
                "Widening & Narrowing conversions",
                "None of the mentioned"
            ],
            correct: "Widening & Narrowing conversions"
        },
        {
            question: "Which of the following is not accepted in C?",
            answers: [
                "static a = 10; //static as",
                "static int func (int); //parameter as static",
                "static static int a; //a static variable prefixed with static",
                "all of the mentioned"
            ],
            correct: "all of the mentioned"
        },
        {
            question: "What is #include <stdio.h>?",
            answers: [
                "Preprocessor directive",
                "Inclusion directive",
                "File inclusion directive",
                "None of the mentioned"
            ],
            correct: "Preprocessor directive"
        },
        {
            question: "Which of the below is not a Java Profiler?",
            answers: ["JProfiler", "Eclipse Profiler", "JVM", "JConsole"],
            correct: "JVM"
        },
        {
            question: "Which one of the following is not an access modifier?",
            answers: ["Protected", "Void", "Public", "Private"],
            correct: "Void"
        },
        {
            question: "What is the numerical range of a char data type in Java?",
            answers: ["0 to 256", "-128 to 127", "0 to 65535", "0 to 32767"],
            correct: "0 to 65535"
        }
    ],
     
     round3: [
    {
        question: "What will be the output of the following Python program?\n\ni = 0\nwhile i < 5:\n    print(i)\n    i += 1\n    if i == 3:\n        break\nelse:\n    print(0)",
        answers: ["error", "0 1 2 0", "0 1 2", "none of the mentioned"],
        correct: "0 1 2"
    },
    {
        question: "What will be the output of the following Python code?\n\nlist1 = [1, 3]\nlist2 = list1\nlist1[0] = 4\nprint(list2)",
        answers: ["[1, 3]", "[1, 3, 4]", "[4, 3]", "[1, 3]"],
        correct: "[4, 3]"
    },
    {
        question: "What will be the output of the following Python code?\n\nx = 'abcd'\nfor i in range(len(x)):\n    print(i)",
        answers: ["error", "1 2 3 4", "a b c d", "0 1 2 3"],
        correct: "0 1 2 3"
    },
    {
        question: "What will be the output of the following Python code?\n\nx = [[0], [1]]\nprint((' '.join(list(map(str, x))),))",
        answers: ["01", "[0] [1]", "(’01’)", "('[0] [1]',)"],
        correct: "('[0] [1]',)"
    },
    {
        question: "What will be the output of the following C++ code?\n\n#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n\tchar s1[6] = \"Hello\";\n\tchar s2[6] = \"World\";\n\tchar s3[12] = s1 + \" \" + s2;\n\tcout<<s3;\n\treturn 0;\n}",
        answers: ["Hello", "World", "Error", "Hello World"],
        correct: "Hello World"
    },
    {
        question: "What is the value of p in the following C++ code snippet?\n\n#include <iostream>\nusing namespace std;\nint main() {\n    int p;\n    bool a = true;\n    bool b = false;\n    int x = 10;\n    int y = 5;\n    p = ((x | y) + (a + b));\n    cout << p;\n    return 0;\n}",
        answers: ["12", "0", "2", "16"],
        correct: "12"
    },
    {
        question: "What will be the output of the following C++ code?\n\n#include <iostream>\nusing namespace std;\nint main() {\n    char c = 74;\n    cout << c;\n    return 0;\n}",
        answers: ["I", "J", "A", "N"],
        correct: "J"
    },
    {
        question: "What will be the output of the following C++ code?\n\n#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5;\n    float b;\n    cout << sizeof(++a + b);\n    cout << a;\n    return 0;\n}",
        answers: ["2 5", "4 5", "4 6", "2 6"],
        correct: "4 6"
    },
    {
        question: "What will be the output of the following C code?\n\n#include <stdio.h>\nint main() {\n    signed char chr;\n    chr = 128;\n    printf(\"%d\\n\", chr);\n    return 0;\n}",
        answers: ["128", "-128", "Depends on the compiler", "None of the mentioned"],
        correct: "-128"
    },
    {
        question: "What will be the output of the following C code on a 64-bit machine?\n\n#include <stdio.h>\nunion Sti {\n    int nu;\n    char m;\n};\nint main() {\n    union Sti s;\n    printf(\"%d\", sizeof(s));\n    return 0;\n}",
        answers: ["8", "5", "9", "4"],
        correct: "8"
    },
    {
        question: "What will be the output of the following C code considering the size of a short int is 2, char is 1 and int is 4 bytes?\n\n#include <stdio.h>\nint main() {\n    short int i = 20;\n    char c = 97;\n    printf(\"%d, %d, %d\\n\", sizeof(i), sizeof(c), sizeof(c + i));\n    return 0;\n}",
        answers: ["2, 1, 2", "2, 1, 1", "2, 1, 4", "2, 2, 8"],
        correct: "2, 1, 4"
    },
    {
        question: "What will be the output of the following C code snippet?\n\n#include <stdio.h>\nvoid main() {\n    1 < 2 ? return 1: return 2;\n}",
        answers: ["returns 1", "returns 2", "Varies", "Compile time error"],
        correct: "Compile time error"
    },
    {
        question: "What will be the output of the following Java code?\n\nclass increment {\n    public static void main(String args[]) {\n        int g = 3;\n        System.out.print(++g * 8);\n    } \n}",
        answers: ["32", "33", "24", "25"],
        correct: "32"
    },
    {
        question: "What will be the output of the following Java program?\n\nclass leftshift_operator {\n    public static void main(String args[]) {\n        byte x = 64;\n        int i;\n        byte y; \n        i = x << 2;\n        y = (byte) (x << 2);\n        System.out.print(i + \" \" + y);\n    } \n}",
        answers: ["0 256", "0 64", "256 0", "64 0"],
        correct: "256 0"
    },
    {
        question: "What will be the output of the following Java program?\n\nclass Output {\n    public static void main(String args[]) {\n        int arr[] = {1, 2, 3, 4, 5};\n        for (int i = 0; i < arr.length - 2; ++i)\n            System.out.println(arr[i] + \" \");\n    } \n}",
        answers: ["1 2 3 4 5", "1 2 3 4", "1 2", "1 2 3"],
        correct: "1 2 3"
    }
]
};


    let currentRound = 1;
let totalScore = 0;
let userName = "";
let userClass = "";
let collegeName = "";
let timeLeft = 900; // 15 minutes in seconds
let timerInterval;

function startQuiz() {
    userName = document.getElementById('name').value;
    userClass = document.getElementById('class').value;
    collegeName = document.getElementById('collegename').value;

    if (userName && userClass && collegeName) {
        document.getElementById('userForm').style.display = 'none';
        document.getElementById('quizContent').style.display = 'block';
        document.getElementById('timer').style.display = 'block';

        loadQuestions();
        startTimer();

       document.getElementById('userInfo').innerText = `Name: ${userName}, Class: ${userClass}, College: ${collegeName}`;

    } else {
        alert("Please enter your name, class, and college name.");
    }
}

function startTimer() {
    timerInterval = setInterval(function() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        document.getElementById('timer').innerHTML = `Time Remaining: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timerInterval);
            alert('Time is up!');
            submitQuiz();
        }
    }, 1000);
}

function loadQuestions() {
    let questionsDiv = document.getElementById('questionsDiv');
    questionsDiv.innerHTML = '';
    let currentQuestions = questions[`round${currentRound}`];

    currentQuestions.forEach((q, index) => {
        let questionElement = document.createElement('div');
        questionElement.classList.add('question-container');
        questionElement.innerHTML =
            `<label>${index + 1}. ${q.question}</label><br>
            ${q.answers.map(answer => 
                `<label><input type="radio" name="q${index}" value="${answer}">${answer}</label><br>`
            ).join('')}`;
        questionsDiv.appendChild(questionElement);
    });
}

function submitQuiz() {
    clearInterval(timerInterval);

    let currentQuestions = questions[`round${currentRound}`];
    let roundScore = 0;
    let userAnswers = [];

    currentQuestions.forEach((q, index) => {
        let selectedAnswer = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === q.correct) {
            roundScore++;
        }
        userAnswers.push({
            question: q.question,
            selectedAnswer: selectedAnswer ? selectedAnswer.value : null
        });
    });

    totalScore += roundScore;
    sendResultsToBackend(userAnswers);
    showResults(roundScore);
}

function sendResultsToBackend(userAnswers) {
    fetch('/submit-scores', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: userName,
            class_name: userClass,  
            college_name: collegeName, // Send college name to backend
            round: currentRound,
            score: totalScore,  
            time_left: timeLeft, // Send remaining time to backend
            answers: userAnswers  
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Server Response:', data);
        alert(data.message);  
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function showResults(roundScore) {
    document.getElementById('quizContent').style.display = 'none';
    document.getElementById('resultContent').style.display = 'block';
    
    document.getElementById('userInfo').innerHTML = `Name: ${userName}<br>Class: ${userClass}<br>College: ${collegeName}`;
    document.getElementById('finalScore').innerHTML = `Your Score for Round ${currentRound}: ${roundScore} / ${questions[`round${currentRound}`].length}`;
    
    const feedback = document.getElementById('feedback');
    if (currentRound < 3) {
        if (roundScore > 10) {
            feedback.textContent = "Congratulations, you are eligible for the next round!";
            feedback.className = "feedback good";
            document.getElementById('nextRoundBtn').style.display = 'inline-block';
        } else {
            feedback.textContent = "Sorry, you are not eligible for the next round.";
            feedback.className = "feedback bad";
            document.getElementById('nextRoundBtn').style.display = 'none';
        }
    } else {
        feedback.textContent = "Thanks for the participation!";
        feedback.className = "feedback good";
        document.getElementById('nextRoundBtn').style.display = 'none';
    }
}

function nextRound() {
    currentRound++;
    if (currentRound <= 3) {
        document.getElementById('resultContent').style.display = 'none';
        document.getElementById('quizContent').style.display = 'block';
        loadQuestions();
        timeLeft = 900;
        startTimer();
    } else {
        document.getElementById('resultContent').innerHTML = `<h2>Quiz Complete! Your Total Score: ${totalScore}</h2>`;
    }
}

document.getElementById('startQuizBtn').addEventListener('click', startQuiz);
document.getElementById('submitBtn').addEventListener('click', submitQuiz);
document.getElementById('nextRoundBtn').addEventListener('click', nextRound);
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("Right-click is disabled on this page!");
});

// Add an event listener for beforeunload
window.addEventListener('beforeunload', function (event) {
    event.preventDefault(); // Some browsers require this for the message to show
    event.returnValue = ''; // Setting this displays the default confirmation dialog
});
// Disable text selection
document.addEventListener('selectstart', function (e) {
    e.preventDefault();
    alert("Text selection is disabled.");
  });
  
  // Disable specific keyboard shortcuts
  document.addEventListener('keydown', function (e) {
    // Disable Ctrl+C, Ctrl+X, Ctrl+S, Ctrl+U
    if (e.ctrlKey && ['c', 'x', 's', 'u'].includes(e.key.toLowerCase())) {
      e.preventDefault();
      alert("Keyboard shortcuts are disabled.");
    }
  });



