// function getYourName() {
//     function getNamesUser() {
//         let getNames = prompt('Masukkan nama anda');
//         if(getNames == 'Halo') {
//             alert('Anda salah');
//         } else {
//             alert(`Halo ${getNames}`);
//         }
//     }
//     getNamesUser();
// }
// getYourName();

// function privateMethod(name) {
//     return function(time) {
//         return console.log(`Halo ${name}, selamat ${time}, semoga harimu menyenangkan!`);
//     }
// }
// let nameUser = privateMethod('Arjun');

// let Pagi = nameUser('Pagi');
// let siang = nameUser('Siang');
// let sore = nameUser('Sore');
// let malam = nameUser('Malam');

// let nameUser = (function() {
//     let name = 'Arjun Samudera Ahli Fikri';
//     let age = 17;
//     let job = 'Software Engineer';
//     return function(time) {
//         return console.log(`Halo ${name}, selamat ${time}, umur anda ${age} tahun, dan provesi anda sekarang sebagai ${job}, semoga harimu menyenangkan!!`);
//     }
// })();

// nameUser('Pagi');
// nameUser('Siang');
// nameUser('Sore');
// nameUser('Malam');

// let getNumber = (function() {
//     let userChooseNumber = parseInt(prompt('hekki'));
//         return function(number) {
//             return console.log(userChooseNumber + number);
//     } 
// })();

// userChooseNumber = 100;

// getNumber(4);
// getNumber();
// getNumber();
// getNumber();
// getNumber();
// getNumber();
// getNumber();
// getNumber();
// getNumber();
// getNumber();
// getNumber();
// getNumber();


// Belajar arrow function expression
// Bersama Pak Sandhika Galih
// Arjun adalah programmer UNIWA di masa depan yang akan datang

let getNames = (name) => {
    return `Hello ${name}`;
}

console.log(getNames(`arjun`));
let getInformation = (name, time) => 
`Selamat ${time}, ${name} semoga harimu menyenangkan`;

console.log(getInformation('Arjun', 'Pagi'));

let getPrivateMethod = () => `Hello world!`;
console.log(getPrivateMethod());

const sideBar = document.querySelector('.sidebar');
const checklist = document.getElementById('hamburger-menu');
const heroImages = document.querySelector('.hero-images');
const buy = document.querySelectorAll('.footer-card');
const prize = document.querySelector('.value');
const reduce = document.querySelector('.footer-menu .span');
const cards = document.querySelectorAll('.card');

reduce.addEventListener('click', function() {
    const hargaa = 10000;
    if(prize.innerHTML != 0) {
        prize.innerHTML = parseInt(prize.innerHTML) - hargaa;
    }
    
    if(prize.innerHTML == 0) {
        prize.style.color = 'red';
    }
});

buy.forEach(function(element) {
    element.addEventListener('click', function() {
        const harga = 10000;
        prize.innerHTML = parseInt(prize.innerHTML) + harga;
    });
});
checklist.addEventListener('click', function() {
    if(checklist.checked) {
        sideBar.classList.add('geser');
    } else {
        sideBar.classList.remove('geser');
    }
});

