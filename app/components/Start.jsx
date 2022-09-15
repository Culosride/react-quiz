export default function Start(props) {
  return (
    <div className="start-container">
      <h1 className="start-header">Quizzical</h1>
      <p className="start-desc">Description</p>
      <button onClick={props.startGame} className="start-btn">Start quiz</button>
    </div>
  )
}
