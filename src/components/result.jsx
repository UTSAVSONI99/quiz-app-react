

export default function result({userAnswer, questionsBank, restartQuiz}) {

function getScore() {
let finalScore = 0;

userAnswer.forEach((answer, index) => {
  if (answer === questionsBank[index].answer) {
    finalScore++;
  }
});

return finalScore;
}

const score =getScore();




  return (
    <div>
      <h2>Quiz Completed</h2>
        <p>Your score: {score}/{questionsBank.length}</p>
        <button className="restart-button" onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}
