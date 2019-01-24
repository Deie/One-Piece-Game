




var hasFlippedCard = false;
var lockBoard = false;
var firstCard, secondCard;


function flipCard() {
    if (lockBoard) return;
    if (this == firstCard) return;
    this.classList.add('flip');

    if (!hasFlippedCard) {
        firstCard = this;
        hasFlippedCard = true;
        return;
    };

    secondCard = this;
    forCheckMatch();
};


function forCheckMatch() {
    var isMatch = firstCard.dataset.image === secondCard.dataset.image;

    isMatch ? disableCard() : unflipCard()

};


function disableCard() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
};


function unflipCard() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1300);
};


function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
};

function shuffling() {
    const cards = document.querySelectorAll(".memory-card");

    (function shuffle() {
        cards.forEach(card => {
            var randomOrder = Math.floor(Math.random() * 40);
            card.style.order = randomOrder;
        });
    })();
};


function clickCard() {
    cards.forEach(card => card.addEventListener('click', flipCard));
};

