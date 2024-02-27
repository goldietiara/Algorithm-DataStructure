// RECURSIVE ᕦʕ •`ᴥ•´ʔᕤ

const dietPlan = (gender, caloriesInTake) => {
  let calories = 0;

  if (gender === "man") {
    if (caloriesInTake === 2100) {
      return `you have to eat ${caloriesInTake} calories a day`;
    }

    if (caloriesInTake != 2100) {
      if (caloriesInTake < 2100) {
        calories + 1;
        return dietPlan(gender, caloriesInTake + 1);
      }
      if (caloriesInTake > 2100) {
        calories - 1;
        return dietPlan(gender, caloriesInTake - 1);
      }
    }
  }
  if (gender === "woman") {
    if (caloriesInTake === 1200) {
      return `you have to eat ${caloriesInTake} calories a day`;
    }

    if (caloriesInTake != 1200) {
      if (caloriesInTake < 1200) {
        calories + 1;
        return dietPlan(gender, caloriesInTake + 1);
      }
      if (caloriesInTake > 1200) {
        calories - 1;
        return dietPlan(gender, caloriesInTake - 1);
      }
    }
  }
};

console.log(dietPlan("woman", 2500));

// RECURSIVE 2 ᕦʕ •`ᴥ•´ʔᕤ
