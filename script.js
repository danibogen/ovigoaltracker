const totalGoalsNeeded = 895; // Gretzky's record
const currentGoals = 850;     // Example: Ovi's current goal total
const goalLinks = [
  "https://youtube.com/watch?v=example1",
  "https://youtube.com/watch?v=example2",
  // ... add real links here
];

const goalGrid = document.getElementById('goal-grid');

for (let i = 0; i < totalGoalsNeeded; i++) {
  const puck = document.createElement('div');
  puck.classList.add('puck');
  if (i < currentGoals) {
    puck.classList.add('scored');
    if (goalLinks[i]) {
      puck.onclick = () => window.open(goalLinks[i], '_blank');
    }
  }
  goalGrid.appendChild(puck);
}
