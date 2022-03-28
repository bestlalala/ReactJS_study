const quotes = [
    {
        quote: "Believe in yourself."
    },
    {
        quote: "Seize the day."
    },
    {
        quote: "Don’t dream, Be it",
        author: "Tim curry"
    },
    {
        quote: "Life is unfair, get used to it"
    },
    {
        quote: "Don't waste your youth."
    },
    {
        quote: "I find the harder I work, the more luck I have.",
        author: "Thomas Jefferson"
    },
    {
        quote: "Life is all about timing"
    },
    {
        quote: "Whatever you do, make it pay."
    },
    {
        quote: "You will never know until you try."
    },
    {
        quote: "Let bygones be bygones."
    },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
