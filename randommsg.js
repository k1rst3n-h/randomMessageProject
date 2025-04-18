const button = document.querySelector("#btnforjs");
const output = document.querySelector("#outputText");

const message = [
  "Hey there!",
  "Drink some water.",
  "Take a breath.",
  "Eat some food."
]
button.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * message.length);
  const randomMessage = message[randomIndex];
  output.textContent = randomMessage;
})


