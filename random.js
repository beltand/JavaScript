function randomGame (){
    let i = 0;
    let game = setInterval (function (){
        if (Math.random() < .75){
            i++;
            return i;
            }
        else{
            clearInterval(game);
            console.log(i); //amount of times the interval run
        }
    }, 1000)
}

