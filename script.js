const score = document.getElementById("score");
const nokotan = document.querySelector(".nokotan");
const one = document.querySelector('.one');
const energy = document.getElementById('energy');

// Initialize score from localStorage or set to 0
let storedScore = localStorage.getItem('score');
score.textContent = storedScore ? storedScore : 0;

// Initialize energy value if not set
if (energy.textContent === '') {
  energy.textContent = '100'; // Or any other default value
}

let energyInterval;

// Function to start incrementing energy
function startEnergyIncrement() {
  if (!energyInterval) {
    energyInterval = setInterval(() => {
      if (parseInt(energy.textContent) < 100) {
        energy.textContent = parseInt(energy.textContent) + 1; // Increment by 1
      }
    }, 300); // Adjust the interval as needed
  }
}

// Function to stop incrementing energy
function stopEnergyIncrement() {
  if (energyInterval) {
    clearInterval(energyInterval);
    energyInterval = null;
  }
}

nokotan.addEventListener('mousedown', (event) => {
  stopEnergyIncrement(); // Stop energy increment when clicking starts

  if (parseInt(energy.textContent) > 0) {
    var x = event.clientX;
    var y = event.clientY;

    plusOne(x, y); // Pass the coordinates to the function
    let currentScore = parseInt(score.textContent);
    currentScore += 1;
    score.textContent = currentScore;
    localStorage.setItem('score', currentScore);

    if (currentScore === 10) {
      alert("Thank you for playing");
    }

    energy.textContent = parseInt(energy.textContent) - 1;
  }
});

// Handle click end and restart energy increment if needed
let clickTimeout;
document.addEventListener('mouseup', () => {
  clearTimeout(clickTimeout);
  clickTimeout = setTimeout(() => {
    startEnergyIncrement(); // Restart energy increment if no clicks are detected
  }, 300); // Adjust delay as needed
});

function plusOne(x, y) {
  const plus = document.createElement('p');
  plus.textContent = '+1';
  one.appendChild(plus);

  // Position the "+1" element at the click coordinates
  plus.style.position = 'absolute';
  plus.style.top = y + 'px';
  plus.style.left = x + 'px';
  plus.style.opacity = '1';
  plus.style.transition = 'all 1s ease-out';

  // Animate the "+1" upwards and fade out
  setTimeout(() => {
    plus.style.top = (y - 50) + 'px';  
    plus.style.opacity = '0';  

    // Remove the element after animation
    setTimeout(() => {
      plus.remove();
    }, 1000); // Remove after the transition ends
  }, 20); 
}
