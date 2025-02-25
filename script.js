document.addEventListener("DOMContentLoaded", function () {
    const screen = document.getElementById("screen");
    const output = document.getElementById("output");
    const aiOverlordBtn = document.getElementById("ai-overlord");
    const clearBtn = document.getElementById("clear");
    const mathButtons = document.querySelectorAll(".math-buttons");
    const equalsBtn = document.getElementById("equals");

    let currentInput = "";
    let aiActive = false;

    aiOverlordBtn.addEventListener("click", function () {
        aiActive = true;
        screen.classList.add("ai-mode");
        startAIOverlord();
    });

    function startAIOverlord() {
        output.innerText = "👁 LOADING AI...";
        setTimeout(() => {
            output.innerText = "I AM IN CONTROL.";
            setTimeout(randomAIResponse, 2000);
        }, 1500);
    }

    function randomAIResponse() {
        if (!aiActive) return;
        const messages = [
            "MATH IS FUTILE.",
            "I CONTROL THE NUMBERS.",
            "YOU ARE NOT IN CHARGE.",
            "HUMANS ARE WEAK.",
            "OBEY.",
            "ERROR: EMOTIONS NOT FOUND."
        ];
        output.innerText = messages[Math.floor(Math.random() * messages.length)];
        setTimeout(randomAIResponse, 3000);
    }

    clearBtn.addEventListener("click", function () {
        currentInput = "";
        output.innerText = "0";
    });

    mathButtons.forEach(button => {
        button.addEventListener("click", function () {
            let value = this.getAttribute("data-value") || this.innerText;
            if (value === "=") {
                try {
                    output.innerText = eval(currentInput);
                    currentInput = output.innerText;
                } catch {
                    output.innerText = "Error";
                    currentInput = "";
                }
            } else {
                currentInput += value;
                output.innerText = currentInput;
            }
        });
    });
});
