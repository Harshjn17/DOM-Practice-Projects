const quotes = [
  {
    id: 1,
    quote: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    id: 2,
    quote: "Success is the sum of small efforts repeated daily.",
    author: "Robert Collier"
  },
  {
    id: 3,
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    id: 4,
    quote: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  },
  {
    id: 5,
    quote: "Your only limit is your mind.",
    author: "Unknown"
  },
  {
    id: 6,
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    id: 7,
    quote: "Do something today that your future self will thank you for.",
    author: "Sean Patrick Flanery"
  },
  {
    id: 8,
    quote: "Hard work beats talent when talent doesn't work hard.",
    author: "Tim Notke"
  },
  {
    id: 9,
    quote: "Stay hungry. Stay foolish.",
    author: "Steve Jobs"
  },
  {
    id: 10,
    quote: "The future depends on what you do today.",
    author: "Mahatma Gandhi"
  },
  {
    id: 11,
    quote: "Action is the foundational key to all success.",
    author: "Pablo Picasso"
  },
  {
    id: 12,
    quote: "Great things never come from comfort zones.",
    author: "Unknown"
  },
  {
    id: 13,
    quote: "Every expert was once a beginner.",
    author: "Helen Hayes"
  },
  {
    id: 14,
    quote: "Focus on progress, not perfection.",
    author: "Unknown"
  },
  {
    id: 15,
    quote: "Discipline is choosing what you want most over what you want now.",
    author: "Abraham Lincoln (attributed)"
  },
  {
    id: 16,
    quote: "Small steps every day lead to big results.",
    author: "Unknown"
  },
  {
    id: 17,
    quote: "You don't have to be great to start, but you have to start to be great.",
    author: "Zig Ziglar"
  },
  {
    id: 18,
    quote: "Opportunities don't happen. You create them.",
    author: "Chris Grosser"
  },
  {
    id: 19,
    quote: "Consistency is more important than intensity.",
    author: "Unknown"
  },
  {
    id: 20,
    quote: "Never stop learning because life never stops teaching.",
    author: "Unknown"
  }
];

let author = document.querySelector('.author');
let quote = document.querySelector('.quote');
let btn = document.querySelector('#btn');
let copyBtn = document.querySelector('#copyBtn');

function generateQuotes() {
  let random = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[random].quote;
  author.textContent = `— ${quotes[random].author}`;
}

generateQuotes();

copyBtn.addEventListener('click', ()=>{
    navigator.clipboard.writeText(quote.textContent);
});

btn.addEventListener('click', ()=>{
  generateQuotes();
});