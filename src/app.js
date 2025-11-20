import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
const cards = [
            { value: 'A', suit: '♥', color: 'red' },
            { value: 'K', suit: '♠', color: 'black' },
            { value: 'Q', suit: '♦', color: 'red' },
            { value: 'J', suit: '♣', color: 'black' },
            { value: '10', suit: '♥', color: 'red' },
            { value: '9', suit: '♠', color: 'black' },
            { value: '8', suit: '♦', color: 'red' },
            { value: '7', suit: '♣', color: 'black' }
        ];
        
        function changeCard() {
            const randomCard = cards[Math.floor(Math.random() * cards.length)];
            const corners = document.querySelectorAll('.card-corner');
            const centerSuit = document.querySelector('.card-suit');
            
            corners.forEach(corner => {
                corner.classList.remove('red', 'black');
                corner.classList.add(randomCard.color);
                corner.querySelector('div:first-child').textContent = randomCard.value;
                corner.querySelector('.card-value').textContent = randomCard.suit;
            });
            
            centerSuit.classList.remove('red', 'black');
            centerSuit.classList.add(randomCard.color);
            centerSuit.textContent = randomCard.suit;
        }
        changeCard()
        document.getElementById("change-card").addEventListener("click", changeCard)
};
