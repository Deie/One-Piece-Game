




var hasFlippedCard = false;
var lockBoard = false;
var firstCard, secondCard;
var matchCount = 0;


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

    if (isMatch) {
        disableCard();
        matchCount += 2;
        checkWin();
    }
    else {
        unflipCard()
    }
        

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
            var randomOrder = Math.floor(Math.random() * cards.length);
            card.style.order = randomOrder;
        });
    })();

    cards.forEach(card => card.addEventListener('click', flipCard));
};

function startLevel(playersLevel) {
    hasFlippedCard = false;
    lockBoard = false;
    matchCount = 0;

    $("section").empty();

    playersLevel.forEach(function (onecard) {
        $("section").append(`
    <div class="memory-card" data-image="${onecard.name}">
      <img class= "img-fluid front-face" src = "images/${onecard.img}"
        alt = "${onecard.name}" >
      <img class="img-fluid back-face" src="images/backface.png" alt="Luffy flag back face card">
    </div>`);
    });

    shuffling();
};

function checkWin() {
    const cards = document.querySelectorAll(".memory-card");
    if (matchCount === cards.length) {
        if (matchCount === 40) {
            $("#gameOverModal").modal("show");
        } else {
            $("#exampleModalCenter").modal("show");
        }
    }
}

startLevel(levelOne);

$(".start-new").click(function () {
    const cards = document.querySelectorAll(".memory-card");

    switch (cards.length) {
        case 4:
            // remove class level one
            // add class level two
            //add play function created in main
            $('#memory-board').toggleClass('levelOne levelTwo');
            startLevel(levelTwo);
            break;
        
        case 16:
            $('#memory-board').toggleClass('levelTwo levelThree');
            startLevel(levelThree);
            break;
        
        case 30:
            $('#memory-board').toggleClass('levelThree');
            startLevel(levelFour);
            break;
        
        case 40:
            $("#memory-board").toggleClass('levelOne');
            startLevel(levelOne);
            break;
    }

    $("#exampleModalCenter").modal("hide");
    $("#gameOverModal").modal("hide");
});
