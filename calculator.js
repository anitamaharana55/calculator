exports.calculate = (height, weight) => {
  let bmi = weight / Math.pow(height / 100, 2);

  if (bmi <= 18.4) {
    return "Malnutrition risk";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Low risk";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Enhanced risk";
  } else if (bmi >= 30 && bmi <= 34.9) {
    return "Medium risk";
  } else if (bmi >= 35 && bmi <= 39.9) {
    return "High risk";
  } else {
    return "Very high risk";
  }
};
