import React from "react"

export default function Quiz(props) {

  // returns array of single wrong answers
  const answers = (props.wrongAnswer).map(answer => answer)

  // adds right answer to array of wrong answers
  answers.push(props.answer)

  // generates randomly ordered array of answers everytime the component is rendered
  let answersRandomized = answers.sort(() => Math.random() - 0.5)

  // generates answers state with held attribute
  const [allAnswers, setAllAnswers] = React.useState(genAnswers())


  function genAnswers() {
    const nArr = []
    for (let i = 0; i < answersRandomized.length; i++) {
      nArr.push(genAnswer(i));
    }
    return nArr
  }

  function genAnswer(i) {
    return {
      value: answersRandomized[i],
      id: i,
      key: i,
      held: false,
      correctAnswer: props.answer
    }
  }

  const answerElements = allAnswers.map((answer, i) =>
    (<p
      key={i}
      id={i}
      onClick={() => holdAnswer(answer.id)}
      held={answer.held.toString()}
      style={{backgroundColor: answer.held ? "#f33dc2" : "rgba(140,30,255, 0.2)",
              color: answer.held ? "white" : "#8c1eff"}}
      className="quiz-answer">
        {answer.value}
      </p>
    )
  )

  function holdAnswer(id) {
    setAllAnswers(prevAnswers => prevAnswers.map(answer => {
      return (answer.id === id) ? ({...answer, held: !answer.held}) : answer
    }))
  }

  return (
    <div className="quiz-container">
      <h3 className="quiz-qst">{props.question}</h3>
      <div className="quiz-answer-container">
        {answerElements}
      </div>
      <hr />
    </div>
  )
}
