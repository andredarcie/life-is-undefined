var state = [
    {
      title: 'Mysterious Game [1/4]',
      image: 'test-image',
      messages: ['Observo na tela do computador o código que acabo de criar...',
                 'AAAAAAAAAAAA'],
      choices: {zero: {message: 'Ficar um tempo olhando a tela', nextstate: 1},
                one: {message: "Ir embora", nextstate: 1}}
    },
    {
      title: 'Mysterious Game [2/4]',
      image: 'eu',
      messages: ['Esse sou eu...'],
      choices: {zero: {message: 'Chorar de pena', nextstate: 2},
                one: {message: "Fechar jogo", nextstate: 1}}
    },
    {
      title: 'Mysterious Game [3/4]',
      image: 'eu',
      messages: ['Esse sou eu...'],
      choices: {zero: {message: 'Chorar de pena', nextstate: 3},
                one: {message: "Fechar jogo", nextstate: 1}}
    },
    {
      title: 'Mysterious Game [4/4]',
      image: 'eu',
      messages: ['Esse sou eu...'],
      choices: {zero: {message: 'Chorar de pena', nextstate: 0},
                one: {message: "Fechar jogo", nextstate: 1}}
    }
];
