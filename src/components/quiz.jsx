import { useState } from "react";
import Result from "./result";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState([null, null, null, null]);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const selectedOption = userAnswer[currentQuestion]; // either selectedOption is null or it holds the value of the selected option for the current question
  
  const questionsBank = [
    {
      question: "What is the capital of India?",
      options: ["Raipur", "Bhopal", "Varanasi", "New Delhi"],
      answer: "New Delhi",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: [
        "Harper Lee",
        "Mark Twain",
        "Ernest Hemingway",
        "F. Scott Fitzgerald",
      ],
      answer: "Harper Lee",
    },
    {
      question: "What is the largest mammal?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      answer: "Blue Whale",
    },
  ];

  function handleSelect(option) {
    const updatedUserAnswer = [...userAnswer];
    updatedUserAnswer[currentQuestion] = option;
    setUserAnswer(updatedUserAnswer);
  }

  function goToPreviousQuestion() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  function goToNextQuestion() {
    if (currentQuestion === questionsBank.length - 1) {
      setIsQuizCompleted(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  }
  
  function restartQuiz() {
    setCurrentQuestion(0);
    setUserAnswer([null, null, null, null]);
    setIsQuizCompleted(false);
  }

  if (isQuizCompleted) {
    return <Result userAnswer={userAnswer} questionsBank={questionsBank} restartQuiz={restartQuiz} />;
  }

  return (
    <div>
      <h2>Question {currentQuestion + 1}</h2>
      <p className="question">{questionsBank[currentQuestion].question}</p>

      {questionsBank[currentQuestion].options.map((option, index) => (
        <button
          key={index}
          className={`option ${selectedOption === option ? "selected" : ""}`}
          onClick={() => handleSelect(option)}
        >
          {option}
        </button>
      ))}

      <div className="nav-buttons">
        <button
          className=""
          onClick={goToPreviousQuestion}
          disabled={currentQuestion === 0}
        >
          Previous
        </button>
        <button
          className=""
          onClick={goToNextQuestion}
          disabled={!selectedOption}
        >
          {currentQuestion === questionsBank.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}
