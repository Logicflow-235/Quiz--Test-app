import { useSelector } from "react-redux";
function Question(){
  const {questions, currentIndex} =useSelector((state)=>
  state.quiz)
    const currentQuestion= questions[currentIndex];
if (!currentQuestion)return null;
return(<div>
  <h3>Question {currentIndex +1}of{questions.length}</h3>
  <h2>{currentQuestion.question}</h2>
</div>
);
}
export default Question