const calculator = require("./calculator");

exports.bmiCalculator = (req, res) => {
  let toBeCalculateData = [
    {
      Gender: "Male",
      HeightCm: 171,
      WeightKg: 96,
    },
    {
      Gender: "Male",
      HeightCm: 161,
      WeightKg: 85,
    },
    {
      Gender: "Male",
      HeightCm: 180,
      WeightKg: 77,
    },
    {
      Gender: "Female",
      HeightCm: 166,
      WeightKg: 62,
    },
    {
      Gender: "Female",
      HeightCm: 150,
      WeightKg: 70,
    },
    {
      Gender: "Female",
      HeightCm: 167,
      WeightKg: 82,
    },
	
  ];
  let response = [];
  for (let index = 0; index < toBeCalculateData.length - 1; index++) {
    let currentInfo = toBeCalculateData[index];
    response.push(
      "Gender:" +
        currentInfo.Gender +
        ".\n" +
        "Height:" +
        currentInfo.HeightCm +
        ".\n" +
        "Weight:" +
        currentInfo.WeightKg +
        ".\n" +
        "BMI:" +
        calculator.calculate(currentInfo.HeightCm, currentInfo.WeightKg)
    );
  }
  res.send(response);
};
