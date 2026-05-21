import { useSelector } from "react-redux";
function Question(){
  const {questions, currentIndex} =useSelector((state)=>
  state.quiz)
    const currentQuestion= questions[currentIndex];
if (!currentQuestion)return null;
return(<div>
  <h3 style={{
    fontStyle:"italic",
    fontSize:"1.6rem",color:' #2D4A3E'
  }}>Question {currentIndex +1} of {questions.length}</h3>
  <h2 style={{fontStyle:"italic",
    fontSize:"2.4rem",
    color:' #2D4A3E',

  }}>{currentQuestion.question}</h2>
</div>
);
}
export default Question