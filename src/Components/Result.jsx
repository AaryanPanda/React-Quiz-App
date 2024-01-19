import React, { useEffect, useContext, useState } from "react";
import { QuizIndexContext, QuizStateContext } from "../App.jsx";
import { useNavigate } from "react-router-dom";
import "./Result.css";

function Result() {
  const { quizState, setQuizState } = useContext(QuizStateContext);
  const { setCurrIndex } = useContext(QuizIndexContext);

  const [correctAns, setCorrectAns] = useState(0);
  const [wrongAns, setWrongAns] = useState(0);
  const [attemptNum, setAttemptNum] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    let correctCount = 0;
    let wrongCount = 0;

    quizState.forEach((attempt) => {
      if (attempt.isCorrect) correctCount++;
      else wrongCount++;
    });

    setCorrectAns(correctCount);
    setWrongAns(wrongCount);
    setAttemptNum(quizState.length);
  }, [quizState]);


   const calculatePercentage = (score, total) => {
    return ((score / total) * 100).toFixed(0);
  };

  const percentage = calculatePercentage(correctAns, 15);

  return (
    <div id="result">
      <div id="res">
        <p>Result</p>
      </div>

      <div id="scoreboard">
        <div id="sidebar2"></div>
        <p id="comment">You need more practice!</p>
        <span id="score">
          Your score is <span>{percentage}%</span>
        </span>
        <div id="more-details">
          <p className="details">
            <span>Total number of questions</span>
            <span>15</span>
          </p>
          <p className="details">
            <span>Number of attempted questions</span>
            <span>{attemptNum}</span>
          </p>
          <p className="details">
            <span>Number of correct answers</span>
            <span>{correctAns}</span>
          </p>
          <p className="details">
            <span>Number of wrong answers</span>
            <span>{wrongAns}</span>
          </p>
        </div>
      </div>

      <div id="controls">
        <button
          id="play-again"
          onClick={() => {
            setQuizState([]);
            setCurrIndex(0);
            navigate("/quiz");
          }}
        >
          Play Again
        </button>
        <button
          id="back-home"
          onClick={() => {
            setQuizState([]);
            setCurrIndex(0);
            navigate("/");
          }}
        >
          Back to home
        </button>
      </div>
    </div>
  );
}

export default Result;
