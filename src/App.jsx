import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Quiz from "./Components/Quiz.jsx";
import Result from "./Components/Result.jsx";
import questions from "./Resources/quizQuestions.json";
import "./App.css";

export const QuizStateContext = React.createContext();
export const QuizIndexContext = React.createContext();

function App() {

  const [currIndex, setCurrIndex] = useState(0);
  const [quizState, setQuizState] = useState([]);
  

  return (
    <div className="app">
      <QuizIndexContext.Provider value={{ setCurrIndex }}>
        <QuizStateContext.Provider value={{ quizState, setQuizState }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/quiz"
              element={
                <Quiz
                  indexState={{ currIndex, setCurrIndex }}
                  question={questions[currIndex]}
                  length={questions.length}
                />
              }
            />
            <Route path="/result" element={<Result />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </QuizStateContext.Provider>
      </QuizIndexContext.Provider>
    </div>
  )
}

export default App
