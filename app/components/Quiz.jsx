export default function Quiz(props) {
  return (
    <div className="quiz-container">
      <h2 className="quiz-qst">Question</h2>
      <p className="quiz-answer">Answer</p>
      <button className="quiz-btn" onClick={props.checkResults}>Check results</button>
    </div>
  )
}
