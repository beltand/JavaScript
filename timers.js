
function countdown (num){
    let countTimer = setInterval(function (){

            console.log(num);
            num = num-1;

            if (num <= 0) {
                clearInterval (countTimer);
                console.log ('DONE!')
            }
        
        }, 1000);
        }
