var $gameTitle, $imageBox, $message, $listGroup,
    $choiceZero, $choiceOne, stateLength;

$(document).ready(function() {
  start();
});

function start(){

    stateLength = state.length;

    $gameTitle = $('#game-title');
    $imageBox = $('#image-box');
    $message = $('#message');
    $listGroup = $('#list-group');
    $choiceZero = $('#choice-zero');
    $choiceOne = $('#choice-one');

    update(0);

}

function update(currentStateId){

  var p, currentState, choiceZero, choiceOne,
      messageLength, html;

  if(currentStateId < stateLength){
    currentState = state[currentStateId];
    $gameTitle.text(currentState.title);
    $imageBox.attr('src','img/' + currentState.image + '.png');
    //$message.find('p').text('"' + currentState.message + '"');

    $message.empty();

    messagesLength = currentState.messages.length;
    html = '';
    for (var i = 0; i < messagesLength; i++){
      html += '<p>"' + currentState.messages[i] + '"</p>';
    }
    $message.html(html);

    choiceZero = currentState.choices.zero;
    $choiceZero.text(choiceZero.message);
    $choiceZero.click(function() { update(choiceZero.nextstate); });

    choiceOne = currentState.choices.one;
    $choiceOne.text(choiceOne.message);
    $choiceOne.click(function() { update(choiceOne.nextstate); });
  } else {
    console.log('Error - Invalid State: ' + currentStateId);
  }

}
