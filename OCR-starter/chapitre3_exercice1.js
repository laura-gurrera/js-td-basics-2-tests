// Jour suivant

/*
1. Stockez le jour actuel (nom du jour, type texte) dans une constante.
2. Écrivez des tests pour stocker dans une variable le nom du jour suivant dans chaque cas de figure :
   - Si le jour actuel est "lundi", alors le jour suivant est "mardi".
   - Si le jour actuel est "mardi", alors le jour suivant est "mercredi".
   - Si le jour actuel est "mercredi", alors le jour suivant est "jeudi".
   - Si le jour actuel est "jeudi", alors le jour suivant est "vendredi".
   - Si le jour actuel est "vendredi", alors le jour suivant est "samedi".
   - Si le jour actuel est "samedi", alors le jour suivant est "dimanche".
   - Si le jour actuel est "dimanche", alors le jour suivant est "lundi".
   - Si le jour actuel ne correspond à aucun des jours de la semaine, affichez dans la console "Erreur : jour non reconnu!"
3. Testez si la variable qui contient le nom du jour suivant n'est pas vide, et dans ce cas, affichez dans la console le message "Demain, nous serons …" suivi du nom du jour suivant.
*/

const monday = 'lundi', tuesday = 'mardi', wednesday = 'mercredi', thursday = 'jeudi', friday = 'vendredi',
    saturday = 'samedi', sunday = 'dimanche';

let today = tuesday;

/*if (today === monday) {
    console.log(`Demain, nous serons ${tuesday}.`);
} else if (today === tuesday) {
    console.log(`Demain, nous serons ${wednesday}.`);
} else if (today === wednesday) {
    console.log(`Demain, nous serons ${thursday}.`);
} else if (today === thursday) {
    console.log(`Demain, nous serons ${friday}.`);
} else if (today === friday) {
    console.log(`Demain, nous serons ${saturday}.`);
} else if (today === saturday) {
    console.log(`Demain, nous serons ${sunday}.`);
} else {
    console.log(`Demain, nous serons ${monday}.`);
}*/

switch (today) {
    case monday:
        console.log(`Demain, nous serons ${tuesday}.`);
        break;
    case tuesday:
        console.log(`Demain, nous serons ${wednesday}.`);
        break;
    case wednesday:
        console.log(`Demain, nous serons ${thursday}.`);
        break;
    case thursday:
        console.log(`Demain, nous serons ${friday}.`);
        break;
    case friday:
        console.log(`Demain, nous serons ${saturday}.`);
        break;
    case saturday:
        console.log(`Demain, nous serons ${sunday}.`);
        break;
    case sunday:
        console.log(`Demain, nous serons ${monday}.`);
        break;
}

// Exemple : si le jour actuel est "mardi", le programme devrait afficher "Demain, nous serons mercredi."

// N'oubliez pas de tester votre programme avec divers jours de la semaine.
