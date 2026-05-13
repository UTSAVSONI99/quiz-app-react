

export default function Quiz() {
 const questionsBank = [
  {
    question: "What is the capital of India?",
    options: ["Raipur", "Bhopal", "Varanasi", "New Delhi"],
    answer: "New Delhi"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars"
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
    answer: "Harper Lee"
  },
    {
    question: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale"
    }


];


  return (
    <div>
      <h2>Question 1</h2>
      <p className="question">{questionsBank[0].question}</p>
      
      {questionsBank[0].options.map((option, index) => (
        <button key={index} className="option">{option}</button>
      ))}

    <div className="nav-buttons">
        <button className="">Previous</button>
        <button className="">Next</button>

    </div>

    </div>
  )
}
