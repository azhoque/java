let state = {
  questions: [
    {
      question: "1. What is Jon Snow’s sword called?",
      options: ["Widow's Wail", "Longclaw", "Oathkeeper", "Cat's Paw"],
      correctAnswer: 1
    },
    {
      question: "2. Who is Cercei Lanister’s hand of the Queen?",
      options: [
        "Varys the spider",
        "Little finger",
        "Jaime Lanister",
        "Qyburn"
      ],
      correctAnswer: 3
    },
    {
      question: "3. What does Jon needs to kill White Walkers?",
      options: ["Vilerian Sword", "Dragon Glass", "Giant Arrow", "Fiery Sword"],
      correctAnswer: 1
    },
    {
      question: "4. Who admitted killing King Jeoffery?",
      options: ["Tyrion Lanister", "Sansa Stark", "Lady Elaina", "Sand snakes"],
      correctAnswer: 2
    },
    {
      question: "5. Mercella was killed by?",
      options: [
        "Poison",
        "Dagger thru her heart",
        "White walker",
        "Grey scales"
      ],
      correctAnswer: 0
    },
    {
      question: "6. What did Tyrion murder his father with?",
      options: ["Dagger", "Hammer", "Poison", "Crossbow"],
      correctAnswer: 3
    },
    {
      question: "7. Who is the leader of White Walker Army?",
      options: [
        "Cersei Lanister",
        "Lord Commander",
        "Brandon Stark",
        "The Night King"
      ],
      correctAnswer: 3
    },
    {
      question: "8. What are names of Dyneres’s Dragons?",
      options: [
        "Drogon, Viserion, Rhaegal",
        "Aeren, Dracares, Viseres",
        "Drogo, Rhaegar, Vahlar",
        "Morgos, Vilerion, Dragon"
      ],
      correctAnswer: 0
    },
    {
      question: "9. In what battle Jon defeated Ramsey?",
      options: [
        "Battle of the black water bay",
        "Battle of bustards",
        "Massacre at Hardhome",
        "Red Wedding"
      ],
      correctAnswer: 1
    },
    {
      question: "10. Who sucks at zig-zag?",
      options: ["Sansa Stark", "Arya Stark", "Recon Stark", "Brandon Stark"],
      correctAnswer: 2
    }
  ],
  currentQuestion: 0,
  totalScore: 0,
  gameStarted: false
};
$(function() {
  $("#startQuiz").click(function() {
    startQuiz();
  });
  $(".myForm").submit(function(event) {
    event.preventDefault();
    nextQuestion();
  });
  $("#continue").click(function() {
    renderPage();
  });
  $("#retake").click(function(event) {
    event.preventDefault();
    retakeQuiz();
  });
  renderPage();
});
function renderPage() {
  if (state.gameStarted === false) {
    $("section").hide();
    $("#startPage").show();
  } else {
    $("section").hide();
    $("#questionPage").show();
    loadQuestions();
  }
}
function startQuiz() {
  state.gameStarted = true;
  state.currentQuestion = 0;
  state.totalScore = 0;
  renderPage();
}
function loadQuestions() {
  if (state.currentQuestion === state.questions.length) {
    $("section").hide();
    $("#finalPage").show();
    $("#correctNo").text(state.totalScore);
    $("#total-outof").text(state.questions.length);
    //$("#nextQuestion").html='Finish';
    return;
  }

  let q = state.questions[state.currentQuestion];
  //console.log(q);
  $("#questionPage h2").html(q.question);
  $("#opt1").text(q.options[0]);
  $("#opt2").text(q.options[1]);
  $("#opt3").text(q.options[2]);
  $("#opt4").text(q.options[3]);
  $("#questionNo").text(state.currentQuestion + 1);
  $("#outOf").text(state.questions.length);
}
function nextQuestion() {
  let selected = $('input[name="option"]:checked').val();
  document.querySelector(".myForm").reset(); //reset the entire form
  if (selected == null) {
    alert("Please choose an option your Grace!");
    return;
  }
  let a = state.questions[state.currentQuestion].correctAnswer;
    console.log(a, "--", selected);
  if (selected == a) {
    state.totalScore++;
    $("#showAnswer h2").text("Correct answer your Grace!");
  } else {
    $("#showAnswer h2").text('You know nothing Jon Snow! Correct Answer is: '+ state.questions[state.currentQuestion].options[a] +'.' );
  }
  let q = state.questions[state.currentQuestion];
  if(q==state.questions.slice(-1)){
    $('#nextQuestion').text("Finish")
    return;
  }
  state.currentQuestion++;
  $("#questionPage").hide();
  $("#showAnswer").show();
}
function continueQuiz() {
  renderPage();
}
function retakeQuiz() {
  $("section").hide();
  $("#startPage").show();
}
