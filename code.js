document.querySelector("#alert").addEventListener("click", function () {
  alert("You have successfully clicked the button!");
});

document.querySelector("#confirm").addEventListener("click", function () {
  confirm("Are you sure you want to press the button!");
});

document.querySelector("#prompt").addEventListener("click", function () {
  var age = prompt("Please add your age", 18);

  if (age >= 18) {
    alert("You can get through");
  } else {
    alert("You are young");
  }
});

// throw new Error("Error"); //console working untill 23row
console.error("Console.error");

console.log("Console.log");
console.warn("Console.warn");
console.info("Console.info");

