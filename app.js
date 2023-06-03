const carsName = ['Fiat Nuova 500', 'Daihatsu Tanto', 'Daewoo Matiz'];
const carsImg = ['Fiat_500.jpg', 'daihatsu.jpg', 'matiz.jpg'];
const carsСapacity = ['110', '52', '70'];
const carsSize = ['1325 x 1320 x 2970', '3395 x 1475 x 1805', '3495 x 1495 x 1485'];
const carsPrice = ['1000000', '500000', '250000'];

let but1 = document.getElementById('but1');
let but2 = document.getElementById('but2');
let out1 = document.getElementById('out1');
let out21 = document.getElementById('out2-1');
let out22 = document.getElementById('out2-2');
let out23 = document.getElementById('out2-3');
let img1 = document.getElementById('img1');

let counter = 1;

but1.onclick = f1
but2.onclick = f2

function f1() {
    if (counter === 1) {
        out1.innerText = carsName[2];
        img1.setAttribute('src', carsImg[2]);
        out21.innerText = 'Мощность: '+carsСapacity[2]+' л.с.';
        out22.innerText = 'Габариты: '+carsSize[2];
        out23.innerText = 'Цена: '+carsPrice[2]+' рублей'
        counter = 3
        console.log(counter)
        return
    }
    if (counter === 2) {
        out1.innerText = carsName[0];
        img1.setAttribute('src', carsImg[0]);
        out21.innerText = 'Мощность: '+carsСapacity[0]+' л.с.';
        out22.innerText = 'Габариты: '+carsSize[0];
        out23.innerText = 'Цена: '+carsPrice[0]+' рублей'
        counter--
        console.log(counter)
        return
    }
    if (counter === 3) {
        out1.innerText = carsName[1];
        img1.setAttribute('src', carsImg[1]);
        out21.innerText = 'Мощность: '+carsСapacity[1]+' л.с.';
        out22.innerText = 'Габариты: '+carsSize[1];
        out23.innerText = 'Цена: '+carsPrice[1]+' рублей'
        counter--
        console.log(counter)
        return
    }   
}

function f2() {
    if (counter === 1) {
        out1.innerText = carsName[1];
        img1.setAttribute('src', carsImg[1]);
        out21.innerText = 'Мощность: '+carsСapacity[1]+' л.с.';
        out22.innerText = 'Габариты: '+carsSize[1];
        out23.innerText = 'Цена: '+carsPrice[1]+' рублей'
        counter = 2
        console.log(counter)
        return
    }
    if (counter === 2) {
        out1.innerText = carsName[2];
        img1.setAttribute('src', carsImg[2]);
        out21.innerText = 'Мощность: '+carsСapacity[2]+' л.с.';
        out22.innerText = 'Габариты: '+carsSize[2];
        out23.innerText = 'Цена: '+carsPrice[2]+' рублей'
        counter = 3
        console.log(counter)
        return
    }
    if (counter === 3) {
        out1.innerText = carsName[0];
        img1.setAttribute('src', carsImg[0]);
        out21.innerText = 'Мощность: '+carsСapacity[0]+' л.с.';
        out22.innerText = 'Габариты: '+carsSize[0];
        out23.innerText = 'Цена: '+carsPrice[0]+' рублей'
        counter = 1
        console.log(counter)
        return
    }   
}

let out3 = document.getElementById('out3')
let out4 = document.getElementById('out4')
let but3 = document.getElementById('but3')

document.addEventListener("DOMContentLoaded", f4)
but3.onclick = f3


function random (min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return counter = Math.floor(Math.random() * (max - min + 1)) + min;
}

const students = ['Иванов', 'Петров', 'Сидоров', 'Роналду', 'Месси', 'Холан', 'Бензема', 'Модрич', 'Неймар', 'Мбаппе']

function f3() {
    const grade = [random(2,5), random(2,5), random(2,5), random(2,5), random(2,5), random(2,5), random(2,5), random(2,5), random(2,5), random(2,5)];

    let str2 = '<tr><td>Фамилия</td><td>Оценка</td></tr>';
    let str3 = '';
    
    for (i=0; i<students.length; i++) {
        str2 += '<tr><td>'+students[i]+'</td><td>'+grade[i]+'</td></tr>'
    };

    for (i=0; i<grade.length; i++) {
        if (grade[i] === 2) {
            str3 += '<tr><td>'+students[i]+'</td></tr>'
        }
    };

    out3.innerHTML = str2
    out4.innerHTML = str3
    console.log(grade)


}

function f4() {
    let str = '<tr><td>Фамилия</td><td>Оценка</td></tr>';

    for (i=0; i<students.length; i++) {
        str += '<tr><td>'+students[i]+'</td><td>*</td></tr>'
    };

    out3.innerHTML = str
}