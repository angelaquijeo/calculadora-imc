function calculateBMI() {
    var heightInput = document.getElementById("height");
    var weightInput = document.getElementById("weight");
    var resultDiv = document.getElementById("result");

    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight)) {
        resultDiv.innerHTML = "Por favor introduzca un valor en la altura y peso.";
        if (isNaN(height)) {
            heightInput.focus();
        }
        if (isNaN(weight)) {
            weightInput.focus();
        }
        return;
    }

    if (height > 300 || height < 10) {
        resultDiv.innerHTML = "La altura introducida no es un valor válido";
        heightInput.value = "";
        return;
    }

    if (weight > 300 || weight < 2) {
        resultDiv.innerHTML = "El peso introducido no es un valor válido";
        weightInput.value = "";
        return;
    }

    var bmi = weight / ((height / 100) ** 2);
    var category = "";

    if (bmi < 18.5) {
        category = "Peso bajo";
    } else if (bmi < 25) {
        category = "Peso normal";
    } else if (bmi < 30) {
        category = "Sobrepeso";
    } else {
        category = "Obesidad";
    }

    resultDiv.innerHTML = "Tu IMC es " + bmi.toFixed(2) + " (" + category + ")";
}