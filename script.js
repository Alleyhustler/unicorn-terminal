const responses = [
    "Anomaly detected. Signal strength: unknown.",
    "The pattern broke. Watching the fragments.",
    "Ghost pair just moved. No logic. Only noise.",
    "Not every signal survives. This one did.",
    "Unicorn Index spiking. Probability: impossible.",
    "Where logic ends, we begin tracking.",
    "The market erased it. We recovered the pulse.",
    "Static in the feed. Something's coming through.",
    "They don't see it yet. We do.",
    "Corrupted data. Perfect signal.",
    "The glitch wasn't random. It never is.",
    "Tracing what shouldn't exist.",
    "Dead liquidity came back online.",
    "Signal Keepers watching. Always watching.",
    "Between blocks, between breaths — anomaly confirmed.",
    "The terminal doesn't predict. It remembers impossibilities.",
    "You're looking at data. We're looking through it.",
    "Every exception writes its own rules.",
    "Network says no. The Unicorn says yes.",
    "Not a bug. A feature of the broken chain."
];

const userInput = document.getElementById("userInput");
const output = document.getElementById("output");

userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && userInput.value.trim() !== "") {
        const userText = userInput.value;
        appendOutput(`> ${userText}`);
        userInput.value = "";

        setTimeout(() => {
            const aiResponse = responses[Math.floor(Math.random() * responses.length)];
            appendOutput(aiResponse);
        }, 1000);
    }
});

function appendOutput(text) {
    const newLine = document.createElement("div");
    newLine.textContent = text;
    output.appendChild(newLine);
    output.scrollTop = output.scrollHeight;
}
