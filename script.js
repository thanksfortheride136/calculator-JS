document.addEventListener("DOMContentLoaded", function () {
    const screen = document.getElementById("screen");
    const output = document.getElementById("output");
    const clearBtn = document.getElementById("clear");
    const randomBtn = document.getElementById("random");
    const doomBtn = document.getElementById("doomMode");
    const calcContainer = document.getElementById("calc");
    const bsodScreen = document.getElementById("bsod");

    let currentInput = "";
    let doomActive = false;
    
    document.querySelectorAll(".math-buttons").forEach(button => {
        button.addEventListener("click", function () {
            if (doomActive) {
                output.innerText = "💀 SYSTEM FAILURE 💀";
                return;
            }
            let value = this.getAttribute("data-value");
            currentInput += value;
            output.innerText = currentInput;
        });
    });

    document.getElementById("equals").addEventListener("click", function () {
        if (doomActive) {
            output.innerText = "🔥 ERROR: REALITY COLLAPSED 🔥";
            return;
        }
        try {
            output.innerText = eval(currentInput);
            currentInput = output.innerText;
        } catch {
            output.innerText = "ERROR";
        }
    });

    clearBtn.addEventListener("click", function () {
        if (doomActive) return;
        output.innerText = "0";
        currentInput = "";
    });

    randomBtn.addEventListener("click", function () {
        let options = [
            () => { output.innerText = "42"; },
            () => { document.body.style.background = "red"; },
            () => { bsodScreen.style.display = "flex"; setTimeout(() => bsodScreen.style.display = "none", 5000); },
            () => { output.innerText = "HELPME"; },
            () => { alert("THE END IS NEAR"); },
            () => { output.innerText = "Why did you press that?"; }
        ];
        options[Math.floor(Math.random() * options.length)]();
    });

    doomBtn.addEventListener("click", function () {
        if (doomActive) return;
        doomActive = true;

        // Play DOOM music and explosion
        let explosionSound = new Audio("https://www.myinstants.com/media/sounds/explosion.mp3");
        let doomMusic = new Audio("https://www.myinstants.com/media/sounds/doom-eternal-music.mp3");
        let scream = new Audio("https://www.myinstants.com/media/sounds/wilhelm-scream.mp3");

        explosionSound.play();
        setTimeout(() => {
            doomMusic.loop = true;
            doomMusic.play();
            scream.play();
        }, 1500);

        // CHAOS ACTIVATION
        document.body.style.animation = "flashingBackground 0.1s infinite alternate";
        screen.classList.add("ai-mode");
        calcContainer.classList.add("shaking");

        let messages = [
            "🔥 DOOM MODE ACTIVATED 🔥",
            "⚠️ SYSTEM OVERRIDE ⚠️",
            "ERROR: MEMORY CORRUPTED",
            "🚨 CRITICAL FAILURE 🚨",
            "💀 YOU CANNOT ESCAPE 💀",
            "🌋 REALITY COLLAPSING 🌋"
        ];
        
        let interval = setInterval(() => {
            output.innerText = messages[Math.floor(Math.random() * messages.length)];
            output.style.transform = `rotate(${Math.random() * 30 - 15}deg) scale(${Math.random() * 1.5})`;
        }, 400);

        // FINAL PHASE: CALCULATOR DISINTEGRATES
        setTimeout(() => {
            output.innerText = "☠️ SYSTEM DESTROYED ☠️";
            document.body.style.background = "black";
            document.body.innerHTML = "<h1 style='color:red; font-size: 5rem; text-align:center;'>💥 I AM BECOME DEATH, DESTROYER OF WORLDS 💥</h1>";
            clearInterval(interval);
        }, 10000);
    });
});
