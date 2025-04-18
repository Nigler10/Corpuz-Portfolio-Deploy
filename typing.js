document.addEventListener("DOMContentLoaded", function () {
    const words = [" I G E R", " I G H T", " I N J A"];
    const textElement = document.getElementById("dynamic-text");
    const titleElement = document.getElementById("dynamic-title");

    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];
        const displayText = "N" + currentWord.substring(0, letterIndex);

        if (textElement) textElement.innerHTML = displayText;

        if (titleElement) titleElement.innerHTML = displayText;

        if (!isDeleting && letterIndex < currentWord.length) {
            letterIndex++;
            setTimeout(typeEffect, 250);
        } else if (isDeleting && letterIndex > 0) {
            letterIndex--;
            setTimeout(typeEffect, 250);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                wordIndex = (wordIndex + 1) % words.length;
            }
            setTimeout(typeEffect, 1000);
        }
    }

    typeEffect();
});
