// flip the card

$("#flip").click(function(){
    $("#card").toggleClass("flipped");
});

// array of images

//Nice use of this data structure. if you want, add the image directory to the paths in each object
let cards = [
  { front:'picard.jpg', back:'It\'s Picard!'}, //I might use "" or `` here instead of single quotes '' to avoid using the \. Standard will yell at you for using double quotes though.

  // also i'd probably format these objects like so, for readability's sake:
  { 
    front:'worf.jpg',
    back: 'It\'s Worf!'
  }, { 
    front:'spock.jpg', 
    back: 'It\'s Spock!'
  }, { 
    front:'wesley.jpg',
    back: 'It\'s Wesley!'
  }, { 
    front:'data.jpg',
    back: 'It\'s Data!'
  }, { 
    front:'quark.jpg',
    back: 'It\'s Quark!'
  }, { 
    front:'scotty.jpg',
    back: 'It\'s Scotty!'
  }
];

// get a random card out of the array
let currentCardIndex = Math.floor(Math.random()*cards.length) ///nice variable names but in javascript you should use camelCase instead of snake_case
let currentCard = cards[currentCardIndex];

// display the card
$('#card .front').css('background', `url(${currentCard.front})`);
$('#card .back').html(currentCard.back);

//  move to next card when marked correct
$('#correct').click(function() {
  // remove card from array
  /// The reason the victory alert never fires is because you're reassigning 
  /// cards to be the return of splice, which is the deleted element
  /// splice, by itself will delete the item from the array, actually changing the array
  /// splice actually returns the deleted element, and not the new array without the deleted item
  /// just need this below
  // cards.splice(currentCardIndex)
  /// instead of this below
  cards = cards.splice(currentCardIndex)
  // get new card
  if (cards.length) { ///nice use of truthy/fasley expression
    // display new card
    currentCardIndex = Math.floor(Math.random()*cards.length)
    currentCard = cards[currentCardIndex];

    /// remove the class flipped in the function, too with the following 
    /// $('#card').removeClass('flipped')
    $('#card .front').css('background', `url(${currentCard.front})`);
    $('#card .back').html(currentCard.back);
  } else {
    // they got the powerup and won the game!
    alert("You've answered all the cards!")
  }
});

/// mark incorrect, leave in array and move to next card

$('#wrong').click(function() {
  /// you have this display new card code above as well, break it out into a function
  /// remove the class flipped in the function, too with the following 
  /// $('#card').removeClass('flipped')
  currentCardIndex = Math.floor(Math.random()*cards.length)
  currentCard = cards[currentCardIndex];
  $('#card .front').css('background', `url(${currentCard.front})`);
  $('#card .back').html(currentCard.back);
});
