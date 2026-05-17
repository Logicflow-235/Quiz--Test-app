import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchQuestions = createAsyncThunk(
    "quiz/fetchQuestions",
    async ()=>{ 
        const response =await fetch("https://opentdb.com/api.php?amount=5&type=multiple");
        const data= await response.json();
        if (data.response_code !== 0) {
            return rejectWithValue("API error"); // 👈 manually trigger rejected!
        }
        return data.results;
    
    }
);
 const quizSlice = createSlice({
    name: "quiz",
    initialState:{
        questions:[],
        currentIndex:0,
        score:0,
        selectedAnswer:null,
        quizFinished: false,
        status:"idle",
    },
    reducers:{
        selectAnswer:(state, action)=>{ state.selectedAnswer= action.payload;
            const currentQuestion = state.questions[state.currentIndex];
            if (action.payload === currentQuestion.correct_answer){
                state.score += 1;
            }
        
    },
    nextQuestion:(state)=>{
        if(state.currentIndex < state.questions.length - 1){
            state.currentIndex +=1;
            state.selectedAnswer= null;
        }
        else{
            state.quizFinished = true;
        }
    },
    finishQuiz: (state)=>{
        state.quizFinished=true;
    },
    restartQuiz: (state)=>{
        state.currentIndex=0;
        state.score=0;
        state.selectedAnswer=null;
        state.quizFinished= false;
        state.status="ready";
    },
 },
extraReducers: (builder)=>{
    builder
    .addCase(fetchQuestions.pending, (state)=>{
        state.status = "loading";
    })
    .addCase(fetchQuestions.fulfilled, (state, action)=>{
        state.status ="ready";
        state.questions= action.payload;
    })
    .addCase(fetchQuestions.rejected, (state)=>{
        state.status ="ready";
        state.questions =[ {
            question: "What does HTML stand for?",
            correct_answer: "Hyper Text Markup Language",
            incorrect_answers: [
              "High Tech Modern Language",
              "Hyper Transfer Mode Logic",
              "Home Tool Markup Language"
            ]
          },
          {
            question: "What does CSS stand for?",
            correct_answer: "Cascading Style Sheets",
            incorrect_answers: [
              "Creative Style System",
              "Computer Style Sheets",
              "Colorful Style Sheets"
            ]
          },
          {
            question: "Which keyword declares a variable in JS?",
            correct_answer: "let",
            incorrect_answers: ["var", "int", "define"]
          },
          {
            question: "What does API stand for?",
            correct_answer: "Application Programming Interface",
            incorrect_answers: [
              "Applied Programming Interface",
              "Application Process Integration",
              "Automated Programming Interface"
            ]
          },
          {
            question: "What does Redux store?",
            correct_answer: "The entire application state",
            incorrect_answers: [
              "Only the UI components",
              "Only the API responses",
              "Only the user data"
            ]
          },];
    });
}
});
export const {selectAnswer, nextQuestion, finishQuiz, restartQuiz}= quizSlice.actions;
export default quizSlice.reducer;