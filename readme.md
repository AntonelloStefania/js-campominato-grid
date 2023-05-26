PROBLEMA: creare una griglia di gioco quadrata da 100 celle. Quando l'utente clicca la cella, questa si colora ed emette un messaggio in console sulla cella cliccata.

1- creo markup statico
    1.1- associo una const al div in cui creo la griglia;

2- creo funzione che ciclizza la formazione delle celle;
    2.1- creo con js i div con la classe da stilizzare .square;
    2.2- stilizzo la classe;
    2.3- associo il contenuto al dom;

3- creo il ciclo che genera i numeri da 1 a n*celle;
    3-1 associo al valore di ogni cella il valore del numero corrispondente;

4- creo l'evento toggle che al click della cella (grazie a .toggle), applica la classe che colora .square;

