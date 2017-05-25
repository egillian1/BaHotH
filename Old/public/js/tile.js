$(document).ready(function() {
  console.log("Tile loaded");

  let character;
  let speedMeter = $(".speed");

  $.ajax({
    url: "/character.json",
    success: function(result) {
      character = result.character;
    },
    async: false
  });

  replaceMeterValues(character.speedArray, speedMeter);

  function replaceMeterValues(newMeterValues, meter) {
    meter.empty();

    let createdButton = document.createElement("button");
    createdButton.innerHTML = "<";
    createdButton.className += "down";
    meter.append(createdButton);

    let placeholderElement;
    for(let i = 0; i < newMeterValues.length; i++){
      placeholderElement = document.createElement("div");
      placeholderElement.innerHTML = newMeterValues[i];
      placeholderElement.className += i.toString();
      meter.append(placeholderElement);
    }

    createdButton = document.createElement("button");
    createdButton.innerHTML = ">";
    createdButton.className += "up";
    meter.append(createdButton);
  }
});
