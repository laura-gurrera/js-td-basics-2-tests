/*
TESTS - PRÉPA 2 : Les restos du cœur

Un magasin accorde une remise de 10% si l’achat est supérieur à 25€.
Quand la remise est supérieure à 5€, le magasin verse 10% de celle-ci aux restos du cœur
avec un maximum de 2€.

Ecrire le programme JS qui, à partir du montant des achats,
calcule et affiche la somme versée aux restos du cœur.

Tester avec des montants d'achat de
- 20€ (pas de remise, pas de montant versé)
- 30€ (remise de 3€, pas de montant versé)
- 60€ (remise de 6€, 0.6€ versés)
- 100€ (remise de 10€, 1€ versés)
- 200€ (remise de 20€, 2€ versés)
- 1000€ (remise de 100€, 2€ versés)
*/

// 1. Demandez à l'utilisateur d'entrer le montant total des achats.
// 2. Vérifiez si le montant des achats est supérieur à 25€.
//    a) Si la condition est vraie, calculez la remise de 10% sur le montant total (0.1 * montant total).
//    b) Si la condition est fausse, la remise est de 0€.
// 3. Vérifiez si la remise est supérieure à 5€.
//    a) Si la condition est vraie, calculez la somme versée aux restos du cœur en prenant 10% de la remise (0.1 * remise).
//       Assurez-vous que le montant versé aux restos du cœur ne dépasse pas 2€ (utilisez Math.min(2, montant versé)).
//    b) Si la condition est fausse, la somme versée aux restos du cœur est de 0€.
// 4. Affichez la somme versée aux restos du cœur dans la console.

const montantTotal= parseInt(prompt('Veillez entrer le montant total de vos achats.'));

let remise= montantTotal*0.1;
let restosDuCoeur= remise*0.1;
let montantFinal;

if(!(montantTotal==="" || isNaN(montantTotal) || montantTotal<=0 || montantTotal===null)){

    if(montantTotal>=25){
        montantFinal=montantTotal-remise;

        if(remise<5){
            restosDuCoeur="pas de montant versé au restos du coeur";
            console.log(`remise de ${remise}€, ${restosDuCoeur}, veuillez payer ${montantFinal}€`);

        }else{
            if(restosDuCoeur<=2){
                console.log(`remise de ${remise}€, ${restosDuCoeur}€ versé aux restos du coeur, veuillez payer ${montantFinal}€`);

            }else{
                restosDuCoeur=2;
                console.log(`remise de ${remise}€, ${restosDuCoeur}€ versé aux restos du coeur, veuillez payer ${montantFinal}€`);
            }
        }
    }else{
        remise="pas de remise";
        console.log(`${remise}, veuillez payer ${montantTotal}€`)
    }
}