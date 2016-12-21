var currentStateId = 0;
var state = [
  {
    title: 'Mysterious Game',
    image: 'test-image',
    message: 'Observo na tela do computador o código que acabo de criar...',
    choices: [{message: 'Ficar um tempo olhando a tela', nextstate: 3},
              {message: "Ir embora", nextstate: 1}]
  },
  {
    title: 'Mysterious Game',
    image: 'eu',
    message: 'Esse sou eu...',
    choices: [{message: 'Chorar de pena', nextstate: 3},
              {message: "Fechar jogo", nextstate: 1}]
  }
];
