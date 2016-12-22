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

    updateFixed(0);

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

function updateFixed(currentStateId){
  var i, html, imageUrl, messagesLength, choicesLength,
  messagesHtml = '', choicesHtml = '';

  currentState = state[currentStateId];

  /* game title */
  html = '<h1 id="game-title">' + currentState.title + '</h1>';

  /* image */
  imageUrl = 'img/' +  currentState.image + '.png';
  html += '<img id="image-box" src="' + imageUrl + '"' +
          'alt="Test Image" height="700" width="500">';

  /* messages */
  messagesLength = currentState.messages.length;
  for (i = 0; i < messagesLength; i++){
    messagesHtml += '<p>"' + currentState.messages[i] + '"</p>';
  }
  html += '<div id="message">' + messagesHtml + '</div>';

  /* choices */
  choicesLength = currentState.choices.length;
  for (i = 0; i < choicesLength; i++){
    choicesHtml += '<li class="list-group-item"' +
    ' onclick="updateFixed(' + currentState.choices[i].nextstate + ')">' +
    currentState.choices[i].message + '</li>';
  }
  html += '<div id="choices"><ul id="list-group">' +
           choicesHtml + '</ul></div>';

  /* DOM */
  $('#container').html(html);

}
