//contains code to flip the card

$("#flip").click(function(){
    $("#card").toggleClass("flipped");
});

//this is the array of images

// var imgNames = ('images/picard.jpg', 'images/worf.jpg', 'images/spock.jpg');

//this is code to move to next card when marked correct

$('#correct').click(function() {
    $('#card .front').each(function( index, element ) {
      $('#card .front').css('background', 'url(spock.jpg)');  
      $('#card .back').html('Its Spock!');  
    });
});

//this is code to mark incorrect, leave in array and move to next card


$('#wrong').click(function() {
    $('#card .front').each(function( index, element ) {
      $('#card .front').css('background', 'url(spock.jpg)');  
      $('#card .back').html('Its Spock!');  
    });
});
