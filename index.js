const unit = document.getElementById("input");
const convertBtn = document.getElementById("convert-btn");
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");

function lengthconv(unit) {
  let output = `${unit.value} meters = ${(unit.value * 3.281).toFixed(
    3
  )} feet | ${unit.value} feet = ${(unit.value * 0.3048).toFixed(3)} meters`;
  length.innerHTML = output;
}

function volumeconv(unit) {
  let output = `${unit.value} liters = ${(unit.value * 0.264).toFixed(
    3
  )} gallons | ${unit.value} gallons = ${(unit.value * 3.785).toFixed(
    3
  )} liters`;
  volume.innerHTML = output;
}

function massconv(unit) {
  let output = `${unit.value} kilograms = ${(unit.value * 2.205).toFixed(
    3
  )} pounds | ${unit.value} pounds = ${(unit.value * 0.454).toFixed(
    3
  )} kilograms`;
  mass.innerHTML = output;
}

convertBtn.addEventListener("click", function () {
  lengthconv(unit);
  volumeconv(unit);
  massconv(unit);
});
