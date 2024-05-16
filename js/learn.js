//  Untuk memanajement penyimpanan pada web
// let objectOthers = {
//     tambah: function(tambahkanEnergi) {
//         this.limid += tambahkanEnergi;
//         console.log(`Halo ${this.name} selamat menikmati energinya `);
//     },

//     remove: function(kurangkanEnergi) {
//         this.limid -= kurangkanEnergi;
//         console.log(`Selamat beristirahat ${this.name}`);
//     },

//     istirahat: function(tambahkanDuaKaliLipat) {
//         this.limid += tambahkanDuaKaliLipat * 2;
//         console.log(`Hai ${this.name} selamat beristirahat`);


//     }
// }

// Membuat object
// function calonProgrammer(name, limid) {
//     // let object = Object.create(objectOthers);
//     this.name = name;
//     this.limid = limid;
//     // return object;
// }

// calonProgrammer.prototype.makan = function(add) {
//     this.limid += add;
//     return `Halo ${this.name} selamat anda menjadi software engineer`;
// }

// calonProgrammer.prototype.istirahat = function(add) {
//     this.limid += add * 2;
//     return `Halo ${this.name} selamat beristirahat`;
// }

// calonProgrammer.prototype.main = function(decrement)  {
//     this.limid -= decrement;
//     return `Halo ${this.name} selamat bermain`;
// }

// let myName = new calonProgrammer('Arjun', 10);
// // console.log(myName);

const buttonAdd = document.querySelector('.tambah');
const buttonDecrement = document.querySelector('.kurang');
let buttonOutput = document.querySelector('.output');
buttonOutput.innerHTML = 0;

buttonAdd.addEventListener('click', function() {
    buttonOutput.innerHTML = parseInt(buttonOutput.innerHTML) + 1;
});

buttonDecrement.addEventListener('click', function() {
    if(buttonOutput.innerHTML != 0) {
        buttonOutput.innerHTML = parseInt(buttonOutput.innerHTML) - 1;
    }
});


// function declaredment() {
//     result = 'Hello world';
//     alert(result);
//     var result;
// }

// declaredment();

// (function() {
//     alert('Hello world');
// })();

