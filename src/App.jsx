
// import { useState, useEffect } from "react";
// import quizData from "./quizData";
// import "./QuizCard.css";

// function App() {
//   const [index, setIndex] = useState(0);
//   const [selected, setSelected] = useState(null);
//   const [score, setScore] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(15); // 15s per question
//   const [showResult, setShowResult] = useState(false);

//   const current = quizData[index];

//   useEffect(() => {
//     if (timeLeft === 0) {
//       handleNext(); // auto move if time runs out
//       return;
//     }

//     const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//     return () => clearTimeout(timer);
//   }, [timeLeft]);

//   const handleOptionClick = (option) => {
//     setSelected(option);
//     if (option === current.answer) {
//       setScore(score + 1);
//     }
//   };

//   const handleNext = () => {
//     if (index + 1 === quizData.length) {
//       setShowResult(true);
//     } else {
//       setIndex(index + 1);
//       setSelected(null);
//       setTimeLeft(15);
//     }
//   };

//   const handlePrevious = () => {
//     if (index > 0) {
//       setIndex(index - 1);
//       setSelected(null);
//       setTimeLeft(15);
//     }
//   };

//   const restartQuiz = () => {
//     setIndex(0);
//     setScore(0);
//     setSelected(null);
//     setTimeLeft(15);
//     setShowResult(false);
//   };

//   return (
//     <div className="min-h-screen bg-black text-white p-5 flex flex-col items-center">
//       <h1 className="text-3xl font-bold mb-4">React Quiz App</h1>

//       {showResult ? (
//         <div className="text-center">
//           <h2 className="text-2xl">Quiz Complete! 🎉</h2>
//           <p className="text-xl mt-2">Your score: {score} / {quizData.length}</p>
//           <button onClick={restartQuiz} className="mt-4 bg-pink-600 px-6 py-3 rounded">
//             Restart
//           </button>
//         </div>
//       ) : (
//         <div className="max-w-xl w-full bg-gray-900 p-6 rounded-xl shadow-md">
//           <div className="flex justify-between mb-4">
//             <span>Time Left: {timeLeft}s</span>
//             <span>Score: {score}</span>
//           </div>
//           <h2 className="text-lg font-semibold mb-3">{current.question}</h2>
        
   
//    {/* <ul className="space-y-2">
//   {current.options.map((option, i) => (
//     <li
//       key={i}
//       onClick={() => {
//         if (!selected) handleOptionClick(option);
//       }}
//       className={`p-3 rounded cursor-pointer transition-all ${
//         selected
//           ? option === current.answer
//             ? "bg-green-600 text-white"
//             : "bg-gray-700 text-gray-400"
//           : "bg-gray-700 hover:bg-gray-600"
//       }`}
//     >
//       {option}
//     </li>
//   ))}

// </ul> */}


// <ul style={{ listStyle: "none", padding: 0 }}>
//   {current.options.map((option, i) => (
//     <li
//       key={i}
//       onClick={() => !selected && handleOptionClick(option)}
//       className={`option ${
//         selected
//           ? option === current.answer
//             ? "correct"
//             : "inactive"
//           : ""
//       }`}
//     >
//       {option}
//     </li>
//   ))}
// </ul>

// {selected && (
//   <div className={`feedback ${selected === current.answer ? "correct" : "wrong"}`}>
//     {selected === current.answer ? "✅ Correct!" : "❌ Wrong!"}
//   </div>
// )}


// {/* {selected && (
//   <div className="mt-3 text-lg font-semibold">
//     {selected === current.answer ? (
//       <span className="text-green-400">✅ Correct!</span>
//     ) : (
//       <span className="text-red-400">❌ Wrong!</span>
//     )}
//   </div>
// )} */}



//           <div className="flex justify-between mt-6">
//             <button
//               onClick={handlePrevious}
//               disabled={index === 0}
//               className="px-4 py-2 bg-gray-700 rounded disabled:opacity-50"
//             >
//               Previous
//             </button>
//             <button
//               onClick={handleNext}
//               className="px-4 py-2 bg-pink-600 rounded"
//             >
//               {index === quizData.length - 1 ? "Finish" : "Next"}
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


import React from "react";
import Quiz from "./Quiz";

function App() {
  

  return (
    <div style={{ textAlign: "center" }}>
      <h1>🧠 React Quiz App</h1>
      <Quiz />
    </div>
  );
}

export default App;
