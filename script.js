let buttons = document.getElementsByClassName('math-buttons');

function buttonValue(){
    for(i = 0; i < buttons.length; i++){
        const textContent = buttons[i].textContent;
        if (textContent === "x"){
            console.log(textContent, "found");
        }
    }
}


//iterated through the loops to get the text content, now i need to say when clicked get the text content, and do the math operation. Maybe need to convert to int.