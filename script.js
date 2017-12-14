// flip the card

$("#flip").click(function(){
    $("#card").toggleClass("flipped");
});

// array of images

let cards = [
  { front:'picard.jpg', back:'It\'s Picard!'},
  { front:'worf.jpg', back: 'It\'s Worf!'},
  { front:'spock.jpg', back: 'It\'s Spock!'},
  { front:'wesley.jpg', back: 'It\'s Wesley!'},
  { front:'data.jpg', back: 'It\'s Data!'},
  { front:'quark.jpg', back: 'It\'s Quark!'},
  { front:'scotty.jpg', back: 'It\'s Scotty!'}
];

// get a random card out of the array
let current_card_index = Math.floor(Math.random()*cards.length)
let current_card = cards[current_card_index];

// display the card
$('#card .front').css('background', `url(${current_card.front})`);
$('#card .back').html(current_card.back);

//  move to next card when marked correct
$('#correct').click(function() {
  // remove card from array
  cards = cards.splice(current_card_index)
  // get new card
  if (cards.length) {
    // display new card
    current_card_index = Math.floor(Math.random()*cards.length)
    current_card = cards[current_card_index];
    $('#card .front').css('background', `url(${current_card.front})`);
    $('#card .back').html(current_card.back);
  } else {
    // they got the powerup and won the game!
    alert("You've answered all the cards!")
  }
});

// mark incorrect, leave in array and move to next card

$('#wrong').click(function() {
  current_card_index = Math.floor(Math.random()*cards.length)
  current_card = cards[current_card_index];
  $('#card .front').css('background', `url(${current_card.front})`);
  $('#card .back').html(current_card.back);
});
