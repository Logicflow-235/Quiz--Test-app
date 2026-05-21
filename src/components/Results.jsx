import {useSelector, useDispatch } from "react-redux";
import { restartQuiz } from "../features/quiz/quizSlice";
 function Results (){
    const dispatch = useDispatch();
    const{ score, questions}= useSelector((state)=>state.quiz);
    return(
        <div>
            <h1>Quiz Finished</h1>
            <h2>your Score:{score} out of {questions.length}</h2>
            <button style={{
                backgroundColor: "#233028",
            color: "white",
            margin: "10px 5px",
            padding: "10px 20px",
            cursor: "pointer",
            }}
            onClick={()=>dispatch(restartQuiz())}>Restart Quiz 🔄️</button>
        </div>
    );

 }
 export default Results