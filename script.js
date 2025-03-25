fetch("goals.json")
  .then(response => response.json())
  .then(data => {
    const goalGrid = document.getElementById("goal-grid");
    const totalGoals = 895; // Gretzky's record
    const scoredGoals = data.goals;

    for (let i = 1; i <= totalGoals; i++) {
      const puck = document.createElement("div");
      puck.classList.add("puck");
      puck.textContent = i;

      const goalData = scoredGoals.find(goal => goal.number === i);
      if (goalData) {
        puck.classList.add("scored");
        puck.title = `Goal #${i}: vs ${goalData.opponent} on ${goalData.date}`;
      } else {
        puck.title = `Goal #${i}: Not yet scored`;
      }

      goalGrid.appendChild(puck);
    }
  });
