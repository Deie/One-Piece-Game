// var cards = [
//     { name: "ace", img: "ace.png" },
//     { name: "arlong", img: "arlong.png" },
//     { name: "barbe-blanche", img: "barbe-blanche.png" },
//     { name: "baroque-works", img: "baroque-works.png" },
//     { name: "brook", img: "brook.png" },
//     { name: "buggy", img: "buggy.png" },
//     { name: "chopper", img: "chopper.png" },
//     { name: "franck", img: "franck.png" },
//     { name: "gouvernement-mondial", img: "gouvernement-mondial.png" },
//     { name: "hommes-poissons", img: "hommes-poissons.png" },
//     { name: "luffys-flag2", img: "luffys-flag2.png" },
//     { name: "luffys-flag3", img: "luffys-flag3.png" },
//     { name: "nami", img: "nami.png" },
//     { name: "nico", img: "nico.png" },
//     { name: "sanji", img: "sanji.png" },
//     { name: "shanks", img: "shanks.png" },
//     { name: "flash", img: "flash.png" },
//     { name: "ussop", img: "ussop.png" },
//     { name: "vente-esclaves", img: "vente-esclaves.png" },
//     { name: "vivi", img: "vivi.png" },
//     { name: "zoro", img: "zoro.png" },

//     { name: "ace", img: "ace.png" },
//     { name: "arlong", img: "arlong.png" },
//     { name: "barbe-blanche", img: "barbe-blanche.png" },
//     { name: "baroque-works", img: "baroque-works.png" },
//     { name: "brook", img: "brook.png" },
//     { name: "buggy", img: "buggy.png" },
//     { name: "chopper", img: "chopper.png" },
//     { name: "franck", img: "franck.png" },
//     { name: "gouvernement-mondial", img: "gouvernement-mondial.png" },
//     { name: "hommes-poissons", img: "hommes-poissons.png" },
//     { name: "luffys-flag2", img: "luffys-flag2.png" },
//     { name: "luffys-flag3", img: "luffys-flag3.png" },
//     { name: "nami", img: "nami.png" },
//     { name: "nico", img: "nico.png" },
//     { name: "sanji", img: "sanji.png" },
//     { name: "shanks", img: "shanks.png" },
//     { name: "flash", img: "flash.png" },
//     { name: "ussop", img: "ussop.png" },
//     { name: "vente-esclaves", img: "vente-esclaves.png" },
//     { name: "vivi", img: "vivi.png" },
//     { name: "zoro", img: "zoro.png" },
// ];



const cards = document.querySelectorAll('.memory-card');

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

(function shuffle() {
    cards.forEach(card => {
        var randomOrder = Math.floor(Math.random() * 40);
        card.style.order = randomOrder;
    });
})();


cards.forEach(card => card.addEventListener('click', flipCard));