//jshint esversion: 9

let questions = [
    
    {
        ques: "Who is Prime Minister of India ?",
        option1: "Narendra Modi",
        option2: "Amit Shah",
        option3: "Yogi Aditya Nath",
        option4: "Mamta Banerjee",
        ans: "Narendra Modi",
    },
    {
        ques: "National animal of India is _________",
        option1: "Lion",
        option2: "Leopard",
        option3: "Tiger",
        option4: "Elephant",
        ans: "Tiger",
    },
    {
        ques: "National Flower of India is _________",
        option1: "Lotus",
        option2: "Rose",
        option3: "Lily",
        option4: "Sun Flower",
        ans: "Lotus",
    },
    {
        ques: "National fruit of India is _________ ",
        option1: "Apple",
        option2: "Pine Apple",
        option3: "Litchi",
        option4: "Mango",
        ans: "Mango",
    },
    {
        ques: "National bird of India is _________",
        option1: "Sparrow",
        option2: "Parrot",
        option3: "Peacock",
        option4: "Crow",
        ans: "Peacock"
    },
    {
        ques: "National river of India is _________",
        option1: "Yamuna",
        option2: "Ganga",
        option3: "Nile",
        option4: "Bhamaputra",
        ans: "Ganga"
    },
    {
        ques: "How Many states are there in India ?",
        option1: "26",
        option2: "27",
        option3: "28",
        option4: "29",
        ans: "28"
    },
    {
        ques: "What is the capital of India ?",
        option1: "New Delhi",
        option2: "Lucknow",
        option3: "Kanpur",
        option4: "Punjab",
        ans: "New Delhi"
    },
    {
        ques: "How many Union Territories are there in india ?",
        option1: " 6",
        option2: "7",
        option3: "8",
        option4: "9",
        ans: "8"
    },
    {
        ques: "Who is the President of India ?",
        option1: " Narendra Modi",
        option2: "Ram Nath Kovind",
        option3: " Yogi Aditya Nath",
        option4: " Mamta Banerjee",
        ans: "Ram Nath Kovind"
    }
];

let score = 0;

let selectedQuestion = Math.floor(Math.random() * questions.length);
setQuestion();
function setQuestion() {
    document.getElementById("question").innerHTML = questions[selectedQuestion].ques;
    document.querySelector("#option1").innerHTML = questions[selectedQuestion].option1;
    document.querySelector("#option2").innerHTML = questions[selectedQuestion].option2;
    document.querySelector("#option3").innerHTML = questions[selectedQuestion].option3;
    document.querySelector("#option4").innerHTML = questions[selectedQuestion].option4;
}

function selectNextQuestion() {
    questions = questions.filter((q, index) => index !== selectedQuestion);
    // if (questions.length === 1) {
    //     document.querySelector(".submit").innerHTML = "Submit";
    // } else
    if (questions.length <= 0) {
        document.querySelector(".container").classList.add("display");
        document.querySelector(".restart").classList.remove("display");
        document.querySelector(".score > h4").innerHTML = `Score: ${score}/10`;
        return;
    }
    selectedQuestion = Math.floor(Math.random() * questions.length);
    setQuestion();
}

function addEvent(i) {
    let ele = document.querySelector(`#option${i + 1}`);

    ele.addEventListener("click", (e) => {
        res = e.target.innerHTML;
        console.log(e.target.innerHTML);
        if (res === questions[selectedQuestion].ans) {
            score++;
            console.log(score);
        }
        selectNextQuestion();
    });
}

// let ele = document.querySelectorAll(".white");
// console.log(ele.length);
for (let i = 0; i < 4; i++) {
    console.log("calling");
    // console.log(ele);
    addEvent(i);
}

function start() {
    document.getElementById("start").classList.add("display");
    document.querySelector(".container").classList.remove("display");
    document.querySelector(".container").classList.remove("display");
}

function restart() {
    location.reload();
}
