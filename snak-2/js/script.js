const squadre =[
    {nome: "Roma", punti: 0, falli: 0},
    {nome: "Milan", punti: 0, falli: 0},
    {nome: "Inter", punti: 0, falli: 0},
    {nome: "Juventus", punti: 0, falli: 0},
    {nome: "Lazio", punti: 0, falli: 0},
    {nome: "Napoli", punti: 0, falli: 0},
    {nome: "Cagliari", punti: 0, falli: 0},
]

const arrayFinale =[];


const randomNumFromTo = (min, max) =>Math.floor(Math.random() * (max - min + 1) + min);


for(let i = 0; i < squadre.length; i++){
    currSquad = squadre[i];
    currSquad.punti = randomNumFromTo(0, 100);
    currSquad.falli = randomNumFromTo(0, 20);
    arrayFinale.push({nome: currSquad.nome, falli: currSquad.falli});
    
}
console.log(arrayFinale);