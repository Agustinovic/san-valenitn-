// This file contains the JavaScript code for the Valentine's Day webpage. 
// It handles interactive features such as button clicks and animations.

document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const gifContainer = document.querySelector('.gif-container img#mainGif');
    const leftGif = document.getElementById('leftGif');
    const rightGif = document.getElementById('rightGif');
    const header = document.querySelector('h1');
    const subtitle = document.getElementById('subtitle'); // Selecciona el primer subtítulo
    const lateSubtitle = document.getElementById('lateSubtitle'); // Selecciona el segundo subtítulo
    const gifs = [
        'imagenes/catsad-sad.gif',
        'imagenes/cat-sad.gif',
        'imagenes/sad-kitty-sad-cat.gif',
        'imagenes/sad-cat-sad.gif',
        'imagenes/cat-holding-head-cat.gif',
        'imagenes/cat.gif',
        'imagenes/rest-well.gif',
        'imagenes/sad-cat.gif',
        'imagenes/sahnap-cat.gif',
    ];
    const yesGifs = [
        'imagenes/silly-cat-silly.gif',
    ];
    const noBtnTexts = [
        'por que?',
        'yapo :(',
        'ya si igual me esforce',
        'que hice mal?',
        'es muy tarde?',
        'acepta ya pls',
        'en serio?',
        'ya bueno, toy triste :('
    ];
    let currentGifIndex = 0;
    let currentYesGifIndex = 0;
    let currentTextIndex = 0;
    let yesBtnScale = 1; // Initial scale for the "Yes" button
    let noBtnScale = 1; // Initial scale for the "No" button

    if (noBtn) {
        noBtn.addEventListener('click', () => {
            // Change the position of the button randomly
            const container = noBtn.parentElement;
            const containerWidth = container.offsetWidth;
            const containerHeight = container.offsetHeight;

            let randomX, randomY;
            do {
                randomX = Math.floor(Math.random() * (containerWidth - noBtn.offsetWidth));
                randomY = Math.floor(Math.random() * (containerHeight - noBtn.offsetHeight));
            } while (
                randomX < yesBtn.offsetLeft + yesBtn.offsetWidth &&
                randomX + noBtn.offsetWidth > yesBtn.offsetLeft &&
                randomY < yesBtn.offsetTop + yesBtn.offsetHeight &&
                randomY + noBtn.offsetHeight > yesBtn.offsetTop
            );

            noBtn.style.position = 'absolute';
            noBtn.style.left = `${randomX}px`;
            noBtn.style.top = `${randomY}px`;

            // Change the GIF progressively in order
            gifContainer.src = gifs[currentGifIndex];
            currentGifIndex = (currentGifIndex + 1) % gifs.length;

            // Change the text of the "No" button progressively in order
            noBtn.textContent = noBtnTexts[currentTextIndex];
            currentTextIndex = (currentTextIndex + 1) % noBtnTexts.length;

            // Grow the "Yes" button slowly and keep the increased size
            yesBtnScale += 0.3; // Increment the scale
            yesBtn.style.transform = `scale(${yesBtnScale})`;
            
            // Adjust the margin-top of the "Yes" button to avoid collision with the GIF
            yesBtn.style.marginTop = `${yesBtnScale * 30}px`;

            // Shrink the "No" button slowly and keep the decreased size
            noBtnScale -= 0.02; // Decrement the scale
            noBtn.style.transform = `scale(${noBtnScale})`;
        });
    }

    if (yesBtn) {
        yesBtn.addEventListener('click', () => {
            // Change the GIF to a happy one
            gifContainer.src = yesGifs[currentYesGifIndex];
            currentYesGifIndex = (currentYesGifIndex + 1) % yesGifs.length;

            // Change the header text
            header.textContent = 'YIPIIIII TE AMO';

            // Show the subtitles
            subtitle.style.display = 'block';
            lateSubtitle.style.display = 'block';

            // Show the additional GIFs
            leftGif.style.display = 'block';
            rightGif.style.display = 'block';

            // Make the GIF larger and move it down
            gifContainer.style.transform = 'scale(2) translateY(75px)'; // Adjust the scale and move down
            gifContainer.style.transition = 'transform 0.5s ease'; // Smooth transition

             // Hide the "No" button
            noBtn.style.display = 'none';

            // Hide the "No" button
            yesBtn.style.display = 'none';
        });
    }
});
