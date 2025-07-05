// Toggle hamburger menu
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("show");
});

// Notifikasi Save
document.getElementById("saveBtn").addEventListener("click", function () {
  const notif = document.createElement("div");
  notif.textContent = "Be pround of yourself today🤗";
  notif.className = "save-notif";
  document.body.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
});

// Mood Tracker
document.querySelectorAll('input[name="mood"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    const moodMessage = document.getElementById("mood-message");
    moodMessage.textContent = "Your mood has been bottled up safely 🧴💖";
  });
});

// Quotes
const quotes = [
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Every day is a second chance.", author: "Unknown" },
  { text: "You are stronger than you think.", author: "Unknown" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { text: "Make today so awesome, yesterday gets jealous.", author: "Unknown" }
];

document.getElementById("newQuoteBtn").addEventListener("click", function () {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteText").textContent = "Believe you can and you're halfway there.";
  document.getElementById("quoteAuthor").textContent = "Start where you are. Use what you have. Do what you can.";
});