let coins = 0; 
let joy_point = 100;
let eat_point = 100;
let heal_point = 100;

function alertBtn() { 
    let a = true;
    let b = true;
    let text = document.getElementById("text");
    text.style.transform = ("translateY(-5vh)");

    let imgage = document.getElementById("imgage");
    let name = window.prompt("Введи имя животного");
    document.getElementById("name").innerHTML = name;
    do{
        let type = window.prompt("Выберите тип животного\n 1-кот\n 2-собака\n 3-мышь");
        if (type == 1) {
            imgage.innerHTML="<img src='img/cat.png'>";
            alert("Привет " + name);
            a=false;
        } else if (type == 2) {
            imgage.innerHTML="<img src='img/dog.png'>";
            alert("Привет " + name);
            a=false;
        } else if (type == 3) {
            imgage.innerHTML="<img src='img/maus.png'>";
            alert("Привет " + name);
            a=false;
        } else{
            alert("Вы ввели не правильные параметры");
            a=true;
        }  
    } while(a===true)
    let buttonsBotom = document.getElementById("buttons-bottom");
    buttonsBotom.style.transform = ("translateY(-1%)");
    setInterval(() => subtraction(), 3000);
    
    document.getElementById("heal_point").innerHTML = heal_point;
    
    document.getElementById("eat_point").innerHTML = eat_point;
    
    document.getElementById("joy_point").innerHTML = joy_point;
}
function coinBtn(){
    coins = coins + 2;
    document.getElementById("coins").innerHTML = coins;
}
function joyBtn(){
    if (joy_point===100) {
        alert("Он не хочет играться")
    } else{
        if (coins >= 10) {
            joy_point = joy_point + 2;
            document.getElementById("joy_point").innerHTML = joy_point;
            coins = coins - 10;
            document.getElementById("coins").innerHTML = coins;
        } else{
            alert("Не достаточно монет")

        }
    }
}
function eatBtn(){
    if (eat_point===100) {
        alert("Он не голоден")
    } else{
        if (coins >= 5) {
            eat_point ++;
            document.getElementById("eat_point").innerHTML = eat_point;
            coins = coins - 5;
            document.getElementById("coins").innerHTML = coins;
        } else{
            alert("Не достаточно монет")
        }
    }
}
function healBtn(){
    if (heal_point===100) {
        alert("Он не больной")
    } else{
        if (coins >= 15) {
            heal_point = heal_point + 3;
            document.getElementById("heal_point").innerHTML = heal_point;
            coins = coins - 15;
            document.getElementById("coins").innerHTML = coins;
        } else{
            alert("Не достаточно монет")
        }
    }
}
function subtraction(){
    joy_point--;
    eat_point--;
    heal_point--;
    document.getElementById("joy_point").innerHTML = joy_point;
    document.getElementById("eat_point").innerHTML = eat_point;
    document.getElementById("heal_point").innerHTML = heal_point;
    if (joy_point === 0 || eat_point === 0 || heal_point === 0) {
        alert("Молодец. Твой питомец сдох")
        location.reload()
    }
}