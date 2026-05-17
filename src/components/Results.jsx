import {useSelector, useDispatch } from "react-redux";
import { restartQuiz } from "../features/quiz/quizSlice";
 function Results (){
    const dispatch = useDispatch();
    const{ score, questions}= useSelector((state)=>state.quiz);
    return(
        <div>
            <h1>Quiz Finished</h1>
            <h2>your Score:{score} out of {questions.length}</h2>
            <button onClick={()=>dispatch(restartQuiz())}>Restart Quiz 🔄️</button>
        </div>
    );

 }
 export default Results