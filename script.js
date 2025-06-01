document.getElementById('quiz-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Initialize character scores
    const scores = initializeScores();

    if (!allQuestionsAnswered(scores)) {
        alert("Please answer all of the questions");
        return;
    }
    const result = getResult(scores);
    redirectToResult(result);
});

function initializeScores() {
    return {
        AndrewRyan: 0,
        BrigidTenenbaum: 0,
        FrankFontaine: 0,
        Atlas: 0,
        SanderCohen: 0,
        Jack: 0,
        YiSuchong: 0,
        JulieLangford: 0
    };
}
function allQuestionsAnswered(scores) {
    let allAnswered = true;
    document.querySelectorAll('.question').forEach((question) => {
        const selected = question.querySelector('input[type="radio"]:checked');
        if (!selected) {
            allAnswered = false;
            question.style.border = "2px solid #800020"; // Highlight unanswered questions
        }
        else {
            question.style.border = ""; // Reset border if answered
            scores[selected.value]++;
        }
    });
    return allAnswered;
}

function getResult(scores) {
    let maxScore = 0;
    let result = "Jack"; // default fallback

    for (const character in scores) {
        if (scores[character] > maxScore) {
            maxScore = scores[character];
            result = character;
        }
    }
    return result;
}
function redirectToResult(character) {
    window.location.href = `${character.toLowerCase()}.html`;
}