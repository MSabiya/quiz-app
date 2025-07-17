import React, { useState, useEffect } from "react";
import questions from "./questions";

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [selected, setSelected] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15); // ⏱️ Timer per question

  const currentQuestion = questions[current];

  // 🕒 Timer countdown logic
  useEffect(() => {
    if (isAnswered || isFinished) return;

    if (timeLeft === 0) {
      setIsAnswered(true);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, isAnswered, isFinished]);

  const handleAnswer = (option) => {
    if (isAnswered) return;

    setSelected(option);
    setIsAnswered(true);
    if (option === currentQuestion.answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
      setSelected(null);
      setIsAnswered(false);
      setTimeLeft(15); // ⏱️ Reset timer
    } else {
      setIsFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setIsFinished(false);
    setSelected(null);
    setIsAnswered(false);
    setTimeLeft(15);
  };

  const getOptionStyle = (option) => {
    if (!isAnswered) return {};
    if (option === currentQuestion.answer) {
      return { backgroundColor: "#4caf50", color: "black" }; // ✅ correct
    }
    if (option === selected) {
      return { backgroundColor: "#f44336", color: "black" }; // ❌ wrong
    }
    return {};
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      {isFinished ? (
        <div>
          <h2>✅ Quiz Completed!</h2>
          <p>Score: {score} / {questions.length}</p>
          <button
            onClick={restartQuiz}
            style={{
              marginTop: "20px",
              padding: "10px 16px",
              borderRadius: "5px",
              backgroundColor: "#4caf50",
              color: "#fff",
              border: "none",
              cursor: "pointer"
            }}
          >
            🔁 Restart Quiz
          </button>
        </div>
      ) : (
        <div>
          <div style={{ marginBottom: "10px", fontSize: "18px", fontWeight: "bold" }}>
            Time Left: {timeLeft} seconds
          </div>

          <h3>
            Q{current + 1}: {currentQuestion.question}
          </h3>
        <div className="flex flex-col items-center gap-3 mt-4 w-">
          {currentQuestion.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(opt)}
              style={{
                ...{
                  display: "block",
                  margin: "10px 0",
                  padding: "8px 12px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                  cursor: isAnswered ? "default" : "pointer",
                  color:'black',
                  fontSize:'18px'
                  
                },

                

                ...getOptionStyle(opt),
              }}
              disabled={isAnswered}
            >
              {opt}
            </button>
          ))}
          </div>

          {isAnswered && (
            <div style={{ marginTop: "10px", fontStyle: "italic", color: "gray" }}>
              {!selected ? "⏰ Time's up!" : null}
            </div>
          )}

          {isAnswered && current < questions.length && (
            <button
              onClick={nextQuestion}
              style={{
                marginTop: "15px",
                padding: "8px 14px",
                borderRadius: "5px",
                backgroundColor: "#1b4f3dff",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                fontSize:'20px',
                borderRadius:'20px'

              }}
            >
              ➡️ Next
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Quiz;

