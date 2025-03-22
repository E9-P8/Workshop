function runGame() {

    /*Dovremo convertire la stringa in numero in quanto con prompt 
     l'utente inserirà una stringa. Inseriamo quindi le due variabili
     sia string che number
     */
    let guessString = '';
    let guessNumber = 0;
    
    //boolean value che verifica che il numero è corretto o no
    let correct = false;

    //Inseriamo il numero di tentativi
    let numTries = 0;
   
    //uso const perche andremo a generare il numero random una volta per gioco  
    const randomNumber = Math.random() * 100;
    const randominteger = Math.floor(randomNumber);
    const target = randominteger + 1;

    /*Per scriverlo in un'unica riga:
     const target = Math.floor(Math.random() * 100) +1; */

    do{
        guessString = prompt("I'm thinking of a number in the range 1 to 100. \n\n"); // /n crea una nuova linea
        guessNumber =+ guessString; //inserisce una stringa in un numero
        numTries +=1; //ogni volta che il loop itera aggiunge 1
        //Questa funzione compara i due valori e ritorna true o false
        correct = checkGuess(guessNumber, target); 
    } while (!correct); //Finchè non è corretto continuo il loop
     
    alert('You got it! The number was ' + target + '\n\nIt took you ' +numTries + ' tries to guess correctly!' ); 

}
     function checkGuess(guessNumber, target){
        let correct = false;

        if(isNaN(guessNumber)){
            alert('You have not entered a number. \n\nPlease enter a number in the 1-100 range.');
        } else if((guessNumber < 1) || (guessNumber > 100)){
            alert('Please enter an integer in the 1-100 range.');
        }else if(guessNumber > target){
            alert('Your number is too large');
        }else if(guessNumber < target){
            alert('Your number is too small');
        } else{
            correct = true;
        }
        return correct;
     }

