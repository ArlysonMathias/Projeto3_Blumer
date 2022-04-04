const prompt = require("prompt-sync")();
console.log(` Get Rich or Die Tryin 
            Fique rico, ou morra tentando.`);

let personagem = {
  nome: "",
  dinheiro: 100,
  fome: 0,
  cansaco: 0,
  bondade: 2,
  liberdade : true,
  alteraDinheiro: function (dinheiro) {
    this.dinheiro = this.dinheiro + dinheiro;
  },
  alteraFome: function (fome) {
    this.fome = this.fome + fome;
    if (this.fome < 0) {
      this.fome = 0;
    }
  },
  alteraCansaco: function (cansaco) {
    this.cansaco = this.cansaco + cansaco;
    if (this.cansaco < 0) {
      this.cansaco = 0;
    }
  },
  alteraBondade: function (bondade) {
    this.bondade = this.bondade + bondade;
  },
};

let tempo = {
  dia: 1,
  turno: ["manhã", "tarde", "noite"],
  turnoAtual: 0,

  passaTempo: function () {
    this.turnoAtual++;
    if (this.turnoAtual == 3) {
      this.turnoAtual = 0;
      this.dia++;
    }
  },
};
// array q vai armazenar os meus trabalhos aleatórios
let vagasAleatorias = [
  "Ajudar um magnata (+500 reais)", // trabalho 0
  "Ajudar pedestres a atravessar a rua (+50 reais)", // trabalho 1
  "Pintar o muro da escola (+150 reais)", // trabalho 2
  "Ensinar crianças (+200 reais)", // trabalho 3
  "Limpar a praça (+2 bondade)", // trabalho 4
  "Participar de uma ação social (+3 bondade) ", // trabalho 5
  "Trabalhar de uber (+200 reais)", // trabalho 6
  "Vender gelinho na praia (+100 reais)", // trabalho 7
  "Pedir dinheiro na rua (+10 reais)", // trabalho 8
  "Ajudar a encontrar um animal perdido (+250 reais)",
]; // trabalho 9

let sitacaoJogo = [
  "Um amigo te ligou pedindo 100 reais", //escolha 0
  "Você encontra um mendigo na rua que te pede dinheiro (-50 reais)", //escolha 1
  "Você esqueceu sua carteira em algum lugar (-50 reais)", //escolha 2
  "Ao sair pro serviço, você bateu de carro em um ciclista (despesas médicas -75 reais)", //escolha 3
  "Você pegou um resfriado e precisa comprar rémedios (- 75 reais)", //escolha 4
  "Não aconteceu nada (sem alteração)", //escolha 5
  "Não aconteceu nada (sem alteração)", //escolha 6
  "Seu irmão te liga pedindo dinheiro (-100 reais)", //escolha 7
  "Um amigo esqueceu dinheiro pro almoço e pede que você pague o dele (-10 reais)", //escolha 8
];
// Cria e valida o nome do personagem
let nomeMC = prompt("Digite o nome do seu personagem: ");
while (!isNaN(nomeMC)) {
  console.clear();
  console.log(" O nome do seu personagem deve ser constituido de letras.");
  nomeMC = prompt("Digite o nome do seu personagem: ");
}
// Essa função serve apenas para exibir o status do personagem
function exibePersonagem() {
  console.log(`\tNome: ${personagem.nome}
              Dinheiro: ${personagem.dinheiro}
              Fome: ${personagem.fome}
              Bondade: ${personagem.bondade}
              Cansaço: ${personagem.cansaco}`);
}

//Essa função irá fazer as escolhas aleatórias
function escolhasDiarias() {
  prompt(`Pressione enter para continuar.`);
  console.clear();
  console.log();
  console.log(`Dia: ${tempo.dia}, turno: ${tempo.turno[tempo.turnoAtual]}`);
  console.log();
  let listaEscolhas = [
    "Opção 1 - Ir trabalhar (+100 reais (+ 2 turnos))",
    "Opção 2 - Tentar a sorte no cassino (+ 2 turnos)",
    "Opção 3 - Tentar assaltar um banco (+5000 reais/ 1% de sucesso)",
    "Opção 4 - Não fazer nada(1 dia 'sem alteração nos status')",
    "Opção 5 - Se alimentar (fome -5, + 1 turno)",
    "Opção 6 - Dormir (cansaço -5 / +2 turnos)",
    "Opção 7 - Fazer trabalho aleatório (2 turnos/ recompensa aleatória)",
    "Opção 8 - Olhar seu status (não passa o tempo)",
  ];
  console.log("O que você deseja fazer? ")
  console.log()
  for (let i = 0; i < listaEscolhas.length; i++) {
    console.log(listaEscolhas[i]);
  }

  let escolha = +prompt();
  // esse laço faz a validação se o jogador digitou algo alem do necessário
  while (isNaN(escolha) || escolha < 1 || escolha > 8) {
    console.log();
    console.clear();
    console.log(
      "Você digitou uma opção inválida. Por favor, digite uma opção de 1 a 7."
    );
    console.log(`O que você deseja fazer?
    Opção 1 - Ir trabalhar (+100 reais (+ 2 turnos))
    Opção 2 - Tentar a sorte no cassino (+ 2 turnos)
    Opção 3 - Tentar assaltar um banco (+5000 reais/ 1% de sucesso)
    Opção 4 - Não fazer nada(1 dia 'sem alteração nos status')
    Opção 5 - Se alimentar (fome -5, -1 turno)
    Opção 6 - Dormir (cansaço -5 / -2 turnos)
    Opção 7 - Fazer trabalho aleatório (2 turnos/ recompensa aleatória)
    Opção 8 - Olhar seu status (não passa o tempo) `);
    escolha = +prompt();
  }

  return escolha;
}

// essa função irá fazer as escolhas noturnas
function escolhasNorturnas() {
  prompt(`Pressione enter para continuar.`);
  console.clear();
  console.log();
  console.log(`Dia: ${tempo.dia}, turno: ${tempo.turno[tempo.turnoAtual]}`);
  console.log();
  let listaEscolhas = [
    `Opção 1 - Se alimentar (-10 dinheiro | - 5 fome)`,
    `Opção 2 - Dormir (cansaço - 5) `,
    `Opção 3 - Olhar o seu status (não passa o tempo)`,
    `Opção 4 - Ficar sem fazer nada`,
  ];
  console.log(`O que você deseja fazer? `);
  for (let i = 0; i < listaEscolhas.length; i++) {
    console.log(listaEscolhas[i]);
  }

  let escolha = +prompt();

  while (escolha != 1 && escolha != 2 && escolha != 3 && escolha != 4) {
    console.log();
    console.clear();
    console.log(
      "Você digitou uma opção inválida. Por favor, digite uma opção de 1 a 4."
    );
    escolha = +prompt();
  }
  return escolha;
}

// Essa função vai pegar um valor aleatório se o personagem escolher
// E vai comparar com a posição no array lista, e devolver para o usuario um trabalho e sua remuneração
function trabalhosAleatorios() {
  let trabalhoEscolhido = Math.floor(Math.random() * vagasAleatorias.length);

  if (trabalhoEscolhido == 0) {
    console.log(`Trabalho de hoje: ${vagasAleatorias[trabalhoEscolhido]}`);
    console.log("Você ganhou mais 500 reais.");
    personagem.alteraDinheiro(+500);
  } else if (trabalhoEscolhido == 1) {
    console.log(`Trabalho de hoje: ${vagasAleatorias[trabalhoEscolhido]}`);
    console.log("Você ganhou mais 50 reais.");
    personagem.alteraDinheiro(+50);
  } else if (trabalhoEscolhido == 2) {
    console.log(`Trabalho de hoje: ${vagasAleatorias[trabalhoEscolhido]}`);
    console.log("Você ganhou mais 150 reais.");
    personagem.alteraDinheiro(+150);
  } else if (trabalhoEscolhido == 3) {
    console.log(`Trabalho de hoje: ${vagasAleatorias[trabalhoEscolhido]}`);
    console.log("Você ganhou mais 200 reais.");
    personagem.alteraDinheiro(+200);
  } else if (trabalhoEscolhido == 4) {
    console.log(`Trabalho de hoje: ${vagasAleatorias[trabalhoEscolhido]}`);
    console.log("Você ganhou mais 2 de bondade.");
    personagem.alteraBondade(+2);
  } else if (trabalhoEscolhido == 5) {
    console.log(`Trabalho de hoje: ${vagasAleatorias[trabalhoEscolhido]}`);
    console.log("Você ganhou mais 3 de bondade.");
    personagem.alteraBondade(+3);
  } else if (trabalhoEscolhido == 6) {
    console.log(`Trabalho de hoje: ${vagasAleatorias[trabalhoEscolhido]}`);
    console.log("Você ganhou mais 200 reais.");
    personagem.alteraDinheiro(+200);
  } else if (trabalhoEscolhido == 7) {
    console.log(`Trabalho de hoje: ${vagasAleatorias[trabalhoEscolhido]}`);
    console.log("Você ganhou mais 100 reais.");
    personagem.alteraDinheiro(+100);
  } else if (trabalhoEscolhido == 8) {
    console.log(`Trabalho de hoje: ${vagasAleatorias[trabalhoEscolhido]}`);
    console.log("Você ganhou mais 10 reais.");
    personagem.alteraDinheiro(+10);
  } else {
    console.log(`Trabalho de hoje: ${vagasAleatorias[trabalhoEscolhido]}`);
    console.log("Você ganhou mais 250 reais.");
    personagem.alteraDinheiro(+250);
  }
  console.log("Turno +2");
  console.log("Cansaço +2");
  console.log("Fome +3");
  personagem.alteraFome(+3);
  personagem.alteraCansaco(+2);
  tempo.passaTempo();
  tempo.passaTempo();
}

//Essa função fiz para comparar as escolhas do usuário, com as decisões
function comparaDecisao() {
  let decisao;
  if (tempo.turnoAtual == 0 || tempo.turnoAtual == 1) {
    decisao = escolhasDiarias();

    if (decisao == 1 && personagem.bondade > 0) {
      console.log("Você decidiu ir trabalhar, e ganhou +100 reais");
      console.log("Você trabalhou o dia todo e está cansado, cansaço +4");
      console.log("Você está a muito tempo sem se alimentar, fome +4");
      console.log("Turno +2");

      personagem.alteraDinheiro(+100);
      personagem.alteraFome(+4);
      personagem.alteraCansaco(+4);
      tempo.passaTempo(); // avança  o tempo 1 turno
      tempo.passaTempo(); // avança o tempo mais um turno
      prompt();
    } else if (decisao == 1 && personagem.bondade < 0) {
      console.log(`Seu nível de bondade está muito baixo.
    Não te aceitaram no emprego.
    Por favor, aumente seu nivel de bondade antes de voltar.`);
    }
    if (decisao == 2) {
      console.log("Você resolveu tentar sua sorte no cassino.");
      cassino();
      tempo.passaTempo();
    } else if (decisao == 3) {
      console.log("Você tentou assaltar um banco");
      let porcentagem = Math.floor(Math.random() * 100);
      let  chance = Math.floor(Math.random() * 100)
      if (porcentagem == chance) {
        console.log(
          "Você obteve sucesso em assaltar o banco e fugir da polícia."
        );
        console.log("Dinheiro + 5000");
        personagem.alteraDinheiro(+5000);
      } else {
        console.log(
          "Você falhou em assaltar o banco e foi preso(a). "
        );

        personagem.liberdade = false
      }
    } else if (decisao == 4) {
      console.log("Você resolveu não fazer nada.");
      console.log("Turno +2");
      tempo.passaTempo();
      tempo.passaTempo();
    } else if (decisao == 5) {
      if (personagem.dinheiro > 10) {
        console.log("Você decidiu se alimentar.");
        console.log("Fome - 5.");
        console.log("Dinheiro - 10.");
        console.log("Turno +1");

        personagem.alteraFome(-5);
        personagem.alteraDinheiro(-10);
        tempo.passaTempo();
      } else {
        console.log(`Você não tem dinheiro suficiente para se alimentar.
            Fome +1
            Turno +1`);
        personagem.alteraFome(+1);
        tempo.passaTempo();
      }
    } else if (decisao == 6) {
      console.log("Você decidiu dormir.");
      console.log("Cansaço -4");
      console.log("Turno +2");
      personagem.alteraCansaco(-4);
      tempo.passaTempo();
      tempo.passaTempo();
    } else if (decisao == 7) {
      console.log(`Você resolver fazer um trabalho aleatório.
    Será gerado um trabalho aleatório com uma recompensa aleatória.`);
      console.log();
      trabalhosAleatorios();
    } else if (decisao == 8) {
      console.log("Você escolheu olhar o seu status.");
      console.log("Pressione alguma tecla para continuar.");
      prompt();
      console.clear();
      exibePersonagem();
      console.log();
      comparaDecisao();
    }
  } else {
    decisao = escolhasNorturnas();
    if (decisao == 1) {
      if (personagem.dinheiro < 10) {
        console.log(`Você decidiu se alimentar, porém, você não tem dinheiro.
             Consiga dinheiro antes que sua fome chegue no nivel 10.`);
        console.log("Fome +2");
        console.log("Turno +1");
        personagem.alteraFome(+2);
        tempo.passaTempo();
      } else {
        console.log(`Você decidiu se alimentar.
            Fome - 5
            Dinheiro - 10
            Turno +1`);
        personagem.alteraFome(-5);
        personagem.alteraDinheiro(-10);
        tempo.passaTempo();
      }
    } else if (decisao == 2) {
      console.log(`Você escolheu descansar.
        Cansaço - 5
        Turno + 1`);
      personagem.alteraCansaco(-5);
      tempo.passaTempo();
    } else if (decisao == 3) {
      console.log(`Você escolheu olhar o seu status.`);
      exibePersonagem();
      console.log();
    } else {
      console.log(`Você escolheu não fazer nada.
        Turno +1
        Fome +1`);
      personagem.alteraFome(+1);
      tempo.passaTempo();
    }
  }
  return decisao;
}
//Essa função só é chamada se o personagem escolher jogar no cassino

function cassino() {
  console.log();
  console.log("Bem vindo ao cassino.");
  console.log();
  console.log(`O que você deseja fazer? 
              1 - Jogar cara ou coroa
              2 - Olhar ao redor
              Qualquer outra tecla para sair do cassino`);

  let opcao = +prompt();

  while (opcao == 1 || opcao == 2) {
    if (opcao == 1) {
      console.log(`Você escolheu jogar cara ou coroa.
                Opção 1 - Apostar 50 reais
                Opção 2 - Apostar 100 reais
                Opção 3 - Apostar 200 reais
                Opção 4 - Apostar 500 reais`);
      let quant = +prompt();
      while (quant < 1 || quant > 4) {
        console.log(`Você digitou uma opção inválida.`);
        console.log(`Você escolheu jogar cara ou coroa.
                Opção 1 - 50 reais
                Opção 2 - 100 reais
                Opção 3 - 200 reais
                Opção 4 - 500 reais`);
        quant = +prompt();
      }
      if (quant == 1) {
        console.clear();
        if (personagem.dinheiro < 50) {
          console.log(`Você possui ${personagem.dinheiro} reais.
          E não possui o dinheiro necessário para jogar esse jogo.`);
          cassino();
        } else {
          let chance = Math.floor(Math.random() * 2);
          let aposta = +prompt("Digite 0 para apostar cara e 1 para coroa: ");
          while (aposta != 0 && aposta != 1) {
            console.log("Você digitou um valor incorreto.");
            aposta = +prompt("Digite 0 para apostar cara e 1 para coroa: ");
          }
          if (chance == aposta) {
            console.log("Parabéns, você ganhou.");
            console.log("Dinheiro +50");
            personagem.alteraDinheiro(+50);
          } else {
            console.log("Infelizmente você perdeu.");
            console.log("Dinheiro -50");
            personagem.alteraDinheiro(-50);
          }
        }
      } else if (quant == 2) {
        if (personagem.dinheiro < 100) {
          console.log(`Você possui ${personagem.dinheiro} reais.
          E não possui o dinheiro necessário para jogar esse jogo.`);
        } else {
          let chance = Math.floor(Math.random() * 2);
          let aposta = +prompt("Digite 0 para apostar cara e 1 para coroa: ");
          while (aposta != 0 && aposta != 1) {
            console.log("Você digitou um valor incorreto.");
            aposta = +prompt("Digite 0 para apostar cara e 1 para coroa: ");
          }
          if (chance == aposta) {
            console.log("Parabéns, você ganhou.");
            console.log("Dinheiro +100");
            personagem.alteraDinheiro(+100);
          } else {
            console.log("Infelizmente você perdeu.");
            console.log("Dinheiro -100");
            personagem.alteraDinheiro(-100);
          }
        }
      } else if (quant == 3) {
        if (personagem.dinheiro < 200) {
          console.log(`Você possui ${personagem.dinheiro} reais.
          E não possui o dinheiro necessário para jogar esse jogo.`);
        } else {
          let chance = Math.floor(Math.random() * 2);
          let aposta = +prompt("Digite 0 para apostar cara e 1 para coroa: ");
          while (aposta != 0 && aposta != 1) {
            console.log("Você digitou um valor incorreto.");
            aposta = +prompt("Digite 0 para apostar cara e 1 para coroa: ");
          }
          if (chance == aposta) {
            console.log("Parabéns, você ganhou.");
            console.log("Dinheiro +200");
            personagem.alteraDinheiro(+200);
          } else {
            console.log("Infelizmente você perdeu.");
            console.log("Dinheiro -200");
            personagem.alteraDinheiro(-200);
          }
        }
      } else if (quant == 4) {
        if (personagem.dinheiro < 500) {
          console.log(`Você possui ${personagem.dinheiro} reais.
          E não possui o dinheiro necessário para jogar esse jogo.`);
        } else {
          let chance = Math.floor(Math.random() * 2);
          let aposta = +prompt("Digite 0 para apostar cara e 1 para coroa: ");
          while (aposta != 0 && aposta != 1) {
            console.log("Você digitou um valor incorreto.");
            aposta = +prompt("Digite 0 para apostar cara e 1 para coroa: ");
          }
          if (chance == aposta) {
            console.log("Parabéns, você ganhou.");
            console.log("Dinheiro +500");
            personagem.alteraDinheiro(+500);
          } else {
            console.log("Infelizmente você perdeu.");
            console.log("Dinheiro -500");
            personagem.alteraDinheiro(-500);
          }

          //cassino();
        }
      }
    } else if (opcao == 2) {
      console.clear();
      console.log("Você escolheu olhar ao redor.");
    }
    console.log("Pressione alguma tecla para continuar");
    prompt();
    console.log(`O que você deseja fazer? 
              1 - Jogar cara ou coroa
              2 - Olhar ao redor
              Qualquer outra tecla para sair do cassino`);

    opcao = +prompt();
  }
}

// Essa função vai ser chamada algumas vezes durante o jogo e implementar situações aleatórias que podem
// (ou não) mudar o rumo da história
function situacao() {
  console.log();
  console.log("Aperte enter para continuar.");
  prompt();
  console.clear();
  console.log(" Está é uma situação aleatória.");
  let acontecimento = Math.floor(Math.random() * sitacaoJogo.length);
  let escolha;

  if (acontecimento == 0) {
    console.log(`${sitacaoJogo[acontecimento]}
    Opção 1 = Dar 100 reais (-100 reais)
    Opção 2 = Não dar (bondade -2)`);
    escolha = +prompt();

    while (escolha != 1 && escolha != 2) {
      console.log(`Você digitou uma opção inválida.)
            Opção 1 = Dar 100 reais (-100 reais)
            Opção 2 = Não dar (bondade -2)`);
      escolha = +prompt();
    }
    if (escolha == 1) {
      console.log("Você escolheu dar 100 reais a um amigo.");
      console.log("Dinheiro -100");
      personagem.alteraDinheiro(-100);
    } else {
      console.log("Você escolheu não dar 100 reais a um amigo.");
      console.log("Bondade -2");
      personagem.alteraBondade(-2);
    }
  } else if (acontecimento == 1) {
    console.log(`${sitacaoJogo[acontecimento]}
        Opção 1 = Dar 50 reais (-50 reais)
        Opção 2 = Não dar (bondade -2)`);
    escolha = +prompt();

    while (escolha != 1 && escolha != 2) {
      console.log(`Você digitou uma opção inválida.)
            Opção 1 = Dar 50 reais (-50 reais)
            Opção 2 = Não dar (bondade -2)`);
      escolha = +prompt();
    }

    if (escolha == 1) {
      console.log("Você escolheu dar 50 reais a um mendigo.");
      console.log("Dinheiro -50");
      personagem.alteraDinheiro(-50);
    } else {
      console.log("Você escolheu não dar 50 reais a um mendigo.");
      console.log("Bondade -2");
      personagem.alteraBondade(-2);
    }
  } else if (acontecimento == 2) {
    console.log(`${sitacaoJogo[acontecimento]}`);
    personagem.alteraDinheiro(-50);
  } else if (acontecimento == 3) {
    console.log(`${sitacaoJogo[acontecimento]}`);
    personagem.alteraDinheiro(-75);
  } else if (acontecimento == 4) {
    console.log(`${sitacaoJogo[acontecimento]}`);
    personagem.alteraDinheiro(-50);
  } else if (acontecimento == 5 || acontecimento == 6) {
    console.log(`${sitacaoJogo[acontecimento]}`);
  } else if (acontecimento == 7) {
    console.log(`${sitacaoJogo[acontecimento]}`);
    console.log(`Opção 1 - Dar  (-100 reais)
                    Opção 2 - Não dar (bondade -2).`);
    escolha = +prompt();

    while (escolha != 1 && escolha != 2) {
      console.log(`Você digitou uma opção inválida.)
                        Opção 1 = Dar 100 reais (-100 reais)
                        Opção 2 = Não dar (bondade -2)`);
      escolha = +prompt();
    }
    if (escolha == 1) {
      console.log(`Você escolheu dar 100 reais.
            Dinheiro -100`);
      personagem.alteraDinheiro(-100);
    } else {
      console.log(`Você escolheu não dá o dinheiro.
            Bondade -2`);
      personagem.alteraBondade(-2);
    }
  } else {
    console.log(`${sitacaoJogo[acontecimento]}`);
    console.log(`Opção 1 - Dar  (-10 reais)
                Opção 2 - Não dar (bondade -2).`);
    escolha = +prompt();

    while (escolha != 1 && escolha != 2) {
      console.log(`Você digitou uma opção inválida.)  
                        Opção 1 = Dar 10 reais (-10 reais)
                        Opção 2 = Não dar (bondade -2)`);
      escolha = +prompt();
    }
    if (escolha == 1) {
      console.log(`Você escolheu dar 10 reais.
      Dinheiro -10`);
      personagem.alteraDinheiro(-10);
    } else {
      console.log(`Você escolheu não dá o dinheiro.
            Bondade -2`);
      personagem.alteraBondade(-2);
    }
  }
}
// Atribui o nome do personagem ao objeto
personagem.nome = nomeMC;

// Início da história
console.clear();
console.log(`${personagem.nome}, você é um(a) trabalhador(a) que assim como todo brasileiro precisa pagar suas contas.
Certo dia, você conhece um magnata que lhe faz a seguinte proposta:
  "Se você conseguir 1500 reais em uma semana, você será o meu socio na empresa.
  Se perder, você terá que ser meu funcionário por 1 ano".
  Você prontamente aceita a aposta. Mete a mão no bolso e percebe que tem 100 reais.
  Sua missão é transformar esses 100 reais em 1500. 
  Se ficar sem dinheiro, você perde.`);

console.log();
console.log(`Lembre-se, você não pode deixar sua fome chegar a 10 e nem seu cansaço chegar a 10.
Ou, é game over. Boa sorte`);
console.log();

//Loop que vai rodar o jogo com algumas condições de parada
while (tempo.dia <= 7) {
  comparaDecisao();
  if (personagem.dinheiro < 0) {
    break;
  } else if (personagem.fome >= 10) {
    console.log("Sua fome chegou em 10.");
    console.log("Você morreu de fome.");
    console.log("Game over.");
    break;
  } else if (personagem.cansaco >= 10) {
    console.log("Você morreu de cansaço.");
    console.log("Game over.");
    break;
  }else if(personagem.liberdade == false){
    break;
  }

  /*Essa condição entra chama a função de situações aleatórias,
 se depois da escolha do personagem o turno foi manhã ou tarde
 e a escolha dele seja difente de 8( olhar status)
 */
  let random = Math.floor(Math.random() * tempo.turno.length);
  if (tempo.turnoAtual == random) {
    situacao();
  }
}

if (personagem.dinheiro < 0) {
  console.log("Você não tem mais dinheiro.");
  console.log("Game Over.");
} else if (personagem.dinheiro >= 1500) {
  console.log(`Parabéns, você ganhou a aposta do Magnata
  Conseguiu um total de ${personagem.dinheiro} reais.
  Você venceu o jogo.
  `);
} else if (tempo.dia == 8 && personagem.dinheiro < 1500) {
  console.log("Game over.");
  console.log("Você não conseguiu os 1500 reais no prazo.");
}

console.log("FIM.");