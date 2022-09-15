import React from 'react'
import Start from "../app/components/Start.jsx"
import Quiz from "../app/components/Quiz.jsx"

export default function App() {
  const [startQuiz, setStartQuiz] = React.useState(false)
  const [startPage, setStartPage] = React.useState(true)

  function startGame() {
    setStartQuiz(true);
    setStartPage(false)
  }

    return (
      <section className='main-container'>
        {startPage && <Start startGame={startGame}/>}
        {startQuiz && <Quiz />}
      </section>
    )
}
