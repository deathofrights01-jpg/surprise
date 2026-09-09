const questions = [

"1. Do you know me? ❤️",

"2. am I important to you ? 😊",

"3. have I ever made u smile ? ❤️",

"4. do you like talking to me? 🥺",

"5. do you see me as your partmer in future ? "

];

let currentQuestion = 0;

let answers = [];

const question = document.getElementById("question");

const yesBtn = document.getElementById("yesBtn");

const noBtn = document.getElementById("noBtn");

const submitBtn = document.getElementById("submitBtn");

const quiz = document.getElementById("quiz");

const message = document.getElementById("message");

question.textContent = questions[currentQuestion];

function nextQuestion(answer){

answers.push(answer);

currentQuestion++;

if(currentQuestion < questions.length){

question.textContent = questions[currentQuestion];

}
else{

question.innerHTML = "That's all ❤️<br><br>Click below for your surprise.";

yesBtn.style.display = "none";

noBtn.style.display = "none";

submitBtn.style.display = "inline-block";

}

}

yesBtn.addEventListener("click",function(){

nextQuestion("Yes");

});

noBtn.addEventListener("click",function(){

nextQuestion("No");

});

submitBtn.addEventListener("click",function(){

quiz.style.display="none";

message.style.display="block";

});