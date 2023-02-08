import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const questions = [
    {
      questionText: 'Which planet has the most moons?',
      answerOptions: [
        { answerText: 'Mars', isCorrect: false },
        { answerText: 'Earth', isCorrect: false },
        { answerText: 'Saturn', isCorrect: true },
        { answerText: 'Venus', isCorrect: false },
      ],
    },
    {
      questionText: 'What country has won the most World Cups?',
      answerOptions: [
        { answerText: 'France', isCorrect: false },
        { answerText: 'Brazil', isCorrect: true },
        { answerText: 'Argentina', isCorrect: false },
        { answerText: 'Germany', isCorrect: false },
      ],
    },
    {
      questionText: 'How many bones do we have in an ear? ',
      answerOptions: [
        { answerText: '2', isCorrect: false },
        { answerText: '3', isCorrect: true },
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
      ],
    },
    {
      questionText: 'How many countries in the world?',
      answerOptions: [
        { answerText: '120', isCorrect: false },
        { answerText: '183', isCorrect: false },
        { answerText: '170', isCorrect: false },
        { answerText: '195', isCorrect: true },
      ],
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuetions = currentQuestion + 1;

    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    }
    else {
      setShowScore(true)
    }
  }

  return (
    <>
      <h1 className='header'>Quiz</h1>
      <div className="app">
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of {questions.length}
          </div>
        )
          :
          (
            <>
              <div className='question-section'>
                <div className='question-count'>
                  <span>Question {currentQuestion + 1}</span>{questions.length}
                </div>
                <div className='question-text'>
                  {questions[currentQuestion].questionText}
                </div>
              </div>

              <div className='answer-section'>
                {
                  questions[currentQuestion].answerOptions.map((answerOptions) => (
                    <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
                  ))
                }
              </div>
            </>
          )}
      </div>
    </>
  );
}

export default App;