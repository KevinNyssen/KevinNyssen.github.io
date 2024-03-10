document.getElementById("registerButton").addEventListener("click", function() {
    alert("Registration successful!");
// Update section title based on the event
});

const eventType = document.getElementById('eventType');
const eventWords = ['boda', 'aniversario', 'cumpleaños', 'despedida','quinceaños'];
const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffa500', '#800080']; // Add colors for each event

let currentIndex = 0;

function changeEventText() {
    eventType.innerText = eventWords[currentIndex];
    eventType.style.color = colors[currentIndex];
    currentIndex = (currentIndex + 1) % eventWords.length;
}

setInterval(() => {
    changeEventText();
}, 4000); // Change every 4 seconds


