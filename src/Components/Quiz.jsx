import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { QuizStateContext } from "../App.jsx";
import "./Quiz.css";

function Quiz(props) {
  const { indexState, question, length } = props;
  const { currIndex, setCurrIndex } = indexState;

  const { quizState, setQuizState } = useContext(QuizStateContext);

  const navigate = useNavigate();

  const handleOptionClick = (selected) => {
    const selectedOption =
      selected === "A"
        ? question.optionA
        : selected === "B"
        ? question.optionB
        : selected === "C"
        ? question.optionC
        : selected === "D"
        ? question.optionD
        : null;

    handleQuizState(selectedOption, question);

    if (selectedOption === question.answer) alert("Correct Answer!");
    else alert("Wrong Answer!");

    handleNextQues();
  };

  const handleQuizState = (selectedOption, question) => {
    const isCorrect = selectedOption === question.answer;
    const updatedAttemptedQuestions = [...quizState];

    const existingAttempt = updatedAttemptedQuestions.find(
      (attempted) => attempted.question === question.question
    );

    if (existingAttempt) {
      existingAttempt.selectedOption = selectedOption;
    } else {
      updatedAttemptedQuestions.push({
        question: question.question,
        selectedOption,
        isCorrect,
      });
    }

    setQuizState(updatedAttemptedQuestions);
  };

  const handleNextQues = () => {
    const nextIndex = currIndex + 1;

    if (nextIndex === length) {
      navigate("/result");
    } else {
      setCurrIndex(nextIndex % length);
    }
  };

  const handlePrevQues = () => {
    if (currIndex > 0) {
      setCurrIndex((currIndex - 1 + length) % length);
    }
  };

  return (
    <div id="quiz">
      <div id="container">
        <div id="sidebar"></div>
        <h2 id="question">Question</h2>
        <p id="num">
          <span>{currIndex + 1}</span> of <span>{length}</span>
        </p>
        <span id="curr-ques">{question.question}</span>
        <div id="options">
          <div className="option" onClick={() => handleOptionClick("A")}>
            {question.optionA}
          </div>
          <div className="option" onClick={() => handleOptionClick("B")}>
            {question.optionB}
          </div>
          <div className="option" onClick={() => handleOptionClick("C")}>
            {question.optionC}
          </div>
          <div className="option" onClick={() => handleOptionClick("D")}>
            {question.optionD}
          </div>
        </div>
        <div id="controls">
          <button id="previous" onClick={handlePrevQues}>
            Previous
          </button>
          <button id="next" onClick={handleNextQues}>
            Next
          </button>
          <button
            id="quit"
            onClick={() => {
              if (window.confirm("Are you sure you want to quit ?"))
                navigate("/");
              else console.log("Continue your quiz");
            }}
          >
            Quit
          </button>
          <Link to="/result" id="finish">
            Finish
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
