var state = {
    inicio: {
      title: 'Mysterious Game 1',
      image: 'test-image',
      messages: ['Observo na tela do computador o código que acabo de criar...',
                 '...'],
      choices: [{message: 'Ficar um tempo olhando a tela', nextstate: 'eu'},
                {message: "Ir embora", nextstate: 'eu'}]
    },
    eu: {
      title: 'Mysterious Game 2',
      image: 'eu',
      messages: ['Esse sou eu...'],
      choices: [{message: 'Chorar de pena', nextstate: 'inicio'},
                {message: "Fechar jogo", nextstate: 'inicio'}]
    }
};
