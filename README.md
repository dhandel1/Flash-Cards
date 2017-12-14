# Flash-Cards
A Simple Flash Card Game

# Star Trek Flashcards

## Introduction

> This is a simple flashcard game that can be used to learn the names of popular characters in  the Star Trek universe. 

## Code Samples

>The following piece of code uses a Math.floor and Math.random function to generate a random number based on the length of the array, and then display the corresponding card:

let current_card_index = Math.floor(Math.random()*cards.length)

let current_card = cards[current_card_index];

>This piece of code will remove the cards that the user answered correctly from the array:

  cards = cards.splice(current_card_index)

>This is the code for if the user got the card wrong. Not much happens as the card remains in the array and a new card is randomly picked:

$('#wrong').click(function() {

   current_card_index = Math.floor(Math.random()*cards.length)

  current_card = cards[current_card_index];

  $('#card .front').css('background', `url(${current_card.front})`);

  $('#card .back').html(current_card.back);

});

## Tech used

This app was make using CSS, HTML and jQuery.