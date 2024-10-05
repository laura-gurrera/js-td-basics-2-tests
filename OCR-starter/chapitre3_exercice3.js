// Seconde suivante

// Stockez dans trois variables l'heure actuelle, les minutes actuelles et les secondes actuelles.
// Incrémentez les secondes actuelles de 1 pour obtenir la seconde suivante.
//     Vérifiez si les secondes actuelles étaient égales à 59 (la dernière seconde de la minute).
// Si les secondes actuelles étaient égales à 59, réinitialisez les secondes à 0.
// Vérifiez si les minutes actuelles étaient égales à 59 (la dernière minute de l'heure).
// Si les minutes actuelles étaient égales à 59, réinitialisez les minutes à 0.
// Vérifiez si l'heure actuelle était égale à 23 (la dernière heure de la journée).
// Si l'heure actuelle était égale à 23, réinitialisez l'heure à 0 (minuit).
//     Sinon, incrémentez l'heure actuelle.
// Affichez la nouvelle heure, les minutes et les secondes dans la console.

//Heure actuelle
let hour=23, min=58, sec=59;

//seconde suivante
if(sec<59){
    sec++;
} else if(sec===59&&min<59){
    sec=0;
    min++;
} else if(sec===59&&min===59&&hour<23){
    sec=0;
    min=0;
    hour++;
} else{
    sec=0;
    min=0;
    hour=0;
}

//Pour afficher le 0 devant les chiffres inférieurs à 10
hour = hour.toString().padStart(2, "0");
min = min.toString().padStart(2, "0");
sec = sec.toString().padStart(2, "0");

//Afficher l'heure
console.log(hour+':'+min+':'+sec);