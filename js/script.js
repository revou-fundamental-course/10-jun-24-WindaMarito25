const conversionType = document.getElementById("conversionType");
const inputNumber = document.getElementById("inputNumber");
const calculationsResult = document.getElementById("calculationsResult");
const detailsCalculation = document.getElementById("detailsCalculation");

function konversi() {
  calculateConversion();
  displayCalculate();
}

// Fungsi menghitung konversi
function calculateConversion() {
  const selectedOption = conversionType.value;
  const temperature = parseFloat(inputNumber.value);

  let result;
  switch (selectedOption) {
    case "celsius-to-fahrenheit":
      result = (temperature * 9) / 5 + 32;
      break;
    case "fahrenheit-to-celsius":
      result = (temperature * 9) / 5 - 32;
      break;
  }

  if (result) {
    calculationsResult.value = result.toFixed(2);
  } else {
    calculationsResult.value = "";
  }
}

// fungsi menampilkan rumus dari hasil konversi
function displayCalculate() {
  const selectedOption = conversionType.value;
  const temperature = inputNumber.value;
  let calcText;

  switch (selectedOption) {
    case "celsius-to-fahrenheit":
      calcText = temperature + " * (9/5) + 32 = " + calculationsResult.value;
      break;
    case "fahrenheit-to-celsius":
      calcText = temperature + " * (9/5) - 32 = " + calculationsResult.value;
      break;
  }

  if (calculationsResult.value === "") {
    detailsCalculation.value = "";
  } else {
    detailsCalculation.value = calcText;
  }
}

// Fungsi untuk membalikkan jenis konversi
function reverse() {
  const selectedOption = conversionType.value;
  let reversedOption;

  switch (selectedOption) {
    case "celsius-to-fahrenheit":
      reversedOption = "fahrenheit-to-celsius";
      break;
    case "fahrenheit-to-celsius":
      reversedOption = "celsius-to-fahrenheit";
      break;
  }

  conversionType.value = reversedOption;
  calculateConversion();
  displayCalculate();
}

// fungsi menghapus
function reset() {
  inputNumber.value = "";
  calculationsResult.value = "";
  detailsCalculation.value = "";
}
