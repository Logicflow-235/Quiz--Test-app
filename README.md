# 🎯 Redux Quiz App

A fully functional quiz application built with React and Redux Toolkit. built to learn state management concepts including slices, reducers, actions, and async thunks.

---

## 🚀 Live Demo

👉 **[https://quiz-test-app-two.vercel.app/](https://quiz-test-app-two.vercel.app/)**

---

## 🛠️ Built With

- **React** — UI library
- **Redux Toolkit** — state management
- **React-Redux** — connecting Redux to React
- **Vite** — build tool
- **Open Trivia DB API** — free quiz questions

---



## ✨ Features

- ✅ Fetches 5 random questions from Open Trivia DB API
- ✅ Shuffled answer options on every question
- ✅ Tracks score in real time
- ✅ Displays final score on results screen
- ✅ Restart quiz functionality
- ✅ Fallback questions when API is unavailable

---

## 📁 Project Structure

```
src/
├── app/
│   └── store.js          # Redux store
├── features/
│   └── quiz/
│       └── quizSlice.js  # Quiz slice — reducers + async thunk
├── components/
│   ├── Question.jsx      # Displays current question
│   ├── Answers.jsx       # Displays answer options
│   └── Results.jsx       # Displays final score
└── App.jsx               # Root component
```

---

## ⚙️ Redux Flow

```
App loads → dispatch(fetchQuestions()) → API returns questions
    │
    ▼
User selects answer → dispatch(selectAnswer()) → score updates
    │
    ▼
User clicks Next → dispatch(nextQuestion()) → next question
    │
    ▼
Last question → quizFinished = true → Results screen
    │
    ▼
User restarts → dispatch(restartQuiz()) → reset everything
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/Logicflow-235/quiz-app.git

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## 🗂️ Redux State Shape

```js
{
  quiz: {
    questions: [],        // array of questions from API
    currentIndex: 0,      // which question we're on
    score: 0,             // number of correct answers
    selectedAnswer: null, // what the user selected
    quizFinished: false,  // is the quiz over?
    status: "idle"        // idle | loading | ready | failed
  }
}
```

---

## 🔄 Actions

| Action | Description |
|---|---|
| `fetchQuestions` | Async thunk — fetches questions from API |
| `selectAnswer` | Saves selected answer + checks if correct |
| `nextQuestion` | Moves to next question or finishes quiz |
| `finishQuiz` | Sets quizFinished to true |
| `restartQuiz` | Resets all state back to initial values |

---

## 👨🏽‍💻 Author

Built by **Logicflow-235** as part of a Redux learning journey.

- GitHub: [@Logicflow-235](https://github.com/Logicflow-235)

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
