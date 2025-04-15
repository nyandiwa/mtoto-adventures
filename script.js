
function checkAnswer(answer) {
  const feedback = document.getElementById('lessonFeedback');
  if (answer === 'no' || answer === 'ignore') {
    feedback.textContent = 'Good job! That is the safe choice.';
  } else {
    feedback.textContent = 'Oops! Try again and remember to stay safe.';
  }
}
