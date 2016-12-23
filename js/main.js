$(document).ready(function() {
  start();
});

function start(){
    update('inicio');
}

function update(currentStateId){
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
    ' onclick="update(\'' + currentState.choices[i].nextstate + '\')">' +
    currentState.choices[i].message + '</li>';
  }
  html += '<div id="choices"><ul id="list-group">' +
           choicesHtml + '</ul></div>';

  /* DOM */
  $('#container').html(html);

}
