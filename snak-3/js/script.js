const array = [];


const randomNumFromTo = (min, max) =>Math.floor(Math.random() * (max - min + 1) + min);


/**metto numeri dell'array */


const pushatoreInArray = (contenitore, quanti, da, a) =>{ for(let i = 0; i < quanti; i++){
    contenitore.push(randomNumFromTo(da, a));
}
}


pushatoreInArray(array, 40, 0, 30);

console.log(array)



/**funzione che mette i numeri dentro l'array risultante da a */
const elitArray =[];

const infraArray = (contenitore, da, a) => { for(let i = 0; i < contenitore.length; i++){
    currItem = contenitore[i];
    if ((i >= da) && (i <= a)){
        elitArray.push(currItem);
    }
}

}
infraArray(array, 20, 39);
console.log(elitArray);