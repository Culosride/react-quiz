export default function Quiz(props) {

  const answers = (props.wrongAnswer).map(answer => {
    return <p className="quiz-answer">{answer}</p>
  })

  return (
    <div className="quiz-container">
      <h3 className="quiz-qst">{props.question}</h3>
      <div className="quiz-answer-container">
        {answers}
        <p className="quiz-answer">{props.answer}</p>
      </div>
      <hr />
    </div>
  )
}
