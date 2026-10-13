import { useState } from 'react'

function FeedbackButtons() {
  const [feedback, setFeedback] = useState('')

  function handleFeedback(value) {
    setFeedback(value)
  }

  return (
    <div>
      <h3>Was this recommendation helpful?</h3>

      <button onClick={() => handleFeedback('Helpful')}>
        👍 Helpful
      </button>

      <button onClick={() => handleFeedback('Not helpful')}>
        👎 Not helpful
      </button>

      <button onClick={() => handleFeedback('Try again')}>
        🔄 Try another recommendation
      </button>

      {feedback && (
        <p role="status">
          {feedback === 'Try again'
            ? 'You can try another recommendation.'
            : `Thank you for your feedback: ${feedback}.`}
        </p>
      )}
    </div>
  )
}

export default FeedbackButtons