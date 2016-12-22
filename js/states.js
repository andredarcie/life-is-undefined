var state = [
    {
      title: 'Mysterious Game 1',
      image: 'test-image',
      messages: ['Observo na tela do computador o código que acabo de criar...',
                 '...'],
      choices: [{message: 'Ficar um tempo olhando a tela', nextstate: 1},
                {message: "Ir embora", nextstate: 1}]
    },
    {
      title: 'Mysterious Game 2',
      image: 'eu',
      messages: ['Esse sou eu...'],
      choices: [{message: 'Chorar de pena', nextstate: 0},
                {message: "Fechar jogo", nextstate: 0}]
    }
];
