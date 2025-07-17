// // src/QuizCard.jsx
// import { useState } from 'react';

// function QuizCard({ data, index }) {
//   const [flipped, setFlipped] = useState(false);

//   const handleClick = () => setFlipped(!flipped);

//   return (
//     <div
//       className={`quiz-card ${flipped ? 'flipped' : ''}`}
//       onClick={handleClick}
//     >
//       <div className="card-inner">
//         <div className="card-front">
//           <h6>{data.question}</h6>
//           <ul>
//             {data.options.map((opt, i) => (
//               <li key={i}>{opt}</li>
//             ))}
//           </ul>
//           <span>Answer</span>
//         </div>
//         <div className="card-back">
//           <p>{data.answer}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default QuizCard;
