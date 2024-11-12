const bike = [
    { nome: "nimbus", peso: 50, materiale: "alluminio"},
    { nome: "fireball", peso: 11, materiale: "carbonio"},
    { nome: "spide-one", peso: 700, materiale: "oro"},
    { nome: "vespa", peso: 100, materiale: "ferro"},
    { nome: "50 special", peso:1, materiale: "sughero"}];

const bicilettaLeggera = [];
let peso = 1000000;


for(let i = 0; i < bike.length; i++){
const curBike = bike[i];
if(curBike.peso < peso){
    bicilettaLeggera.splice(0, 1, curBike);
    peso = curBike.peso;
}
}
console.log(bicilettaLeggera)
    
