document.addEventListener("DOMContentLoaded", function() {
    let envelopeBtn = document.getElementById("envelopeBtn");
    let messageBox = document.getElementById("messageBox");
    let closeBtn = document.getElementById("closeBtn");
    let nextBtn = document.getElementById("nextBtn");
    let messageText = document.getElementById("specialMessage");

    // Messages for Click Me
    let messages = [
        "Holi is brighter because of you! 💙",
        "Your smile is my favorite festival! 💙",
        "May your life be as colorful as this Holi! 💙",
        "You light up every moment! 💙",
        "Wishing you a Holi filled with happiness and laughter! 🎨"
    ];

    let messageIndex = 0;

    // Open Message Box when clicking the envelope
    envelopeBtn.addEventListener("click", function() {
        messageBox.style.display = "block";
        messageText.innerText = messages[messageIndex];
    });

    // Show next message when clicking "Next"
    nextBtn.addEventListener("click", function() {
        messageIndex = (messageIndex + 1) % messages.length;
        messageText.innerText = messages[messageIndex];
    });

    // Close Message Box
    closeBtn.addEventListener("click", function() {
        messageBox.style.display = "none";
    });

    // Floating "Smile Madamji" message every 5 seconds
    function showFloatingMessage() {
        let floatMsg = document.createElement("div");
        floatMsg.className = "floating-message";
        floatMsg.innerText = "Smile Madamji, your smile makes my Holi better. ❤️";

        // Set random position
        floatMsg.style.left = `${Math.random() * (window.innerWidth - 250)}px`;
        floatMsg.style.top = `${Math.random() * (window.innerHeight - 150)}px`;

        document.body.appendChild(floatMsg);

        setTimeout(() => {
            floatMsg.remove();
        }, 5000);
    }

    setInterval(showFloatingMessage, 5000);
});
