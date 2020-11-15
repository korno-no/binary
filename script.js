function startMachine(){
    document.getElementById('machine').style.display = 'block';
    document.getElementById('human').style.display = 'none';
    restartBtn.style.display= "block";

}
function startHuman(){
    document.getElementById('human').style.display = 'block';
    document.getElementById('machine').style.display = 'none';
    restartBtn.style.display= "block";
}

var machineBtn = document.getElementById('machineBtn')
var humanBtn = document.getElementById('humanBtn')


var minEl = document.querySelector('.min');// минимальное число
var maxEl = document.querySelector('.max'); // максимальное число
var howTurnsBtn = document.querySelector('.howTurnsBtn'); // кнопка которая запускат функцию подсчета сколько шагов
var howTurn = document.querySelector('.howTurn'); // ответ сколько попыток
var inputNumber=document.getElementById('inputNumber'); // отгадывание
var startBtn=document.getElementById('btnStart');//кнопка запускающая игру
var message=document.getElementById('message');// сообщение об ошибке валидации
var massage2=document.getElementById('message2');// ссообщениеоб ошибке валидации 2
var vyvod = document.getElementById('vyvod'); // выводятся введенные раньше числа
var answer = document.getElementById('answer'); // говорит больше или меньше
var restartBtn = document.getElementById('restartBtn'); // кнопка рестарта

var maxTrials = "";
var min, max =0;

// загадывает человек, а отгадывает машина
var minEl2 = document.getElementById('min2');// минимальное загаданное число компутером
var maxEl2 = document.getElementById('max2');//максимальное загаданное число компутером
var message3 = document.getElementById('message3');// сообщение об ошибках в валидации3
var btnStart2 = document.getElementById('btnStart2');// кнопка старта 2
var result = document.getElementById('result');// сообщение
var lessBtn = document.getElementById('lessBtn');
var yesBtn = document.getElementById('yesBtn');
var biggerBtn = document.getElementById('biggerBtn');

var numToAsk = undefined;

restartBtn.style.display= "none";


startBtn.disabled = true; 
restartBtn.disabled = true; 
lessBtn.disabled  = true; 
yesBtn.disabled  = true; 
biggerBtn.disabled  = true; 

function howTurnsF(){ // функция определяющая сколько попыток и загадывающая число

    randomNumber = myRandom(min, max);    

    console.log(randomNumber);

    maxTrials = Math.ceil(Math.log2( max - min + 1));

    console.log(maxTrials);

    if (maxTrials !== maxTrials){

        message.innerHTML = '';
    }
    else{
        message.innerHTML =`you have  ${maxTrials}  attempts`;

        massage2.style.opacity = 1;
    }
    startBtn.disabled = false;
}

var count = 0;

function validatsia1(from){ // на кнопку 1    
    
    message.innerHTML = `enter number`; 
    
    if(minEl.value === "" || maxEl.value === "" ){

        return  message.innerHTML = `enter number`;  
   }
    min = parseFloat(minEl.value);
    max = parseFloat(maxEl.value); 

    
    if (min >= max || max === 0){

        return message.innerHTML = `the second number must be greater than the first`;
    }
    else if(min < 0 || max < 0){

        return message.innerHTML = `enter positive number`;
    }    
  
    else if (min % 1 !== 0 || max % 1 !== 0){

        return message.innerHTML = `enter an integer number`;
    }
    else{

        message.innerHTML = "find out how many attempts you have";
        
    }
    if (from === 'click'){

        message.innerHTML = "<br>";
        
        howTurnsF(); 
    }
}


function validatsia2(from){

    if(inputNumber.value === ""){

        return massage2.innerText = 'enter number';
    }
    number = parseFloat(inputNumber.value);
    min = parseFloat(minEl.value);
    max = parseFloat(maxEl.value);

    if (number>max){

        return  massage2.innerText = `enter a number less than  ${max}`;
    }
    else if(number<min){

        return  massage2.innerText = `enter a number greater than ${min}`;
    }
    else if(number<0){
        
        return message2.innerText = 'enter positive number';
    }
    else if(number === 0){

        return massage2.innerHTML = "<br>";

    }
    else if(min % 1 !== 0){

        return message2.innerText = 'enter an integer number';
    }
    else{
        message2.innerHTML = "<br>";
    }
    if(from==='click'){

        game();
    }

}

function game(){ 

    howTurnsBtn.disabled = true;

    maxTrials -= 1;

    message.innerHTML =  `you have ${maxTrials} attempts`;

    if( number === randomNumber){
        startBtn.disabled = true;

        restartBtn.disabled = false;

        restartBtn.classList.add("activeRest");
        
        return answer.innerText =  `${number} congratulations, you win`;
    
    }

    if(maxTrials === 0){

        startBtn.disabled = true;

        restartBtn.disabled = false;

        restartBtn.classList.add("activeRest");

        return answer.innerText = `you lose`;

    }

    vyvod.innerText= ` ${vyvod.innerText} ${number}`;

        if(number>randomNumber){

            answer.innerText = `${number} is bigger than number`;
        }
        else if(number<randomNumber){

            answer.innerText =  `${number} is less than number`;
        }   

        
}

function myRandom(min, max){

    return Math.floor(Math.random()*(max-min+ 1))+min;
}


function validtsia3(from){

    if(minEl2.value === "" || maxEl2.value === "" ){

        return  message3.innerText = 'enter number';  
    }
        
    min = parseFloat(minEl2.value);
    max = parseFloat(maxEl2.value); 

    if (min >= max){

        return message3.innerText = 'the second number must be greater than the first';
    }
    else if (min === 0 || max === 0){

        return message3.innerHTML = "<br>";
    } 
    else if(min < 0 || max < 0){

        return message3.innerText = 'enter positive number';
    }    
    else if (min % 1 !== 0 || max % 1 !== 0){

        return message3.innerText = 'enter an integer number';
    }
    else{
        message3.innerHTML = "<br>";
    }

    if (from  === 'click'){

        lessBtn.disabled  = false; 
        yesBtn.disabled  = false; 
        biggerBtn.disabled  = false;

        binarySearch();
    }


}

var countMachine = 0

function binarySearch(){

    message3.innerHTML = "<br>";

    btnStart2.disabled = true;

    numToAsk = Math.ceil(((max - min + 1)/2) + min - 1);

    countMachine += 1

    result.innerText = `this is your number? ${numToAsk}`;
    
}

function yesF(){
    
    btnStart2.disabled=true;

    restartBtn.disabled = false;

    lessBtn.disabled  = true;

    yesBtn.disabled  = true; 

    biggerBtn.disabled  = true; 

    restartBtn.classList.add("activeRest");
    
    return result.innerText = `machine guessed your number ${numToAsk} in ${countMachine} guesses`;
}

function biggerF(){

    min = numToAsk;

    numToAsk = Math.ceil(((max - min + 1)/2) + min - 1);

    countMachine += 1;

    return result.innerText = `this is your number? ${numToAsk}`;
}

function lessF(){

    max = numToAsk;

    numToAsk = Math.ceil(((max - min +1)/2) + min - 1);

    countMachine += 1

    return result.innerText = `this is your number? ${numToAsk}`;
}

function restart(){

    window.location.reload();
}




machineBtn.addEventListener('click',startMachine);// выбор режима
machineBtn.addEventListener("click", function(){this.classList.add("active");});// создаёт при клике новый класс, с помощью которого кнопка сохранит 2 цвет

humanBtn.addEventListener('click',startHuman);
humanBtn.addEventListener("click", function(){this.classList.add("active");});


howTurnsBtn.addEventListener('click',validatsia1.bind(this,'click'));// валидация на первую кнопку нужна ли она, да нужна
maxEl.addEventListener('input',validatsia1);// включение кнопки при повторном вводе
minEl.addEventListener('input',validatsia1);
inputNumber.addEventListener('input',validatsia2);
startBtn.addEventListener('click',validatsia2.bind(this,'click'));


minEl2.addEventListener('input',validtsia3);
maxEl2.addEventListener('input',validtsia3);
btnStart2.addEventListener('click',validtsia3.bind(this,'click')); // запускает функцию только после прохождения всех проверок и нажатии кнопки


document.getElementById('yesBtn').addEventListener('click',yesF);
document.getElementById('lessBtn').addEventListener('click',lessF);
document.getElementById('biggerBtn').addEventListener('click',biggerF);

restartBtn.addEventListener('click',restart);
