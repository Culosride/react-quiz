import React from 'react'
import Start from "../app/components/Start.jsx"
import Quiz from "../app/components/Quiz.jsx"

export default function App() {
  const [startQuiz, setStartQuiz] = React.useState(false)
  const [startPage, setStartPage] = React.useState(true)
  const [questions, setQuestions] = React.useState([])
  const [select, setSelected] = React.useState(false)

  function checkResults(){
    console.log("ciao")
  }

  function startGame() {
    setStartQuiz(true);
    setStartPage(false)
  }
  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then(res => res.json())
      .then(data => setQuestions(data.results))
    }, [])

  const questionsElements = questions.map((qst, i) =>
    (<Quiz
      question={qst.question}
      answer={qst.correct_answer}
      wrongAnswer={qst.incorrect_answers}
      key={i}
    />)
  )

  return (
    <section className='main-container'>
      {startPage && <Start startGame={startGame}/>}
      {startQuiz && questionsElements}
      {startQuiz && <button className="results-btn" onClick={checkResults}>Check results</button>}
    </section>
  )
}
