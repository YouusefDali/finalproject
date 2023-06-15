
    const roll = document.getElementById('roll');
    const result = document.getElementById('result');
    const dice1Image = document.getElementById('dice1');
    const dice2Image = document.getElementById('dice2');
    
    // form.addEventListener('submit', (e) => {
    //   e.preventDefault();
    //  const name = document.getElementById('name').value;
    //   const email = document.getElementById('email').value;
      
      
      
      
    //   startGame(name);
    // });
    
    roll.addEventListener('click', () => {
      
      let die1 = Math.floor(Math.random()*6)+1;
      let die2 = Math.floor(Math.random()*6)+1;
      dice1Image.src = `img/Dice ${die1}.jpg`;
      dice2Image.src = `img/Dice ${die2}.jpg`
      if (die1+die2 > 7){
        result.textContent = "You win"
      }
      else {
        result.textContent = "You lose";
        roll.disabled = true;
      }
    });
    
//     function startGame(name) {
//       userNameSpan.textContent = name;
//       form.style.display = 'none';
//       gameSection.style.display = 'block';
//     }
    
//     function playGame(guess) {
//       const dice1 = Math.floor(Math.random() * 6) + 1;
//       const dice2 = Math.floor(Math.random() * 6) + 1;
//       const sum = dice1 + dice2;
      
//       dice1Image.src = `Dice${img1}.jpeg`; 
//       dice2Image.src = `Dice${img2}.jpeg`; 
      
//       diceImages.style.display = 'block';
      
//       if (guess === sum) {
//         guessResult.textContent = 'Congratulations! You guessed correctly!';
//         disableGame();
//       } else {
//         guessResult.textContent = `Wrong guess! The sum was ${sum}.`;
//         guessInput.value = '';
//       }
//       const remainingAttempts = parseInt(guessButton.getAttribute('data-attempts')) - 1;
//       guessButton.setAttribute('data-attempts', remainingAttempts);
      
//       if (remainingAttempts === 0) {
//         guessResult.textContent += ' Game over!';
//         disableGame();
//       }
//     }
    
//     function disableGame() {
//       guessInput.disabled = true;
//       guessButton.disabled = true;
//     }
