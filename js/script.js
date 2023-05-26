"use strict";
console.log("use strict")


//funzione per creare square
function squareGen(number){
    let square = document.createElement('div');
    square.classList.add('square')
    square.textContent = number
    return square
}

//scelta della difficoltà
const difficulty = document.getElementById('difficulty');
let difficulty_value;

difficulty.addEventListener('change', function(){
    difficulty_value= parseInt(difficulty.value);
    console.log(difficulty_value)
    
    const grid= document.getElementById('grid');
    grid.innerHTML="";
    for(let i=1; i<= difficulty_value; i++){
        let square = squareGen(i);
        grid.append(square);
        
        if(difficulty_value === 100){
            square.classList.add('easy');
        } else if (difficulty_value ===81){
            square.classList.add('medium')
        } else{
            square.classList.add('hard')
        }
        square.addEventListener('click', function(){
            this.classList.toggle('clicked');
        })
        
    }
});
//ciclo for per square
//console.log(grid)

const btn= document.getElementById('btn').addEventListener('click',function(){
    grid.classList.remove('none');
    grid.classList.add('appear');
}
)
