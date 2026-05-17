import{useSelector, useDispatch} from "react-redux";
import {selectAnswer, nextQuestion } from "../features/quiz/quizSlice";
function Answers(){
    const dispatch = useDispatch();
    const {questions, currentIndex, selectedAnswer }= useSelector((state)=>state.quiz);
    const currentQuestion =questions[currentIndex]
    if (!currentQuestion)return null;
const allAnswers=[currentQuestion.correct_answer,
    ...currentQuestion.incorrect_answers,
].sort(() => Math.random() - 0.5);;
return(
<div>
 {allAnswers.map((answer)=>(
    <button
          key={answer}
          onClick={() => dispatch(selectAnswer(answer))}
          style={{
            backgroundColor: selectedAnswer === answer ? "blue" : "gray",
            color: "white",
            margin: "5px",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          {answer}
        </button>

 ))}
 {selectedAnswer && (
  <button
          onClick={() => dispatch(nextQuestion())}
          style={{
            backgroundColor: "green",
            color: "white",
            margin: "10px 5px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Next Question ➡️
        </button>
 )}
</div>
);
};
export default Answers