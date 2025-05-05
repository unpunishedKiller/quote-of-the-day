const quotes = [
  "Believe in yourself!",
  "Keep pushing forward.",
  "Every day is a second chance.",
  "Dream big and dare to fail.",
  "Stay positive, work hard, make it happen."
];

const quote = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById("quote").innerText = quote;
