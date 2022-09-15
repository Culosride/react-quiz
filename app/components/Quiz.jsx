export default function Quiz(props) {

  const answers = (props.wrongAnswer).map(answer => {
    return answer
  })

  answers.push(props.answer)

  // generate randomly ordered array of answers everytime the component is rendered

  let allAnswers = answers.sort(() => Math.random() - 0.5)

  allAnswers = allAnswers.map((answer, i) => {
    return <p key={i} id={i} className="quiz-answer">{answer}</p>
  })


  return (
    <div className="quiz-container">
      <h3 className="quiz-qst">{props.question}</h3>
      <div className="quiz-answer-container">
        {allAnswers}
      </div>
      <hr />
    </div>
  )
}
