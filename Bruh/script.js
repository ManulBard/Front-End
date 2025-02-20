//alert('Привет,я JS');


function guess(){
   var number = prompt('Введи число:');
var guessNumber = 10;
if(number==guessNumber){
    alert("Победа!");
}
else if(number > guessNumber){
    alert("Это много!")
    return guess();
}
else{
    alert("Это мало!");
    return guess();
}
 
}
//guess();
function reminder(){
    alert('Так але я не понял это че ?');
    
    
}
//setTimeout(reminder,5000);

function validForm{
    var name=document.getElementById('name').value;
    
    var reg_name=/^[a-zа-яё]+$/i;
    if(reg.name.test(name)==false){
        alert('Неверные Данные УЕ!')
    }
}
document.querySelector('.button').addEventListener('click',validForm);
