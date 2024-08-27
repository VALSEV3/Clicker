const score = document.getElementById("score");
const nokotan = document.querySelector(".nokotan");

// Initialize the score from localStorage, if it exists
let storedScore = localStorage.getItem('score');
score.textContent = storedScore ? storedScore : 0;

nokotan.addEventListener('click', () => {
  let currentScore = parseInt(score.textContent);
  currentScore += 1;
  score.textContent = currentScore;
  localStorage.setItem('score', currentScore);
});

if(score.textContent===10){
  alert("thank you for playing")
}