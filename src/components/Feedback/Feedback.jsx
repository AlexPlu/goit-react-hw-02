const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <h2>Feedback Statistics</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {isNaN(positiveFeedback) ? 0 : positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;