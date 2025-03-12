const words = ["Frontend Developer", "Python Programmer", "Web Developer"];
let index = 0;

function showText() {
    let textContainer = document.querySelector(".text");
    textContainer.innerHTML = `<span class="fade-in">${words[index]}</span>`;

    index = (index + 1) % words.length; // Loop back to the first word
}

// Initial call and interval for looping effect
showText();
setInterval(showText, 2000); // Change text every 2 seconds
