document.addEventListener("DOMContentLoaded", function () {
    const words = [" I G E R", " I G H T", " I N J A"];
    const textLogo = document.getElementById("dynamic-text-logo");
    const titleElement = document.getElementById("dynamic-title");

    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];
        const partial = currentWord.substring(0, letterIndex);

        if (textLogo) textLogo.innerHTML = partial;
        if (titleElement) titleElement.innerHTML = "N" + partial;

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
