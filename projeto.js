const prompt = require("prompt-sync")();

console.log(
`Um dia na Ilha Tenrou em X679 Red Lizard uma guilda de fadas foi atacada por outra Guilda chamada Blue Skull,
sendo derrotados cruelmente. Zera ficou presa sob escombros sendo salva pela limpadora do local Mavis que tinha 
poderes ainda não descobertos e que sempre, 
sempre acreditava um dia poder encontrar uma fada de (verdade).
Assim, surgiu uma grande amizade,e um desejo de poder e vingança.`
);

var Perg1 = prompt(
  "Mavis, em algum momento pensou em deixar Zera para trás?:  "
);
var Perg2 = prompt("Diga... você ainda acredita em fadas?:  ");
var Perg3 = prompt(
  "Blue Skull era uma das guildas mais poderosas de Magnolia?:  "
);
var Perg4 = prompt(
  "Mavis chegou a descobrir qual era seu verdadeiro poder?:  "
);
var Perg5 = prompt("Zera continuou a jornada até o final com Mavis?:  ");

var Contador = 0;

if (Perg1 == "sim") {
  Contador = Contador + 1;
}
if (Perg2 == "sim") {
  Contador = Contador + 1;
}
if (Perg3 == "sim") {
  Contador = Contador + 1;
}
if (Perg4 == "sim") {
  Contador = Contador + 1;
}
if (Perg5 == "sim") {
  Contador = Contador + 1;
}

if (Contador == 0) {
  console.log("Você falha miseravelmente.");
} else if (Contador == 1) {
  console.log("Você falha, mas ainda consegue fugir da situação.");
} else if (Contador == 2) {
  console.log("Você falha, mas ainda consegue fugir da situação.");
} else if (Contador == 3) {
  console.log(
    "Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco."
  );
} else if (Contador == 4) {
  console.log(
    "Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita."
  );
} else if (Contador == 5) {
  console.log(
    "Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações."
  );
}
