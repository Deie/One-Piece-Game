window.onload = function () {
  $("#start-button").click(function () {
    $("#start-button").toggle();
    $('#memory-board').removeClass('none');
  });
  setTimeout(() => {
    console.log('caca')
    $("#soundStart").play();
  }, 250);
};
var cardsData = [
  { name: "ace", img: "ace.png" },
  { name: "arlong", img: "arlong.png" },
  { name: "barbe-blanche", img: "barbe-blanche.png" },
  { name: "baroque-works", img: "baroque-works.png" },
  { name: "brook", img: "brook.png" },
  { name: "buggy", img: "buggy.png" },
  { name: "chopper", img: "chopper.png" },
  { name: "franck", img: "franck.png" },
  { name: "gouvernement-mondial", img: "gouvernement-mondial.png" },
  { name: "hommes-poissons", img: "hommes-poissons.png" },
  { name: "luffys-flag2", img: "luffys-flag2.png" },
  { name: "luffys-flag3", img: "luffys-flag3.png" },
  { name: "nami", img: "nami.png" },
  { name: "nico", img: "nico.png" },
  { name: "sanji", img: "sanji.png" },
  { name: "shanks", img: "shanks.png" },
  { name: "ussop", img: "ussop.png" },
  { name: "vente-esclaves", img: "vente-esclaves.png" },
  { name: "vivi", img: "vivi.png" },
  { name: "zoro", img: "zoro.png" },
];


var levelOne = cardsData.slice(0, 2);
var levelTwo = cardsData.slice(0, 8);
var levelThree = cardsData.slice(0, 15);
var levelFour = [...cardsData];

levelOne = [...levelOne, ...levelOne];
levelTwo = [...levelTwo, ...levelTwo];
levelThree = [...levelThree, ...levelThree];
levelFour = [...levelFour, ...levelFour];

function name(params) {
  
}

function startLevel(playersLevel) {
  playersLevel.forEach(function(onecard) {
    $("section").append(`
    <div class="memory-card" data-image="${onecard.name}">
      <img class= "img-fluid front-face" src = "images/${onecard.img}"
        alt = "${onecard.name}" >
      <img class="img-fluid back-face" src="images/backface.png" alt="Luffy flag back face card">
    </div>`);
  });

  shuffling();
};

startLevel(levelOne);
clickCard();
resetBoard();


