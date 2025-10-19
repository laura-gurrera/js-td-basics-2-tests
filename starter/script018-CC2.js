/*****************************
 * CODING CHALLENGE 2
 */

/*
John et Mike jouent tous les deux au basket dans différentes équipes.
Lors des trois derniers jeux, l'équipe de John a marqué 89, 120 et 103 points,
alors que l'équipe de Mike a marqué 116, 94 et 123 points.

1. Calculez le score moyen de chaque équipe.
2. Décidez quelle équipe gagne en moyenne (celle qui a le plus haut score moyen)
   et imprimez l'équipe gagnante dans la console avec son score moyen.
3. Changez ensuite les scores pour montrer différents gagnants.
   N'oubliez pas de prendre en compte qu'il pourrait y avoir un ex æquo (le même score moyen).
4. BONUS : Mary joue aussi au basket, et son équipe a marqué 97, 134 et 105 points.
   Comme avant, imprimez le gagnant en moyenne dans la console.
   INDICE : vous allez avoir besoin de l'opérateur && pour prendre la décision.
5. Changez là aussi les scores pour générer différents gagnants,
   en gardant toujours en tête qu'il pourrait y avoir des ex æquos.

BONNE CHANCE 😀
*/

// sans bonus
const JohnAverageScore= (89+120+103)/3; // 104
const MikeAverageScore= (116+94+123)/3; // 111

if(JohnAverageScore>MikeAverageScore){
    console.log('L\'équipe de John à gagné!');
}else if(MikeAverageScore>JohnAverageScore){
    console.log('L\'équipe de Mike à gagné!');
}else{
    console.log('L\'équipe de Mike et de John sont ex æquo!');
}


// 1. Calculez le score moyen de chaque équipe.
// 2. Décidez quelle équipe gagne en moyenne (celle qui a le plus haut score moyen)
//    et imprimez l'équipe gagnante dans la console avec son score moyen.
// 3. Changez ensuite les scores pour montrer différents gagnants.
//    N'oubliez pas de prendre en compte qu'il pourrait y avoir un ex æquo (le même score moyen).

// avec bonus

// 4. BONUS : Mary joue aussi au basket, et son équipe a marqué 97, 134 et 105 points.
//    Comme avant, imprimez le gagnant en moyenne dans la console.
//    INDICE : vous allez avoir besoin de l'opérateur && pour prendre la décision.
// 5. Changez là aussi les scores pour générer différents gagnants,
//    en gardant toujours en tête qu'il pourrait y avoir des ex æquos.

const MaryAverageScore= (97+134+105)/3; // 112

if (JohnAverageScore>MaryAverageScore && JohnAverageScore>MikeAverageScore){
    console.log('L\'équipe de John à gagné!');
}else if(MikeAverageScore>MaryAverageScore && MikeAverageScore>JohnAverageScore){
    console.log('L\'équipe de Mike à gagné!');
}else if(MaryAverageScore>JohnAverageScore && MaryAverageScore>MikeAverageScore){
    console.log('L\'équipe de Mary à gagné!');
}else if(JohnAverageScore===MikeAverageScore && JohnAverageScore>MaryAverageScore){
    console.log('L\'équipe de John et de Mike gagnent avec un ex æquo!');
}else if(JohnAverageScore===MaryAverageScore && JohnAverageScore>MikeAverageScore){
    console.log('L\'équipe de John et de Mary gagnent avec un ex æquo!');
}else if(MikeAverageScore===MaryAverageScore && MikeAverageScore>JohnAverageScore){
    console.log('L\'équipe de Mike et de Mary gagnent avec un ex æquo!');
}else{
    console.log('Les 3 équipes sont ex æquo!');
}