import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "./features/quiz/quizSlice";
import Question from "./components/Question";
import Answers from "./components/Answers";
import Results from "./components/Results";

function App() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.quiz.status);
  const questions = useSelector((state) => state.quiz.questions);
  const quizFinished = useSelector((state) => state.quiz.quizFinished);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchQuestions());
    }
  }, []);

  if (status === "loading") return <h2>Loading questions... ⏳</h2>;
  if (status === "failed") return <h2>Something went wrong! ❌</h2>;
  if (status !== "ready") return null;
  if (!questions || questions.length === 0) return null;


  if (quizFinished) return <Results />;

  return (
    <>
      <Question />
      <Answers />
    </>
  );
}

export default App;