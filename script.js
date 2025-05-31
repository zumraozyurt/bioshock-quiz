document.getElementById('quiz-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Initialize character scores
  const scores = {
    AndrewRyan: 0,
    BrigidTenenbaum: 0,
    FrankFontaine: 0,
    Atlas: 0,
    SanderCohen: 0,
    Jack: 0,
    YiSuchong: 0,
    JulieLangford: 0
  };

  // Check if all questions are answered
  let allAnswered = true;
  
  // Count votes for each character
  document.querySelectorAll('.question').forEach((question, index) => {
    const selected = question.querySelector('input[type="radio"]:checked');
    if (!selected) {
      allAnswered = false;
      alert(`Please answer question ${index + 1}`);
      return;
    }
    scores[selected.value]++;
  });

  if (!allAnswered) return;

  // Find character with highest score
  let maxScore = 0;
  let resultCharacter = 'Jack'; // default fallback
  
  for (const character in scores) {
    if (scores[character] > maxScore) {
      maxScore = scores[character];
      resultCharacter = character;
    }
  }

  // Redirect to the corresponding result page
  window.location.href = `${resultCharacter.toLowerCase()}.html`;
});