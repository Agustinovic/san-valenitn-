// This file contains the JavaScript code for the Valentine's Day webpage. 
// It handles interactive features such as button clicks and animations.

document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const gifContainer = document.querySelector('.gif-container img');
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
    let currentGifIndex = 0;
    let yesBtnScale = 1; // Initial scale for the "Yes" button

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

              // Grow the "Yes" button slowly and keep the increased size
              yesBtnScale += 0.5; // Increment the scale
              yesBtn.style.transform = `scale(${yesBtnScale})`;
          });
      }
  });