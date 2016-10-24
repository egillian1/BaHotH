$(document).ready(function() {
    console.log("Tile loaded");

    $.getJSON( "/character.json", function( result ) {
      // Do whatever what you want with this data
      console.log(result);
  });
});
