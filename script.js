const quotes = [
  { text: "Believe in yourself!", author: "Unknown" },
  { text: "Keep pushing forward.", author: "Anonymous" },
  { text: "Every day is a second chance.", author: "Oprah Winfrey" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "Stay positive, work hard, make it happen.", author: "Unknown" }
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById("quote").innerText = `${randomQuote.text} - ${randomQuote.author}`;
