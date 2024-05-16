const container = document.querySelector('.container');
const gallerys = document.querySelectorAll('.laptop');
const heroImage = document.querySelector('.big-image');
// const helloWorld = document.querySelector('.hello-world');

container.addEventListener('click', function(e) {
    if(e.target.className == 'laptop') {
        heroImage.src = e.target.src;
    }
});
gallerys.forEach(function(e) {
    e.addEventListener('click', function(element) {
        if(element.target.className == 'laptop') {
            element.target.classList.add('animationBlur');
        } else {
            element.target.classList.remove('animationBlur');
        }
    });
});

let parentHelloWorld = document.querySelector('.hello-world');

let liNew = document.createElement('li');
let textNode = document.createTextNode('hello world ini adalah list terbaru saya');
liNew.appendChild(textNode);
parentHelloWorld.appendChild(liNew);
// parentHelloWorld = parentHelloWorld.children;
// parentHelloWorld.filter(function(e) {
//     if(e.className == 'special') {
//         return 'hello, ini class special';
//     }
// })
// console.log(parentHelloWorld);

// let liChild = document.querySelector('.hello-world li:nth-child(3)');
// // liChild = liChild.parentElement;
// while(liChild) {
//     liChild = liChild.nextElementSibling;
//     console.log(liChild);
// }