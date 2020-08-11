var questionsArray = [
    {
        question: "Full Form of RAM is?",
        answer: "random access memory",
        options: [
            "random access memory",
            "random actual memory",
            "right access memory",
            "none of the above",
        ]
    },
    {
        question: "Full Form of CPU is?",
        answer: "central processing unit",
        options: [
            "central program unit",
            "central processing unit",
            "control panel unit",
            "none of the above",
        ]
    },
    {
        question: "Full Form of E-MAIL is?",
        answer: "electronic mail",
        options: [
            "electric mail",
            "easy mail",
            "electronic mail",
            "none of the above",
        ]
    },
    {
        question: "Full Form of LCD is?",
        answer: "liquid crystal display",
        options: [
            "liquid crystal display",
            "light crystal display",
            "liquid cold display",
            "none of the above",
        ]
    },
    {
        question: "Full Form of SEO is?",
        answer: "none of the above",
        options: [
            "safe engine optimization",
            "secure engine optimization",
            "secret engine optimization",
            "none of the above",
        ]
    },
];


function vlidate(){
    sessionStorage.clear();
    var input = document.getElementById("userName");
    if(input.value == "" || input.value == " "){
        alert("User Name Required!");
    }
    else {
        sessionStorage.setItem("name",input.value);
        startQuiz();
    }
}

function startTime(){
    var startingMin = 2;
    var time = startingMin * 60;
    var timerPara = document.getElementById("timer");

    function updateCountDown(){
        var minutes = Math.floor(time / 60)
        var seconds = time % 60;
        
        if(seconds < 10){
            seconds = "0"+seconds;
        }
        if(minutes < 10){
            minutes = "0"+minutes;
        }
        
        timerPara.innerHTML = minutes + ":" + seconds;
        time--;

        if(minutes == 00 && seconds == 00){
            alert("Oopps!! Time Up");
            window.location.href = "result.html";
        }
    }
    setInterval(updateCountDown, 1000);
}


function takeAgain(){
    window.location.href = "index.html";
}

var questionCount = 0;
var score = 0;
var currentAns = "";

function renderQuestion(x){
    var questionElement = document.getElementById("divQuestion");
    questionElement.innerHTML = "Q"+(x+1)+". "+questionsArray[x].question;
    var optionsElement = document.getElementsByClassName("divOption");
    for(var i = 0; i < optionsElement.length; i++){
        optionsElement[i].innerHTML = questionsArray[x].options[i].toUpperCase();
    }
}

function putActiveClass(x){
    var optionsElement = document.getElementsByClassName("card-text");
    for(var i = 0; i < optionsElement.length; i++){
        optionsElement[i].classList.remove("active")
    }
    optionsElement[x].classList.add("active");
}

function removeActiveClass(){
    var optionsElement = document.getElementsByClassName("card-text");
    for(var i = 0; i < optionsElement.length; i++){
        optionsElement[i].classList.remove("active")
    }
}

function checkAnswer(x){
    var userAns = document.getElementsByClassName("active");
    if(userAns[0].innerHTML.toLocaleLowerCase() == questionsArray[x].answer){
        score += 10;
    }
}   

function showNextQuestion(){
    
    checkAnswer(questionCount);
    questionCount++;
    if(questionCount <= questionsArray.length-1){
        renderQuestion(questionCount);
    }
    removeActiveClass();
    setResult();
}

function showResult(){
    var resultUser= sessionStorage.getItem("userscore");
    document.getElementById("result") = sessionStorage.getItem("userscore");
}


function startQuiz(){
    window.location.href = "quiz.html";
}

function setResult(){
    if(questionCount == questionsArray.length){
        window.location.href = "result.html";
    }
    var result = document.getElementById("result");
    sessionStorage.setItem("userscore", score);
}

function renderResult(){
    var cs = sessionStorage.getItem("userscore");
    result.innerHTML = "<h1> Your scored "+ cs +" out of 50";

}