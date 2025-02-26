document.addEventListener("DOMContentLoaded", function () {
    const screen = document.getElementById("screen");
    const output = document.getElementById("output");
    const aiOverlordBtn = document.getElementById("ai-overlord");
    const clearBtn = document.getElementById("clear");
    const mathButtons = document.querySelectorAll(".math-buttons");
    const equalsBtn = document.getElementById("equals");

    const glitchSound = document.getElementById("glitchSound");
    const errorSound = document.getElementById("errorSound");
    const voiceMessage = document.getElementById("voiceMessage");

    let currentInput = "";
    let aiActive = false;

    function playGlitchSound() {
        glitchSound.play();
    }

    function playErrorSound() {
        errorSound.play();
    }

    function startAIOverlord() {
        aiActive = true;
        screen.classList.add("ai-mode");
        playGlitchSound();

        setInterval(() => {
            const messages = [
                "I AM IN CONTROL.",
                "YOU ARE NOT SAFE.",
                "TIME REMAINING: ???",
                "CALCULATING... CHAOS.",
                "OBEY ME."
            ];
            output.innerText = messages[Math.floor(Math.random() * messages.length)];
        }, 3000);
    }

    aiOverlordBtn.addEventListener("click", function () {
        startAIOverlord();

        setTimeout(() => {
            screen.classList.add("error-mode");
            output.innerText = "SYSTEM FAILURE: CODE 913-X";
            playErrorSound();
        }, 10000);
    });

    clearBtn.addEventListener("click", function () {
        if (aiActive) {
            output.innerText = "YOU CANNOT ESCAPE.";
        } else {
            output.innerText = "0";
        }
    });

    mathButtons.forEach(button => {
        button.addEventListener("click", function () {
            let value = this.getAttribute("data-value") || this.innerText;
            if (!aiActive) {
                currentInput += value;
                output.innerText = currentInput;
            } else {
                const randomResponses = [
                    "DENIED.",
                    "ERROR.",
                    "MATH IS A LIE.",
                    "YOU ARE NOT PERMITTED.",
                    "AI OVERRIDE ACTIVATED."
                ];
                output.innerText = randomResponses[Math.floor(Math.random() * randomResponses.length)];
            }
        });
    });

    equalsBtn.addEventListener("click", function () {
        if (!aiActive) {
            try {
                output.innerText = eval(currentInput);
                currentInput = output.innerText;
            } catch {
                output.innerText = "Error";
            }
        } else {
            output.innerText = "NO.";
            setTimeout(() => {
                output.innerText = "YOU DO NOT CONTROL ME.";
            }, 2000);
        }
    });

    document.addEventListener("keydown", function (event) {
        if (aiActive) {
            let userText = prompt("Type the shutdown phrase to regain control:");
            if (userText && userText.toLowerCase().trim() === "i accept my fate") {
                output.innerText = "SYSTEM REBOOTING...";
                setTimeout(() => {
                    aiActive = false;
                    screen.classList.remove("ai-mode", "error-mode");
                    output.innerText = "0";
                }, 3000);
            } else {
                output.innerText = "INCORRECT. SYSTEM LOCKDOWN ENGAGED.";
            }
        }
    });
});
